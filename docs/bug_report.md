## form re-render wasn't working

when I would use the form to add a new post, it would work until i decided to
create a new form, at which point, upon submit, it would throw an error and not
render the new post on the page.

we traced it all the way through and what was the error was my jbuilder was returning
the posts as an array of json objects. when the reducer merged posts with an array of posts,
javascript converts the object key to an index and fills in the empty array spaces with null.
so when the dashboard tried to render the content of each item in the posts array, it threw an error
at 'null.content'
