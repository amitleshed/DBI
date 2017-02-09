class ContactsController < ApplicationController
  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      respond_to do |format|
        format.html {  redirect_to root_path, :flash => { :success => "Thanks!" }  } # respond with html
        format.js # respond with create.js.erb. Form should be remote: true OR redirect here { render :js => "window.location.href= '#' " }  
      end
    else
      respond_to do |format|
        format.html { redirect_to root_path, :flash => { :error => "Please try again!" } }
      end
    end
  end

private

  def contact_params
    params.require(:contact).permit(:name, :email, :cellnum)
  end
end