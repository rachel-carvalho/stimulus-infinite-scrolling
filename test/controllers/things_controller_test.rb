require 'test_helper'

class ThingsControllerTest < ActionDispatch::IntegrationTest
  test 'gets index' do
    get root_url
    assert_response :success
    assert_select 'h1', 'Long and inifinte listing'
    assert_select 'ol li', 5
  end
end
