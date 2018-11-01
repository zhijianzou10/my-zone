class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy, :good]
  def index
    @posts = current_user.posts.all
  end

  def new
    @user = current_user
    @post = Post.new
    @zones = @user.zones
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
    @user = current_user
    @zone = @post.zone
    @post
  end

  def update
    if @post.update(post_params)
      redirect_to user_path(@post.user)
    else
      render 'edit'
    end
  end

  def destroy
    @user = current_user
    @post.destroy
    redirect_to user_path(@user)
  end

  def good

    if Good.find_by_user_id_and_post_id(current_user.id, params[:id]) == nil
      Good.create(post_id: params[:id], user_id: current_user.id, is_good: params[:is_good])
    elsif
      good = Good.find_by_user_id_and_post_id(current_user.id, params[:id])
      if good.is_good == true
        good.update(is_good: false)
      else
        good.update(is_good: true)
      end
    end
    respond_to do |format|
        format.html { redirect_to new_post_comment_path(@post.id) }
        format.js
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content, :photo, :interest_tag_id, :zone_id)
  end
end
