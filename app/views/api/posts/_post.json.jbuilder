
json.extract! post, :id, :post_type, :content
unless post.post_type == 'url' || post.post_type == 'txt'
  json.attachment_url asset_path(post.attachment.url)
end
json.user do
  json.extract! post.user, :id, :username
end
# build a likes object with the user_ids as keys for fast lookup
json.likers do
  post.likes.each do |like|
    # in the likers object, the key is the user_id and the value is the like id
    json.set! like.user_id, like.id
  end
end
