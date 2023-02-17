class OrdersController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def value
        value=params[:number].to_f
        orders=Order.all.select {|order| order.product.price < value}
        render json: orders
    end

    def store
        store=params[:store]
        products=Product.all.filter{|product| product.store.downcase.include?(store.downcase)}
        orders=products.map{|product| product.orders}
        if orders.flatten.length>0
            render json: orders.flatten
        else
            render json: {error:"No orders found."}
        end
    end
    
    def index
        user=find_user
        orders=user.orders
        render json: orders, include: :product, status: :ok
    end
    
    def create
        user=find_user
        order=user.orders.create!(order_params)
        render json: order, status: :created
    end

    def update
        order=find_order
        order.update!(order_params)
        render json: order, status: :created
    end

    def destroy
        order=find_order
        order.destroy
        head :no_content
    end

    private
    
    def find_user
        User.find_by(id:[session[:user_id]])
    end

    def order_params
        params.permit(:quantity, :product_id)
    end

    def find_order
        user=User.find_by(id:[session[:user_id]])
        user.orders.find(params[:id])
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: {errors: ["Not logged in."]}, status: :unauthorized unless session.include? :user_id
    end

    def render_not_found_response
        render json: {errors:["Order not found."]}, status: :not_found
    end
end
