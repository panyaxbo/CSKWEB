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
    console.log($('#DropdownLanguage li'));
    console.log( $('#SelectedDropdownLanguage'));
    console.log( $('#SelectedDropdownLanguage').html($(this).find('a').html()));
    $('#SelectedDropdownLanguage').html($(this).find('a').html());

  //  $('.dropdown-toggle').html($(this).html() + '<span class="caret"></span>');
});

$('#DropdownCurrency li').on('click', function () {
    $('#SelectedDropdownCurrency').html($(this).find('a').html());
});

function formatLangResult (state) {
   //   if (!state.id) { return state.text; }
     
      if (state.text == 'th' || state.text == 'us' || state.text == 'cn') {
        var $state = $(
          '<span><img src="/images/' + state.text + '.png"/></span>'
     
            //      '<span><img src="/images/' + state.element.value.toLowerCase() + '.png"/> </span>'
        );
        return $state;
      }
};

function formatLangSelection (state) {
//   if (!state.id) { return state.text; }

  if (state.text == 'th' || state.text == 'us' || state.text == 'cn') {
      var $state = $(
        '<span><img src="/images/' + state.text + '.png"/> </span>'
    //      '<span><img src="/images/' + state.element.value.toLowerCase() + '.png"/> </span>'
      );
      return $state;
    }
};
$(".js-example-templating").select2({
  templateResult: formatLangResult,
  templateSelection: formatLangSelection
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