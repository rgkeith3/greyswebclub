json.array! @posts do |post|
  json.extract! post, :id, :post_type, :content
end
