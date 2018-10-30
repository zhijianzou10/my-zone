class Post < ApplicationRecord
  belongs_to :user
  belongs_to :zone
  belongs_to :interest_tag

  has_many :comments, dependent: :destroy
  has_many :goods, dependent: :destroy
end
