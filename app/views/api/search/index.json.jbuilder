json.users @users.each do |user|
  json.extract! user, :id, :username
end
json.posts @posts.each do |post|
  json.extract! post, :id, :content
end
