class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find_by_id(params[:id])
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
    params.require(:post).permit(:user_id, :post_type, :content)
  end
end
