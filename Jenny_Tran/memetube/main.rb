require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

get '/' do
  sql = 'SELECT * FROM videos;'
  @videos = run_sql(sql)


  erb :index
end


get '/videos/new' do
  erb :new
end

post '/videos' do
  sql = "INSERT INTO videos (title, description, url, genre) VALUES ('#{params[:title]}', '#{params[:description]}', '#{ params[:url]}', '#{params[:genre]}' )"
  run_sql(sql)
  redirect to '/'
end

# to show the edit form
get '/videos/:id/edit' do
  sql = "SELECT * FROM videos WHERE id = #{ params[:id] };"
  @videos = run_sql(sql)
  @video = @videos[0]
  erb :edit
end

# update the video
post '/videos/:id' do
  "updating video" #finish update
  sql = "UPDATE videos SET title='#{ params[:title]}', description='#{ params[:description]}', url='#{ params[:url] }', genre='#{ params[:genre]}' WHERE id = #{ params[:id] };"
  run_sql(sql)
  redirect to "/videos/#{ params[:id] }"
end

# show the actual video
get  '/videos/:id' do
  sql = "SELECT * FROM videos WHERE id = #{ params[:id] };"
  @video = run_sql(sql)[0]
  erb :show
end

# delete the actual video
post '/videos/:id/delete' do
  sql = "DELETE FROM videos WHERE id = #{ params[:id] }"
  @video = run_sql(sql)
  redirect to "/"
end



def run_sql(sql)
  db = PG.connect(:dbname => 'memetube')
  videos = db.exec(sql)
  db.close
  return videos
end

