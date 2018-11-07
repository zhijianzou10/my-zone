class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:dashboard_heatmap]
  skip_before_action :authenticate_user!, only: [:home, :components, :dashboard_heatmap]

  def home
  end

  def components
  end

  def test
  end

  def dashboard_heatmap

    address = params[:address] || 'Paris'
    radius = params[:radius].to_i || 1000

    @zone_data = []
    a = Zone.near(address, radius)
    b = filter_gender(a, params[:gender])
    c = filter_minage(b, params[:minage])
    d = filter_maxage(c, params[:maxage])
    e = filter_interest(d, params[:interest_input])

    e.each do |zone|
      @zone_data << {lat: zone.latitude, lng: zone.longitude, weight: zone.posts.count/10}.to_json
    end
  end

  def dashboard_data
  end

  private

  def filter_gender(data, gender)
    return data unless gender.present?
    data.select { |z| gender.include?(z.user.gender) }
  end

  def filter_minage(data, minage)
    return data unless minage.present?
    data.select { |z| z.user.birth_year <= (2018 - minage.to_i) unless z.user.birth_year.nil? }
  end

  def filter_maxage(data, maxage)
    return data unless maxage.present?
    data.select { |z| z.user.birth_year >= (2018 - maxage.to_i) unless z.user.birth_year.nil? }
  end

  def filter_interest(data, interest_input)
    return data unless interest_input.present?
    # data.select { |z| !(z.interest_tags.to_a & interest_input).empty? }
    data.select do |d|
      interest_input.any? { |interest| d.interest_tag_ids.to_a.include?(interest.to_i) }
    end
  end

end
