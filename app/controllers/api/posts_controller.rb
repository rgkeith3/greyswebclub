class Api::PostsController < ApplicationController
  def index
    @current_user = User.find_by_session_token(session[:session_token])
    @posts = (@current_user.followed_posts.includes(:likers, :user) +
      @current_user.posts.includes(:likers, :user))
        .uniq.sort_by(&:created_at)
    render :index
  end

  def explore
    @offset = params[:offset]
    @posts = Post.includes(:likers, :user).all.order(created_at: :desc).limit(15).offset(@offset)
    render :index
  end

  def create
    post_data = post_params
    post_data[:attachment] = nil if post_data[:attachment] == 'null'
    @post = Post.new(post_data)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.includes(:likers).find_by_id(params[:id])
  end

  def update
    @post = Post.find_by_id(params[:id])

    if @post.update_attributes(content: params[:post][:content])
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find_by_id(params[:id])

    @post.destroy
  end

  private
  def post_params
    params.require(:post).permit(:user_id, :post_type, :content, :attachment)
  end
end
