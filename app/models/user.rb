class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  enum gender: { male: 0, female:1, other: 2}

  has_many :zones
  has_many :posts, through: :zones
  has_many :comments
  has_many :goods

  mount_uploader :avatar_url, PhotoUploader
  mount_uploader :background_url, PhotoUploader

  validates :firstname, presence: true
  validates :gender, presence: true
  validates :lastname, presence: true
  validates :birth_year, presence: true
end
