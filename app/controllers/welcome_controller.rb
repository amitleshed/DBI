class WelcomeController < ApplicationController
  def index
    @contact = Contact.new 
  end

  def faq
  end
end