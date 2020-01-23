require 'test_helper'

class ThingsControllerTest < ActionDispatch::IntegrationTest
  test 'gets index' do
    get root_url
    assert_response :success
    assert_select 'h1', 'Long and inifinte listing'
    assert_select 'ol li', 15
  end

  test 'gets items only in ajax' do
    get root_url, xhr: true
    assert_select 'h1', 0
    assert_select 'ol', 0
    assert_select 'li', 15
  end
end
