class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  include Pundit

  layout :layout_by_resource

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:firstname, :lastname, :gender, :birth_year])
    devise_parameter_sanitizer.permit(:account_update, keys: [:firstname, :lastname, :gender, :birth_year])
  end

  # def after_sign_in_path_for(resource)
  #    new_user_zone_path(current_user)

  def default_url_options
    { host: ENV["HOST"] || "localhost:3000" }
  end

  private

  def layout_by_resource
    if devise_controller?
      "devise"
    else
      "application"
    end
  end

end
