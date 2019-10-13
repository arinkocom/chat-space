class GroupsController < ApplicationController
  def index
    @groups = groups.all
  end
  def new
  end
  def create
    @groups.create
  end
end
