class PagesController < ApplicationController
  def index
    require 'net/http'
    require 'json'

    @url = 'https://api.openweathermap.org/data/2.5/weather'
    @uri = URI(@url)
    
    # api call for default city 1 of 5 (detailed weather data)
    @params_c1 = { 
      :q => 'london',
      :units => 'imperial',
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri.query = URI.encode_www_form(@params_c1)
    @response_c1 = Net::HTTP.get(@uri)
    @output_c1 = JSON.parse(@response_c1)

    # api call for default city 2 of 5 (detailed weather data)
    @params_c2 = { 
      :q => 'madrid',
      :units => 'imperial',
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri.query = URI.encode_www_form(@params_c2)
    @response_c2 = Net::HTTP.get(@uri)
    @output_c2 = JSON.parse(@response_c2)

    # api call for default city 3 of 5 (detailed weather data)
    @params_c3 = { 
      :q => 'tokyo',
      :units => 'imperial',
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri.query = URI.encode_www_form(@params_c3)
    @response_c3 = Net::HTTP.get(@uri)
    @output_c3 = JSON.parse(@response_c3)

    # api call for default city 4 of 5 (detailed weather data)
    @params_c4 = { 
      :q => 'delhi',
      :units => 'imperial',
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri.query = URI.encode_www_form(@params_c4)
    @response_c4 = Net::HTTP.get(@uri)
    @output_c4 = JSON.parse(@response_c4)

    # api call for default city 5 of 5 (detailed weather data)
    @params_c5 = { 
      :q => 'athens',
      :units => 'imperial',
      :appid => 'd864613bf3c891e810c6ba0054f4396c'
    }
    @uri.query = URI.encode_www_form(@params_c5)
    @response_c5 = Net::HTTP.get(@uri)
    @output_c5 = JSON.parse(@response_c5)

  end
end
