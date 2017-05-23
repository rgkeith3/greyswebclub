json.extract! user, :id, :username
json.followees do
  user.out_follows.each do |follow|
    json.set! follow.followee_id, follow.id
  end
end
json.followers do
# the 'followers' slice of the currentUser state has the ids of users followers ids for quick lookup and the values are the ids of the follows in the db for deletion 
  user.in_follows.each do |follow|
    json.set! follow.follower_id, follow.id
  end
end
