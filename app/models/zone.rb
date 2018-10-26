class Zone < ApplicationRecord

  belongs_to :user
  has_many :posts, dependent: :destroy
  has_many :zone_tags, dependent: :destroy
  has_many :interest_tags, through: :zone_tags

  validates :latitude, presence: true
  validates :longtitude, presence: true
  validates :radius, numericality: { less_than: 500 }

end
