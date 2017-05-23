json.extract! @post, :id, :post_type, :content, :user
unless @post.post_type == 'url' || @post.post_type == 'txt'
  json.attachment_url asset_path(@post.attachment.url)
end
