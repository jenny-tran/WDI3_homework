require 'sinatra/reloader'
require 'sinatra'
require 'pry'
require 'httparty'

# require 'utf8-cleaner'
# use UTF8Cleaner::Middleware

before do
  # @movie_link = 
end


get '/' do

  @search = "#{params[:search_string]}"
  url = "http://www.omdbapi.com/?s=#{params[:search_string]}"
  response = HTTParty.get(url)
  @results = response["Search"]
  @count = @results.count

  erb :index

end


# get '/movies/:movie_title' do
#   url = "http://www.omdbapi.com/?t=#{params[:movie_title]}"
#   response = HTTParty.get(url) 

#   if "#{params[:movie_title]}" && !"#{params[:movie_title]}".empty?
#     @image = response["Poster"]
#     @title = response["Title"]
#     @year = response["Year"]
#     @director = response["Director"]
#     @rated = response["Rated"]
#     @runtime = response["Runtime"]
#     @genre = response["Genre"]
#     @actors = response["Actors"]
#     @plot = response["Plot"]

#     @details = response
#   end

#   erb :show

# end


  # http://img.omdbapi.com/?apikey=[yourkey]&




