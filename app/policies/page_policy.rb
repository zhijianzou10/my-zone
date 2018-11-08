class PagePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def dashboard_heatmap?
    user.is_admin == true
  end
end
