class ThingsController < ApplicationController
  def index
    @items = ['an item'] * 5
    render partial: 'item', collection: @items if request.xhr?
  end
end
