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
/*
$(document).ready(function() {
    
    /* Every time the window is scrolled ... 
    $(window).scroll( function(){
    
        /* Check the location of each desired element 
        $('.marketing').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({"left": "+=50px",'opacity':'1'},'slow' );
                    
            }
            
        }); 
    
    });
    
});*/
    
$(window).on("load",function() {
  $(window).scroll(function() {
    $(".marketing").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(400,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(400,0);}
      }
    });
  }); $(window).scroll(); //invoke scroll-handler on page-load
});
$(document).ready(function () {
            var i = 0;
            var posts = $('#marketing').children();
        //    console.log('posts ', posts);
            function animateCircle() {
                if (i % 2 === 0) {
                  //  $(posts[i]).addClass('visible animated fadeInUp');
                    $(posts[i]).viewportChecker({
                        classToAdd: 'visible animated fadeInUp',
                        offset: 100
                    });
                } else {
                  
                  //  $(posts[i]).addClass('visible animated fadeInDown');
                     $(posts[i]).viewportChecker({
                        classToAdd: 'visible animated fadeInDown',
                        offset: 100
                    });
                }
                i++;
                if (i <= posts.length) {
                    startAnimation();
                }
            }

            function startAnimation() {
                setTimeout(function () {
                    animateCircle();
                }, 1000);
            }

            posts.addClass('hidden');
            animateCircle(posts);   
        });        