$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

$('#DropdownLanguage li a').on('click', function () {
  //  $('#SelectedDropdownLanguage').html($(this).find('a').html());
    $('.dropdown-toggle').html($(this).html() + '<span class="caret"></span>');
});

$('#DropdownCurrency li a').on('click', function () {
    $('#SelectedDropdownCurrency').html($(this).find('a').html());
});

$('.dropdown-menu a').on('click', function(){    
    $(this).parent().parent().prev().html($(this).html() + '<span class="caret"></span>');    
})

window.paypalCheckoutReady = function() {
    paypal.checkout.setup("4N2L5B22JU3W6", {
    //    environment: 'sandbox',
        button: [{
            container : 'PaypalPayment',
            button: 'PaypalButton'
        }]
    });
}