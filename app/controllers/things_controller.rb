class ThingsController < ApplicationController
  def index
    @items = ['an item'] * 5
  end
end
