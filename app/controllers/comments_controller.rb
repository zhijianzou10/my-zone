class CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(comment_params)
    redirect_to root_path
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :photo, :user_id, :post_id)
  end
end
