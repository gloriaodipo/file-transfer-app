class Document < ApplicationRecord
  belongs_to :user
  has_many_attached :files
  validates :files, presence: true
  validates :file_name, presence: true, uniqueness: true
end
