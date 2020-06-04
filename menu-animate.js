$(function() {
    var header = $("#bg");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
            header.removeClass("notScrolled");
        } else {
            header.removeClass("scrolled");
            header.addClass("notScrolled"); 
        }
    });
  
});