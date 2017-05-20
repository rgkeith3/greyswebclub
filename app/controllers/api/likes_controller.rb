class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render text: 'liked!'
    else
      render text: 'whoops'
    end
  end

  def destroy
    @like = Like.find_by_id(params[:id])
    @like.destroy
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end
