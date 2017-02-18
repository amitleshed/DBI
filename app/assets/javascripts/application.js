// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require c3
//= require d3
//= require underscore
//= require vivus.min
//= require_tree .

      //PARALLAX
      $(document).ready(function(){
      $('.parallax').parallax();
    });
      //PARALLAX /

      //SCROLLSPY
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
    //SCROLLSPY /

    //MODAL CONTACT
    $(document).ready(function(){
    $('#modal-contact').modal({
      opacity: 0.5,
    });
  });
    //MODAL CONTACT /

    // SELECT RADIO BTN
    $(document).ready(function() {
    $('select').material_select();
  });
    // SELECT RADIO BTN /
        



