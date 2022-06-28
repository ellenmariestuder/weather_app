class PagesController < ApplicationController
  def index
    require 'net/http'
    require 'json'
    
    @url = 'http://api.openweathermap.org/geo/1.0/direct'
    # @url = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=d864613bf3c891e810c6ba0054f4396c'
    @uri = URI(@url)

    # api call for default city 1 of 5
    @params_city1 = { 
      :q => 'London',
      :limit => 5, 
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri.query = URI.encode_www_form(@params_city1)
    @response_city1 = Net::HTTP.get(@uri)
    @output_c1 = JSON.parse(@response_city1)

    # api call for default city 2 of 5
    @params_city2 = { 
      :q => 'Madrid',
      :limit => 5, 
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri.query = URI.encode_www_form(@params_city2)
    @response_city2 = Net::HTTP.get(@uri)
    @output_c2 = JSON.parse(@response_city2)

    # api call for default city 3 of 5
    @params_city3 = { 
      :q => 'Tokyo',
      :limit => 5, 
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri.query = URI.encode_www_form(@params_city3)
    @response_city3 = Net::HTTP.get(@uri)
    @output_c3 = JSON.parse(@response_city3)

    # api call for default city 4 of 5
    @params_city4 = { 
      :q => 'Delhi',
      :limit => 5, 
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri.query = URI.encode_www_form(@params_city4)
    @response_city4 = Net::HTTP.get(@uri)
    @output_c4 = JSON.parse(@response_city4)

    # api call for default city 5 of 5
    @params_city5 = { 
      :q => 'Athens',
      :limit => 5, 
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri.query = URI.encode_www_form(@params_city5)
    @response_city5 = Net::HTTP.get(@uri)
    @output_c5 = JSON.parse(@response_city5)

  end
end
