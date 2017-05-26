class Api::SearchController < ApplicationController
  def index
    @query = params[:query]
    @users = User.where('username LIKE ?', "%#{@query}%")
    @posts = Post.where('UPPER(content) LIKE UPPER(?)', "%#{@query}%")
    render :index
  end
end
