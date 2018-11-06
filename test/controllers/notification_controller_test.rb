require 'test_helper'

class NotificationControllerTest < ActionDispatch::IntegrationTest
  test "should get lists" do
    get notification_lists_url
    assert_response :success
  end

end
