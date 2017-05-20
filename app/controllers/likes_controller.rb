class LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render text: 'liked!'
    else
      render text: 'whoops'
    end
  end

  def destroy
    @like = Like.where(like_params)
    @like.destroy
  end

  private

  def like_params
    params.require(:id).permit(:user_id, :post_id)
  end
end
