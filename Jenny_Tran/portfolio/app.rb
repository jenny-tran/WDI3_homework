require 'pry'
require 'sinatra'
require 'sinatra/reloader' # auto reloas

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/contact' do
  erb :contact
end

get '/submit' do
  erb :submit, :locals => {:name => params[:name]}
end


