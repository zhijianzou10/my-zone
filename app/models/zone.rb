class Zone < ApplicationRecord

  belongs_to :user
  has_many :posts, dependent: :destroy
  has_many :zone_tags, dependent: :destroy
  has_many :interest_tags, through: :zone_tags

  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?

  validates :address, presence: true
  validates :radius, numericality: { less_than: 1001 }
end
