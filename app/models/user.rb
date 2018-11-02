class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  enum gender: { male: 0, female:1, other: 2}
  mount_uploader :photo, PhotoUploader

  has_many :zones
  has_many :posts, through: :zones
  has_many :comments
  has_many :goods
end
