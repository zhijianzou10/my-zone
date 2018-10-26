class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy]
  def index
    @posts = current_user.posts.all
  end

  def new
    @user = current_user
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user
    if @post.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
    @user = @post.user
    @zone = @post.zone
    @post
  end

  def update
    if @post.update(post_params)
      redirect_to root_path
    else
      render 'edit'
    end
  end

  def destroy
    @user = @post.user
    @post.destroy
    redirect_to  user_path(@user)
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content, :photo, :interest_tag_id, :zone_id)
  end
end
