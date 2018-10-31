class ZonesController < ApplicationController
  before_action :set_zone, only: [:edit, :update, :destroy]
  def index
    @user = current_user
    @zones = @user.zones
  end

  def new
    @user = current_user
    @zone = Zone.new
  end

  def create
    @zone = Zone.new(zone_params)
    @zone.user = current_user
    if @zone.save
      redirect_to root_path
    else
      render 'zones/new'
    end
  end

  def edit
    @user = @zone.user
    @zone
    @zone_tags = @zone.zone_tags
  end

  def update
    @user = @zone.user
    if @zone.update(zone_params)
      redirect_to zones_path
    else
      render 'zones/edit'
    end
  end

  def destroy
    @user = @zone.user
    @zone.destroy
    redirect_to zones_path
  end

  private
  def set_zone
    @zone = Zone.find(params[:id])
  end

  def zone_params
    params.require(:zone).permit(:address, :radius, :title, interest_tag_ids:[])
  end
end
