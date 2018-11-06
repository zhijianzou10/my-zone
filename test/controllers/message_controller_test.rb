require 'test_helper'

class MessageControllerTest < ActionDispatch::IntegrationTest
  test "should get list" do
    get message_list_url
    assert_response :success
  end

end
