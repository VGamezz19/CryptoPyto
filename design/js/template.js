$("#rowInitDown").click(function(e) {
    e.preventDefault()
    $('html, body').animate({
        scrollTop: $("#page").offset().top
    }, 1000);
});


