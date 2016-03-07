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

$('#DropdownLanguage li').on('click', function () {
    $('#SelectedDropdownLanguage').html($(this).find('a').html());
});

$('#DropdownCurrency li').on('click', function () {
    $('#SelectedDropdownCurrency').html($(this).find('a').html());
});


window.paypalCheckoutReady = function() {
    paypal.checkout.setup("4N2L5B22JU3W6", {
    //    environment: 'sandbox',
        button: [{
            container : 'PaypalPayment',
            button: 'PaypalButton'
        }]
    });
}