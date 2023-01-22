class OrdersController < ApplicationController
    # before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    
    def index
        if session[:user_id]
            user=User.find_by(id:[session[:user_id]])
            orders=user.orders
            render json: orders, include: :product, status: :ok
        else
            render json: {errors:["Not logged in."]}, status: :unauthorized
        end
    end
    
    def create
        if session[:user_id]
            user=User.find_by(id:[session[:user_id]])
            order=user.orders.create!(order_params)
            render json: order, status: :created
        else
            render json: {errors:["Not logged in."]}, status: :unauthorized
        end
    end

    def update
        order=Order.find_by(id: params[:id])
        order.update!(order_params)
        render json: order, status: :created
    end

    private
    
    def order_params
        params.permit(:quantity, :product_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: {errors: ["Not authorized."]}, status: :unauthorized unless session.include? :user_id
    end

    def render_not_found_response
        render json: {errors:["Order not found."]}, status: :not_found
    end
end
