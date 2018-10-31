class CommentsController < ApplicationController
  def new
    @post = Post.find(params[:post_id])
    @comment = Comment.new
  end

  def create
    @post = Post.find(params[:post_id])
    @comment = Comment.new(comment_params)
    # @comment = @post.comments.build(comment_params)

    if @comment.save
      respond_to do |format|
        format.html { redirect_to new_post_comment_path(@post.id) }
        format.js
      end
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :photo, :user_id, :post_id)
  end
end
