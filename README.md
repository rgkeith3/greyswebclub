# Tumblr-Clone
#### A full-stack project by Grey Keith

the yet to be named tumblr clone is a web application that facilitates the sharing of various media with a community and interacting with other people's media by liking the content. Users can also follow the content feeds of particular users that they like.

Where many social media sites online are bloated with unnecessary features and buttons, cluttered views and cumberson navigation, this web app was an attempt to de-clutter the social sites that demand so much of our attention, as well as create a comfortable browsing atmosphere, letting the content shine.

It was built using Ruby on Rails, React/Redux and PostgreSQL.

## Technologies
--------
Ruby on Rails is an MVC back-end framework that was used for fetching and storing data to a PostgreSQL database. Rails was chosen as a back-end api for it's quick and relatively simple, some might even say 'magic', setup and use. The front-end was written in javascript's React library for it's reusable components and it's ability to simply produce and organize a Single Page Application. It was used along with the unidirectional data-flow of the Redux framework to create a sturdy, simple, interactive web app.

## Features and Implementation
-----

### The Feed

The central feature of the app is the feed. Depending on what page the user is visiting, the feed will show posts from different users. It is the main way in which users interact with the application and each other.

The Feed consists of posts that are organized in chronological order by when they were created. From the feed, the user can follow the content's creator, or show appreciation for the post with a like.

### The Nav-bar

The Nav-bar is present at all times the web app is open. On the right side there are navigation links depending on if the user is logged in or not.

If they are not logged in, the navigation links will show links to either login or sign up.

If they are logged in, they can find links to the **Explore**,**Dashboard** and their own **User** page, as well as a button to logout.

On the left-side of the Nav-bar is a search bar that searches users and posts. A drop-down appears and the user can select a search result and be taken to those pages.

### The Dashboard

The Dashboard is represented by the home icon on the nav bar and is the first place a user is directed when they log in. The Dashboard is where a user can see posts by the other users they follow as well as their own posts. In addition to seeing posts, the Dashboard is where a user creates a new post.

### The Post Form

The Post Form is located at the top of the Dashboard and is how a user posts new content to their feed. the user can create a new text post, post an image (jpg, png or gif), post an audio file (mp3), post a url, or post a video (mpg). the Post form accepts dragging and dropping files into the post form.

### The Explore page

The Explore page is represented by the globe icon on the Nav-bar. The Explore page shows all the posts on the site, regardless of if the user follows the creator of the post. The Explore page allows users to find new content by users they don't follow.

The Explore page features an infinite scroll, that allows the user to scroll to the bottom of the page forever, constantly loading more content. but user beware, as you scroll further down the feed gets darker and scarier. If you venture far enough, you won't be able to read posts and should probably go outside.

### The User's page

A user's page can be accessed by searching for their username in the search bar. The User's page shows all of a User's content they've ever posted. From the user's page, a user can like their posts or follow the user, unless they are looking at their own user page, in which case they cannot follow themselves, because c'mon.

### The Post page

A user can search for a particular post they may remember and can click on a link to the post's page. There they can see a simple view of the single post. They can share the url with a friend or bookmark it for later.

## Future Improvements
-----
#### Improved Infinite scroll on all feeds

#### Tagging posts

#### User to User Messaging.
