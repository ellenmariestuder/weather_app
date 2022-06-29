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

    # -------------------------------------------

    # @url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=37.9839412&lon=23.7283052&units=imperial&appid=d864613bf3c891e810c6ba0054f4396c'
    # @url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=37.9839412&lon=23.7283052&units=imperial'
    @url2 = 'https://api.openweathermap.org/data/2.5/weather'
    @uri2 = URI(@url2)
    
    # api call for default city 1 of 5 (detailed weather data)
    @params_city1_w = { 
      :lat => '51.5156177',
      :lon => '-0.0919983',
      :units => 'imperial',
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri2.query = URI.encode_www_form(@params_city1_w)
    @response_city1_w = Net::HTTP.get(@uri2)
    @output_c1_w = JSON.parse(@response_city1_w)

    # api call for default city 2 of 5 (detailed weather data)
    @params_city2_w = { 
      :lat => '40.4167047',
      :lon => '-3.7035825',
      :units => 'imperial',
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri2.query = URI.encode_www_form(@params_city2_w)
    @response_city2_w = Net::HTTP.get(@uri2)
    @output_c2_w = JSON.parse(@response_city2_w)

    # api call for default city 3 of 5 (detailed weather data)
    @params_city3_w = { 
      :lat => '35.6828387',
      :lon => '139.7594549',
      :units => 'imperial',
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri2.query = URI.encode_www_form(@params_city3_w)
    @response_city3_w = Net::HTTP.get(@uri2)
    @output_c3_w = JSON.parse(@response_city3_w)

    # api call for default city 4 of 5 (detailed weather data)
    @params_city4_w = { 
      :lat => '28.6517178',
      :lon => '77.2219388',
      :units => 'imperial',
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri2.query = URI.encode_www_form(@params_city4_w)
    @response_city4_w = Net::HTTP.get(@uri2)
    @output_c4_w = JSON.parse(@response_city4_w)

    # api call for default city 5 of 5 (detailed weather data)
    @params_city5_w = { 
      :lat => '37.9839412',
      :lon => '23.7283052',
      :units => 'imperial',
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri2.query = URI.encode_www_form(@params_city5_w)
    @response_city5_w = Net::HTTP.get(@uri2)
    @output_c5_w = JSON.parse(@response_city5_w)

  end
end
