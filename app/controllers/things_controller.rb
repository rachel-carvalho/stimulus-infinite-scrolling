class ThingsController < ApplicationController
  def index
    @page = params['page'] || 1
    @items = ["an item from page #{@page}"] * 15
    render partial: 'item', collection: @items if request.xhr?
  end
end
