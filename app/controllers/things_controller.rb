class ThingsController < ApplicationController
  def index
    @items = ['an item'] * 15
    render partial: 'item', collection: @items if request.xhr?
  end
end
