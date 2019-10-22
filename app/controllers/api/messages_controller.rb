class Api::MessagesController < ApplicationController
  def index
    group = Group.find(params[:group_id])
    last_message_id = params[:id].to_i
    @messages = group.messages.includes(:user).where("id > #{last_message_id}")
    respond_to do |format|
      format.html{redirect_to group_messages_path(@group)}
      format.json
    end
  end
end