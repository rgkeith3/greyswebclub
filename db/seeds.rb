# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all

guest = User.create({username: 'guest', password: 'password'})

20.times do
  user = User.new
  user.username = Faker::Internet.user_name
  user.password = 'password'
  user.save
end

users = User.all

20.times do
  users.each do |user|
    p = Post.new
    p.user_id = user.id
    p.post_type = ['txt', 'url', 'pic'].sample
    if p.post_type == 'txt'
      p.content  = Faker::ChuckNorris.fact
    elsif p.post_type == 'url'
      p.content = Faker::Internet.url
    else
      image = 'giphy ' + (['(1)','(2)','(3)',]).sample + '.gif'
      path = Rails.root.join('app','assets','images', image)
      p.attachment = File.open(path)
    end
    p.save
  end
end

posts = Post.all

def like(user, post)
  l = Like.new
  l.user_id = user.id
  l.post_id = post.id
  l.save
end

50.times do
  users.each do |user|
    post = posts.sample
    like(user, post)
  end
end

20.times do
  users.each do |user|
    user2 = users.sample
    while user2.id == user.id
      user2 = users.sample
    end
    Follow.create({follower_id: user.id, followee_id: user2.id})
  end
end
