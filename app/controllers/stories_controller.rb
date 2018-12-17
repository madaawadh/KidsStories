class StoriesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # 422 Unprocessable Entity (add this line ^)
  def index
    if params[:level]
      @stories = Story.where(level: params[:level])
    else 
      @stories = Story.all
    end
  end

  def show
    @story = Story.find_by(id: params[:id])
  end

  def new
  end

  def create
    story = Story.create(title: params["title"], body: params["body"], image: params["image"], min: params["min"],level: params["level"])
    render json: story
  end

  def edit
  end

  def destory
  end
end