@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :post_type, :content
    unless post.post_type == 'url' || post.post_type == 'txt'
      json.attachment_url asset_path(post.attachment.url)
    end
  end
end
