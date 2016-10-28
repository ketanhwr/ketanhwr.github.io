$(window).on("load", function() {
    $('body').css("display", "flex");
});

$('a[href*=\\#]').on('click', function(event) {     
    event.preventDefault();

    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 900);
});