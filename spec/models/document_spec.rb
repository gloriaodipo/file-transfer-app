require 'rails_helper'

RSpec.describe Document, type: :model do
  it { is_expected.to validate_presence_of(:file_name) }
  it { is_expected.to validate_uniqueness_of(:file_name) }
end
