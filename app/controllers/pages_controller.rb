class PagesController < ApplicationController
  def index
    require 'net/http'
    require 'json'
    
    @url = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=d864613bf3c891e810c6ba0054f4396c'
    @uri = URI(@url)
    @response = Net::HTTP.get(@uri)
    @output = JSON.parse(@response)

  end
end
