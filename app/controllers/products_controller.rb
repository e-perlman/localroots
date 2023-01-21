class ProductsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        products=Product.all
        render json: products
    end

    def create
        product=Product.create!(product_params)
        render json: product, status: :created
    end

    def show
        product=find_product
        render json: product, status: :ok
    end

    def destroy
        product=find_product
        product.destroy
        head :no_content
    end

    def myproducts
        if session[:user_id]
            user=User.find_by(id:[session[:user_id]])
            products=user.products
            render json: products, status: :ok
        else
            render json: {errors:["Not logged in."]}, status: :unauthorized
        end
    end

    private

    def product_params
        params.permit(:name, :category, :store, :price, :rating)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
    end

    def find_product
        Product.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Product not found" }, status: :not_found
    end
end
