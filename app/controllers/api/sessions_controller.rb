class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Username/Password"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: ['logged Out'], status: 200
    else
      render json: ["Why would you do that?"], status: 404
    end
  end
end
