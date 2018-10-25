class InterestTag < ApplicationRecord
  has_many :zone_tags
  has_many :zones through: :zone_tags
end
