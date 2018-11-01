class RegistrationsController < Devise::RegistrationsController
  def after_sign_up_path_for(resource)
    new_zone_path(current_user)
  end

end
