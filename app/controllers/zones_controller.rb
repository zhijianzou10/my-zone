class ZonesController < ApplicationController
  before_action :set_zone, only: [:edit, :update, :destroy]
  def index
    @zones = Zone.all
  end

  def new
    @user = current_user
    @zone = Zone.new
  end

  def create
    @zone = Zone.new(zone_params)
    @zone.user = current_user
    if @zone.save
      redirect_to new_user_zone_zone_tag_path(@zone.user, @zone)
    else
      render 'zones/new'
    end
  end

  def edit
    @user = @zone.user
    @zone
  end

  def update
    @user = @zone.user
    if @zone.update(zone_params)
      redirect_to user_path(@user)
    else
      render 'zones/edit'
    end
  end

  def destroy
    @user = @zone.user
    @zone.destroy
    redirect_to user_path(@user)
  end

  private
  def set_zone
    @zone = Zone.find(params[:id])
  end

  def zone_params
    params.require(:zone).permit(:latitude, :longtitude, :radius, :title)
  end
end
