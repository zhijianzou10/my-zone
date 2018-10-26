class ZoneTagsController < ApplicationController
  def new
    @user = current_user
    @zone = Zone.find(params[:zone_id])
    @zone_tag = ZoneTag.new
  end

  def create
    @user = current_user
    @zone = Zone.find(params[:zone_id])
    zone_tag_params.require(:interest_tag).each do |interest|
      @zone_tag = ZoneTag.new(interest_tag_id: interest)
      @zone_tag.zone = @zone
      @zone_tag.save
    end
    redirect_to root_path
  end

  private

  def zone_tag_params
    params.require(:zone_tag).permit(interest_tag:[])
  end
end
