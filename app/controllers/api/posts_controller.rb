class Api::PostsController < ApplicationController
  def index
    @posts = Post.includes(:likes).all
    @current_user = User.find_by_session_token(session[:session_token])
    render :index
  end

  def explore
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
    render json: "BALETED!"
  end

  private
  def post_params
    params.require(:post).permit(:user_id, :post_type, :content, :attachment)
  end
end
