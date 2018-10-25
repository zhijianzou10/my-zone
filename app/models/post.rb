class Post < ApplicationRecord
  belongs_to :user
  belongs_to :zone
  belongs_to :interest_tag

  has_many :comments
  has_many :goods
end
