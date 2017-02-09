class Contact < ActiveRecord::Base
  validates :name, :presence => { :message => 'Name cannot be blank.' }
  validates :email, :presence => { :message => 'Email cannot be blank.' }
  validates :cellnum, :presence => { :message => 'Cell cannot be blank.' }
end
