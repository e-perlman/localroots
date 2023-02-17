class SessionsController < ApplicationController

    def create
        user=User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id]=user.id 
            render json: user, include: ['orders', 'orders.product', 'products'], status: :created
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.delete :user_id
            head :no_content
        else
            render json: {errors:["Not logged in"]}, status: :unauthorized
        end
    end
end
