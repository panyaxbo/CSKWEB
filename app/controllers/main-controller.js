app.controller("MainController", 
  ["$scope","$http", "ENV","$q", "$timeout", "$translate", "$cookies", "$location", "$filter", "CredentialService", "LocaleService", "CurrencyService" , 
  "ProductService", "CompanyService", "EmailService", 
  //"blockUI",
  "ProvinceService", "DistrictService", "SubDistrictService", "WeightRateService", 
  "UserService", "CryptoService", "ReceiptOrderService", "AppConfigService", "MenuService",
  function ($scope,$http, ENV, $q, $timeout, $translate, $cookies, $location, $filter, CredentialService, LocaleService, CurrencyService , 
    ProductService, CompanyService, EmailService, 
    //blockUI, 
    ProvinceService, DistrictService, SubDistrictService, WeightRateService, 
    UserService, CryptoService, ReceiptOrderService, AppConfigService,MenuService) {


    // paypal 4N2L5B22JU3W6
  	$scope.IsCaramelSrikhoReady = false;
    $scope.Locale = "th";
    $scope.SelectedCurrency = "thb";
    $scope.SelectedLocale = "th";
    $scope.SelectedMenu = "";
    $scope.CurrencySymbol = "฿";
    $scope.Multiplier = 1;
    $scope.IsAdmin = false;
    $scope.IsGuest = true;
    $scope.IsLogin = false;
    $scope.ROLineList = [];
    $scope.ROHead = {
        SumAmount: 0,
        SumVatAmount: 0,
        SumDiscountAmount: 0,
        NetAmount: 0,
        PostType: 'Normal',
        ROLineList: []
    };
    $scope.User = {
        Id : '',
        RoleNameEn: '',
        Username: '',
        Password: '',
        Firstname: 'Guest',
        Lastname: '',
        Role: {
            RoleCode: '',
            RoleNameEn: '',
            RoleNameTh: '',
        },
        Staff: {
            Firstname: 'Guest',
            Lastname: '',
        }
    };
    $scope.ValidateSignupEmail = false;
    $scope.ValidateSigninEmail = false;
    $scope.ExistEmail = false;
    $scope.ValidEmail = false;
    $scope.EmailValidateMessage = "";
    $scope.ExistUsername = false;
    $scope.UsernameValidateMessage = "";
    $scope.IsAcceptCondition = false;
    $scope.IsHuman = false;

    $scope.StartDate = new Date().getDate() +"/" + (new Date().getMonth() + 1) +"/" + new Date().getFullYear() ;
            $scope.EndDate = new Date().getDate() +"/" + (new Date().getMonth() + 1) +"/" + new Date().getFullYear();
            $scope.SearchPaymentStatus = "N";
            $scope.SearchShippingStatus = "N";
            $scope.SearchCustomerOrderStartDate = new Date().getDate() +"/" + (new Date().getMonth() + 1) +"/" + new Date().getFullYear() ;
            $scope.SearchCustomerOrderEndDate = new Date().getDate() +"/" + (new Date().getMonth() + 1) +"/" + new Date().getFullYear();
            $scope.SearchCustomerOrderPaymentStatus = "N";
            $scope.SearchCustomerOrderShippingStatus = "N";
            $scope.SearchCustomerRONo = '';
            $scope.SearchCustomerName = '';
    $scope.$on('handleHeadMenuBroadcast', function (event, args) {
    //    console.log('broadcast from head to body '+args.SelectedMenu);
        $scope.SelectedMenu = args.SelectedMenu;
        if ($scope.SelectedMenu == 'history') {
            $scope.StartDate = new Date().getDate() +"/" + (new Date().getMonth() + 1) +"/" + new Date().getFullYear() ;
            $scope.EndDate = new Date().getDate() +"/" + (new Date().getMonth() + 1) +"/" + new Date().getFullYear();
            $scope.SearchPaymentStatus = "N";
            $scope.SearchShippingStatus = "N";
        }
        else if ($scope.SelectedMenu == 'customer-order') {
            $scope.SearchCustomerOrderStartDate = new Date().getDate() +"/" + (new Date().getMonth() + 1) +"/" + new Date().getFullYear() ;
            $scope.SearchCustomerOrderEndDate = new Date().getDate() +"/" + (new Date().getMonth() + 1) +"/" + new Date().getFullYear();
            $scope.SearchCustomerOrderPaymentStatus = "N";
            $scope.SearchCustomerOrderShippingStatus = "N";
            $scope.SearchCustomerRONo = '';
            $scope.SearchCustomerName = '';
        }
        
    });
    $scope.SelectedHeadMenu = function (menu) {
 //       console.log(menu);
        $scope.SelectedMenu = menu;
        if (menu == "product") {
            MenuService.Menu.SelectedMenu = "product";
            $scope.SelectedMenu = "product";
        } else if (menu == "webboard") {
            MenuService.Menu.SelectedMenu = "webboard";
            $scope.SelectedMenu = "webboard";
        } else if (menu == "payment") {
            MenuService.Menu.SelectedMenu = "payment";
            $scope.SelectedMenu = "payment";
        } else if (menu == "about") {
            MenuService.Menu.SelectedMenu = "about";
            $scope.SelectedMenu = "about";
        } else if (menu == "shipment") {
            MenuService.Menu.SelectedMenu = "shipment";
            $scope.SelectedMenu = "shipment";
        } else if (menu == "history") {
            MenuService.Menu.SelectedMenu = "history";
            $scope.SelectedMenu = "history";
            $('#HistoryModal').modal('show');
        } else if (menu == "setting") {
            MenuService.Menu.SelectedMenu = "setting";
            $scope.SelectedMenu = "setting";
        } else if (menu == "account") {
            MenuService.Menu.SelectedMenu = "account";
            $scope.SelectedMenu = "account";
        } else if (menu == "customer-order") {
            MenuService.Menu.SelectedMenu = "customer-order";
            $scope.SelectedMenu = "customer-order";
            $('#CustomerOrderModal').modal('show');
        } 

        $scope.$emit('handleHeadMenuEmit', {
            SelectedMenu: menu
        });
    }
    var UserBackFromEmailUrl = $location.url();
    if (UserBackFromEmailUrl.indexOf("confirm=") > -1 ) {
    //    blockUI.start("Please wait ...");
      //  console.log('UserBackFromEmailUrl ', UserBackFromEmailUrl);
        var asciiString = ReplaceASCIICharacter(UserBackFromEmailUrl);
       // console.log('after  ', asciiString);
        UserService.ActivateAppUser(asciiString)
        .then(function(data, status) {
            swal("Sign up Success", "Your account is now activated.", "success");
        }, function(error, status) {
            swal("Error", "Cannot find your account.", "error");
        });
    } else if (UserBackFromEmailUrl.indexOf("forget=") > -1 ) {
      var asciiString = ReplaceASCIICharacter(UserBackFromEmailUrl);
        UserService.UpdateEmailForgetPassword(asciiString)
        .then(function(data, status) {
            $scope.ForgetPasswordEmail = data;
            $('#InputPasswordModal').modal('show');
        }, function(error, status) {
            console.log('error ', error);
        });
    }
    function ReplaceASCIICharacter(encodeUrl) {
        var asciiString = encodeUrl
                            .replace(/%2F/g, "/")
                            .replace(/%2B/g,"+")
                            .replace(/%3D/g ,"=")
                            .replace(/%24/g, "$")
                            .replace(/%26/g,"&")
                            .replace(/%2C/g ,",")
                            .replace(/%3A/g ,":")
                            .replace(/%3B/g, ";")
                            .replace(/%3F/g,"?")
                            .replace(/%20/g,"+")
                            .replace(/%40/g ,"@");
        return asciiString;
    }
    $scope.$on('UpdateROHeadROLineFromBodyBroadcast', function (event, args) {
        $scope.ROHead = args;
        $scope.ROLineList = $scope.ROHead.ROLineList;
        console.log('main arg ', args);
    });

    $scope.ForgetPassword = function () {
      $("#LoginModal").modal('toggle');
      $("#ForgetPasswordModal").modal('show');
    }
    $scope.ForgetPasswordProgressValue = 0;
    $scope.SendEmailForgetPassword = function () {
      $scope.ForgetPasswordProgressValue = 15;
      document.getElementById('ForgetPasswordProgress').style.display = 'block';

      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (filter.test($scope.ForgetPasswordEmail) && $scope.ForgetPasswordEmail.length > 0) {
        
        UserService.IsExistEmail($scope.ForgetPasswordEmail)
        .then(function(data, status) {
            $scope.ForgetPasswordProgressValue = 28;
            if(data) {
              return CryptoService.GenerateForgetPasswordHashLink($scope.ForgetPasswordEmail)
            } else {
              swal("Error", "Cannot find your account.", "error");
            }
        },function (error, status) {
            swal("Error", "The error has occur please contact admin", "error");
        })
        .then(function(data, status){
            $scope.ForgetPasswordProgressValue = 47;
            var hostWithPort = $location.host() + ':' +$location.port();
            var mailForget = {
              Email : $scope.ForgetPasswordEmail,
              Host : hostWithPort,
              BacktoUrl : data
            };
            EmailService.SendEmailForgetPassword(mailForget)
        })

        var IsExistEmail = ENV.apiEndpoint + "/users/IsExistEmail/" + $scope.ForgetPasswordEmail;
        $http.get(IsExistEmail)
        .success(function(data, status, headers, config) {
            $scope.ForgetPasswordProgressValue = 69;
            if(data) {
              var genforgetLink = ENV.apiEndpoint + '/cryptojs/GenerateForgetPasswordHashLink/' + $scope.ForgetPasswordEmail;
              $http.get(genforgetLink)
              .success(function(data, status, headers, config) { 
                  $scope.ForgetPasswordProgressValue = 82;
                  var hostWithPort = $location.host() + ':' +$location.port();
                  var forgetPasswordEmailUrl = ENV.apiEndpoint + "/mails/SendEmailForgetPassword";
                  var mailForget = {
                    Email : $scope.ForgetPasswordEmail,
                    Host : hostWithPort,
                    BacktoUrl : data
                  };
                  $http.post(forgetPasswordEmailUrl, mailForget)
                  .success(function(data, status, headers, config) {
                    $scope.ForgetPasswordProgressValue = 100;

                    var type = $filter('translate')('MESSAGE.TYPE_SUCCESS');
                    var title = $filter('translate')('MESSAGE.TITLE_SUCCESS_DEFAULT');
                    swal("สำเร็จ", "กรุณาตรวจสอบอีเมลของท่าน", "success");
                    document.getElementById('ForgetPasswordProgress').style.display = 'none';
                    $('#ForgetPasswordModal').modal('toggle');
                  })
                  .error(function(data, status, headers, config) {
                      swal("Error", "Cannot sign up this time", "error");
                  });
              })
              .error(function (data, status, headers, config) {

              });
              
            } else {
              swal("Error", "Cannot find your account.", "error");
            }
        })
        .error(function(data, status, headers, config) {
           swal("Error", "The error has occur please contact admin", "error");
        })
        
      } else {
        // Not valid
        console.log('not valid');
        swal("Warning", "Not valid Email", "warning");
      }
    }

    $scope.InputPasswordProgressValue = 0;
    $scope.ChangePassword = function() {
        $scope.InputPasswordProgressValue = 35;
      document.getElementById('InputPasswordProgress').style.display = 'block';
      if ($scope.ChangeForgetPassword === $scope.ConfirmChangeForgetPassword) {
        $scope.InputPasswordProgressValue = 69;
        UserService.PerformChangePassword($scope.ForgetPasswordEmail, $scope.ChangeForgetPassword)
        .then(function(data, status) {
            swal("Change Password Success", "Your password has changed successfully.", "success");
            $scope.InputPasswordProgressValue = 100;
            document.getElementById('InputPasswordProgress').style.display = 'none';
            $('#InputPasswordModal').modal('toggle');
        }, function(error, status) {
            swal("Error", "Cannot find your account.", "error");
            document.getElementById('InputPasswordProgress').style.display = 'none';
        });
      } else {
        swal("Warning", "Password and Confirm Password must be the same.", "warning");
        document.getElementById('InputPasswordProgress').style.display = 'none';
      }
    }
    $scope.SelectedMenuCurrency = function (currency) {
        $scope.SelectedCurrency = currency;
 //       console.log('cur ', currency);
        if (currency == "thb") {
            CurrencyService._SelectedCurrency = "thb";
            $scope.SelectedCurrency = "thb";
            $scope.CurrencySymbol = "฿";
            $('#THB').addClass("active");
        } else if (currency == "usd") {
            CurrencyService._SelectedCurrency = "usd";
            $scope.SelectedCurrency = "usd";
            $scope.CurrencySymbol = "$";
            $('#USD').addClass("active");
        } else if (currency == "eur") {
            CurrencyService._SelectedCurrency= "eur";
            $scope.SelectedCurrency = "eur";
            $scope.CurrencySymbol = "€";
            $('#EUR').addClass("active");
        } else if (currency == "gbp") {
            CurrencyService._SelectedCurrency = "gbp";
            $scope.SelectedCurrency = "gbp";
            $scope.CurrencySymbol = "£";
            $('#GBP').addClass("active");
        } else if (currency == "jpy") {
            CurrencyService._SelectedCurrency = "jpy";
            $scope.SelectedCurrency = "jpy";
            $scope.CurrencySymbol = "¥";
            $('#CNY').addClass("active");
        } else if (currency == "cny") {
            CurrencyService._SelectedCurrency = "cny";
            $scope.SelectedCurrency = "cny";
            $scope.CurrencySymbol = "¥";
            $('#CNY').addClass("active");
        }
        $scope.$emit('UpdateSelectedCurrency', $scope.SelectedCurrency );
    }

    $scope.SelectedMenuLocale = function (locale) {
  //  	console.log('loc ', locale);
    	$scope.SelectedLocale = locale;
        if (locale == "th") {
            $scope.Locale = "th";
            LocaleService._SelectedLocale = "th";
            $translate.use(locale);
        } else if (locale == "us") {
            $scope.Locale = "us";
            LocaleService._SelectedLocale = "us";
            $translate.use(locale);
        } else if (locale == "jp") {
            LocaleService._SelectedLocale = "jp";
            $scope.Locale = "jp";
            $translate.use(locale);
        } else if (locale == "cn") {
            LocaleService._SelectedLocale = "cn";
            $scope.Locale = "cn";
            $translate.use(locale);
        }
        $scope.$emit('UpdateSelectedLocale', $scope.SelectedLocale);
    }

    CredentialService.LoadOAuth()
    .then(function(data, status) {
        OAuth.initialize(data);
    }, function(error, status) {
        console.log('oauth err ', error);
    });
    $scope.LoginWithSocial = function (provider) {
        //Let's say the /me endpoint on the provider API returns a JSON object
        //with the field "name" containing the name "John Doe"
        document.getElementById('LoginSocialNotReady').style.display = 'block';
        OAuth.popup(provider)
        .done(function(result) {
            result.me()
            .done(function (response) {
                //this will display "John Doe" in the console                
                $scope.$apply(function() {
                  $scope.PopulateValue(provider, response);
                  document.getElementById('LoginSocialNotReady').style.display = 'none';
                });
            })
            .fail(function (err) {
                //handle error with err
  //              console.log(err.message + err.stack);
            });
        })
        .fail(function (err) {
            //handle error with err
 //           console.log(err.message + err.stack);
        });
    }
    $scope.PopulateValue = function(provider, response) {
        if (provider === 'facebook') {
          $scope.User.Id = response.raw.id;
          $scope.User.Firstname = response.firstname;
          $scope.User.Lastname = response.lastname;
          $scope.User.Gender = response.gender;
          $scope.User.Email = response.email;
          $scope.User.DisplayName = response.name;
          $scope.User.Terminal = "facebook";
          $scope.User.UserType = "user";
          $scope.IsLogin = true;
          $scope.IsAdmin = false;
          $scope.IsGuest = false;
          //Load Facebook graph profile image picture
          var facebookImageUrl = response.avatar;
          $http.get(facebookImageUrl)
          .success(function(data, status, headers, config) {
            $('#UserProfileImage').children("img").remove();
            var imageFacebookTag = "<img src='" + config.url + "' style='-webkit-user-select: none; margin-top:-10px;width:50px; height:50px;' class='img-responsive img-circle'/>"; ;
            $('#UserProfileImage').append(imageFacebookTag);

            $("#LoginModal").modal("toggle");
          })
          .error(function(data, status, headers, config) {
            console.log("Oops!! error for loading profile pic from facebook ");
          });
        } 
        else if (provider === 'google_plus') {
          $scope.User.Id = response.raw.id;
          $scope.User.Firstname = response.firstname;
          $scope.User.Lastname = response.lastname;
          $scope.User.Gender = response.gender;
          $scope.User.Email = response.email;
          $scope.User.DisplayName = response.name;
          $scope.User.Terminal = "google+";
          $scope.User.UserType = "user";
          $scope.IsLogin = true;
          $scope.IsAdmin = false;
          $scope.IsGuest = false;
          // Load Google+ graph profile image picture
          var facebookImageUrl = response.avatar;
          $http.get(facebookImageUrl)
          .success(function(data, status, headers, config) {
            $('#UserProfileImage').children("img").remove();
            var imageFacebookTag = "<img src='" + config.url + "' style='-webkit-user-select: none; margin-top:-10px;width:50px; height:50px;' class='img-responsive img-circle'/>"; ;
            $('#UserProfileImage').append(imageFacebookTag);

            $("#LoginModal").modal("toggle");
          })
          .error(function(data, status, headers, config) {
            console.log("Oops!! error for loading profile pic from facebook ");
          });
        }
        else if (provider === 'twitter') {
          $scope.User.Id = response.id;
          $scope.User.Firstname = response.alias;
          $scope.User.Lastname = response.last_name;
          $scope.User.Gender = response.gender;
          $scope.User.Email = response.email;
          $scope.User.DisplayName = response.name;
          $scope.User.Terminal = "twitter";
          $scope.User.UserType = "user";
          $scope.IsLogin = true;
          $scope.IsAdmin = false;
          $scope.IsGuest = false;

          var twitterImageUrl = response.avatar;
          $http.get(twitterImageUrl)
          .success(function(data, status, headers, config) {
            $('#UserProfileImage').children("img").remove();
            var imageFacebookTag = "<img src='" + config.url + "' style='-webkit-user-select: none; margin-top:-10px;width:50px; height:50px;' class='img-responsive img-circle'/>"; ;
            $('#UserProfileImage').append(imageFacebookTag);

            $("#LoginModal").modal("toggle");
          })
          .error(function(data, status, headers, config) {
            console.log("Oops!! error for loading profile pic from linkedin.");
          });
        } 
        else if (provider === 'linkedin') {
          $scope.User.Id = response.raw.id;
          $scope.User.Firstname = response.firstname;
          $scope.User.Lastname = response.lastname;
          $scope.User.Gender = response.gender;
          $scope.User.Email = response.email;
          $scope.User.DisplayName = response.name;
          $scope.User.Terminal = "linkedin";
          $scope.User.UserType = "user";
          $scope.IsLogin = true;
          $scope.IsAdmin = false;
          $scope.IsGuest = false;

          var linkedinImageUrl = response.avatar;
            $('#UserProfileImage').children("img").remove();
            var imageLinkedinTag = "<img src='" + linkedinImageUrl + "' style='-webkit-user-select: none; margin-top:-10px;width:50px; height:50px;' class='img-responsive img-circle'/>"; ;
            $('#UserProfileImage').append(imageLinkedinTag);

            $("#LoginModal").modal("toggle");
        }
        else if (provider === 'instagram') {
          $scope.User.Firstname = response.alias;
          $scope.User.Lastname = response.lastname;
          $scope.User.Gender = response.gender;
          $scope.User.Email = response.email;
          $scope.User.DisplayName = response.name;
          $scope.User.Terminal = "instagram";
          $scope.User.UserType = "user";
          $scope.IsLogin = true;
          $scope.IsAdmin = false;
          $scope.IsGuest = false;

          var instagramImageUrl = response.avatar;
          $http.get(instagramImageUrl)
          .success(function(data, status, headers, config) {
            $('#UserProfileImage').children("img").remove();
            var imageInstagramTag = "<img src='" + config.url + "' style='-webkit-user-select: none; margin-top:-10px;width:50px; height:50px;' class='img-responsive img-circle'/>"; ;
            $('#UserProfileImage').append(imageInstagramTag);

            $("#LoginModal").modal("toggle");
          })
          .error(function(data) {
            console.log("Oops!! error for loading profile pic from instagram ");
          });
        }
        else if (provider === 'github') {
          $scope.User.Firstname = response.alias;
          $scope.User.Lastname = response.lastname;
          $scope.User.Gender = response.gender;
          $scope.User.Email = response.email;
          $scope.User.DisplayName = response.name;
          $scope.User.Terminal = "github";
          $scope.User.UserType = "user";
          $scope.IsLogin = true;
          $scope.IsAdmin = false;
          $scope.IsGuest = false;

          var githubImageUrl = response.avatar;
          $http.get(githubImageUrl)
          .success(function(data, status, headers, config) {
            $('#UserProfileImage').children("img").remove();
            var imageGithubTag = "<img src='" + config.url + "' style='-webkit-user-select: none; margin-top:-10px;width:50px; height:50px;' class='img-responsive img-circle'/>"; ;
            $('#UserProfileImage').append(imageGithubTag);

            $("#LoginModal").modal("toggle");
          })
          .error(function(data) {
            console.log("Oops!! error for loading profile pic from github ");
          });
        }
        else if (provider === 'dropbox') {
          $scope.User.Firstname = response.name;
          $scope.User.Lastname = response.lastname;
          $scope.User.Gender = response.gender;
          $scope.User.Email = response.email;
          $scope.User.DisplayName = response.name;
          $scope.User.Terminal = "dropbox";
          $scope.User.UserType = "user";
          $scope.IsLogin = true;
          $scope.IsAdmin = false;
          $scope.IsGuest = false;
          response.id = response.raw.uid;
          $("#LoginModal").modal("toggle");
        }
        else if (provider === 'foursquare') {
          $scope.User.Firstname = response.name;
          $scope.User.Lastname = response.lastname;
          $scope.User.Gender = response.gender;
          $scope.User.Email = response.email;
          $scope.User.DisplayName = response.name;
          $scope.User.Terminal = "foursquare";
          $scope.User.UserType = "user";
          $scope.IsLogin = true;
          $scope.IsAdmin = false;
          $scope.IsGuest = false;
          response.id = response.raw.meta.requestId;
          var foursquareImageUrl = response.avatar;
            $('#UserProfileImage').children("img").remove();
            var imageFoursquareTag = "<img src='" + foursquareImageUrl + "' style='-webkit-user-select: none; margin-top:-10px;width:50px; height:50px;' class='img-responsive img-circle'/>"; ;
            $('#UserProfileImage').append(imageFoursquareTag);
            $("#LoginModal").modal("toggle");
        }
        else if (provider === 'soundcloud') {
          $scope.User.Firstname = response.alias;
          $scope.User.Lastname = response.lastname;
          $scope.User.Gender = response.gender;
          $scope.User.Email = response.email;
          $scope.User.DisplayName = response.name;
          $scope.User.Terminal = "soundcloud";
          $scope.User.UserType = "user";
          $scope.IsLogin = true;
          $scope.IsAdmin = false;
          $scope.IsGuest = false;
          response.id = response.raw.id;
          var soundcloudImageUrl = response.avatar;
          $('#UserProfileImage').children("img").remove();
          var imageSoundcloudTag = "<img src='" + soundcloudImageUrl + "' style='-webkit-user-select: none; margin-top:-10px;width:50px; height:50px;' class='img-responsive img-circle'/>"; ;
          $('#UserProfileImage').append(imageSoundcloudTag);

          $("#LoginModal").modal("toggle");
        }
        response.provider = provider;
     //   console.log(response);
        
        var createAndCheckLofinSocialUrl = ENV.apiEndpoint + '/users/CreateAndUpdateWithSocial';
        
        $http.post(createAndCheckLofinSocialUrl, response)
        .success(function (data, status, headers, config) {
           $scope.User.Id = data._id;
           $scope.$emit('handleUserEmit', {
                  User: $scope.User
              });
        })
        .error(function (data, status, headers, config) {
          console.log(data);
          console.log(status);
          console.log(headers);
          console.log(config);
        });
    }
    // Load Company
    $scope.Company = {};
    CredentialService.LoadCompany()
    .then(function(data, status) {
      $scope.Company = data;
      $scope.$emit('handleCompanyEmit', {
          Company: data
      });
    }, function (error, status) {
        console.log('company err ', error);
    });
    // Re-capcha
    CredentialService.LoadRecaptcha()
    .then(function(data, status) {
        $scope.response = null;
        $scope.widgetId = null;
        $scope.model = {
            key: data
        };  
    }, function(error, status){

    });
    $scope.setResponse = function (response) {
    //    console.info('Response available');
        $scope.response = response;
    //    console.log($scope.response);
        if ($scope.response) {
          $scope.IsHuman = true;
        }
    };
    $scope.setWidgetId = function (widgetId) {
        $scope.widgetId = widgetId;
    };
    $scope.cbExpiration = function() {
        console.info('Captcha expired. Resetting response object');
        $scope.response = null;
    };
    $scope.submit = function () {
        var valid;
        /**
         * SERVER SIDE VALIDATION
         *
         * You need to implement your server side validation here.
         * Send the reCaptcha response to the server and use some of the server side APIs to validate it
         * See https://developers.google.com/recaptcha/docs/verify
         */
 //       console.log('sending the captcha response to the server', $scope.response);
        if (valid) {
  //        console.log('Success');
        } else {
  //        console.log('Failed validation');
          // In case of a failed validation you need to reload the captcha
          // because each response can be checked just once
          vcRecaptchaService.reload($scope.widgetId);
        }
    };
    
  $scope.Paypal = {};
  $scope.LoadPaypalInformation = function () {
      var paypalUrl = ENV.apiEndpoint + "/paypal/GetPaypalInformation";
      $http.get(paypalUrl)
      .success(function(data, status, headers, config) {
          
          $scope.Paypal.MerchantId = data.MerchantId;
          $scope.Paypal.Name = 'NetAmount';
          $scope.Paypal.Quantity = 1;
          console.log('pal net ', $scope.Paypal.Amount);
          $scope.Paypal.Amount = 0.01;
          $scope.Paypal.Currency = data.Currency;
          $scope.Paypal.Shipping = 0;
          $scope.Paypal.Tax = 0;
          $scope.Paypal.CallbackUrl = data.CallbackUrl;
          $scope.Paypal.Business = data.MerchantId;
      //    console.log($scope.Paypal);
      })
      .error(function (data, status, headers, config) {

      });
  }
    $scope.Products = [];
    ProductService.LoadProduct()
    .then(function(data, status) {
        
      $scope.Products = data;
      $scope.IsCaramelSrikhoReady = true;
    }, function(error, status) {

    })
    $scope.Signup = function () {
      document.getElementById('SignupDataNotReady').style.display = 'block';
      var email = $scope.Email;
      $scope.User.Firstname = $scope.Firstname;
      $scope.User.Lastname = $scope.Lastname;
      var hashLink = '';
      UserService.CreateUserEmailActivate($scope.Username, $scope.Password, email, $scope.User)
      .then(function(data, status) {
          return CryptoService.GenerateHashLink($scope.Username, $scope.Password, email)
      }, function(err, status) {
  //        blockUI.stop();
          console.log('err create app user ', err);
          document.getElementById('SignupDataNotReady').style.display = 'none';
      })
      .then(function (data, status) {
//          console.log(data);
          hashLink = data;
          var hostPort = $location.host() + ':' +$location.port();
          var mailActivate = {
            Email : email,
            Host : hostPort,
            BacktoUrl : hashLink
          };
          return EmailService.SendEmailConfirmation(mailActivate)
      })
      .then(function(data, status){
         swal("Sign up almost Success", "Please check your email to activate your account", "success");
          document.getElementById('SignupDataNotReady').style.display = 'none';
          $("#LoginModal").modal("toggle");
      }, function(error, status) {
          swal("Error", "Cannot sign up this time", "error");
          document.getElementById('SignupDataNotReady').style.display = 'none';
      })
      .finally(function() {
          //Clear Fields after sign up successfully
          $scope.Firstname = "";
          $scope.Lastname = "";
          $scope.Email = "";
          $scope.Username = "";
          $scope.Password = "";
      });
    }
    $scope.Login = function () {
      document.getElementById('LoginDataNotReady').style.display = 'block';
      var appuser = {};
      UserService.LoginWithUsernameAndPassword($scope.username, $scope.password)
      .then(function(data, status) {
  //        console.log('data ' , data);
          if (!data || data === undefined) {
              $scope.User = [];
              $scope.IsAdmin = false;
              $scope.IsGuest = false;
              return;
          } else {
            appuser = data;
          }
          return UserService.CheckIsUserActivate($scope.username, $scope.password);
      }, function(error, status) {
  //        console.log('error', error);
 //         console.log("Log in Not found");
          $scope.LoginErrorMessage = "Error! Wrong Username or Password";
          $('#LoginErrorAlert').show();
          $scope.IsAdmin = false;
          $scope.IsGuest = true;
          $scope.IsLogin = false; 
          document.getElementById('LoginDataNotReady').style.display = 'none';
          return $q.reject('error occur');
      })
      .then(function (isActivate, status) {
          if (!isActivate || isActivate === undefined) {
          } else {
              $scope.User.Id = appuser._id;
              $scope.User.Username = appuser.Username;
              $scope.User.Password = appuser.Password;
              $scope.User.Role.RoleCode = appuser.Role.RoleCode;
              $scope.User.Role.RoleNameEn = appuser.Role.RoleNameEn;
              $scope.User.Role.RoleNameTh = appuser.Role.RoleNameTh;
              $scope.User.Firstname = appuser.Firstname;
              $scope.User.Lastname = appuser.Lastname;
              $scope.Firstname = appuser.Firstname;
              $scope.Lastname = appuser.Lastname;
              $scope.User.Email = appuser.Email;
              if ($scope.User.Role.RoleNameEn == 'Admin') {
                  $scope.IsAdmin = true;
                  $scope.IsGuest = false;
              } else {
                $scope.IsAdmin = false;
                $scope.IsGuest = false;
              }
              $scope.IsLogin = true;
              console.log('IsAdmin', $scope.IsAdmin);
              console.log('IsGuest', $scope.IsGuest);
              console.log('IsLogin', $scope.IsLogin);
              console.log('User ', $scope.User);
              if ($scope.RememberMe) {
                var now = new Date();
                now.setDate(now.getDate() + 1);
                $cookies.putObject('User', $scope.User);
              }
               $('#LoginModal').modal('toggle');
              document.getElementById('LoginDataNotReady').style.display = 'none';
              $scope.$emit('handleUserEmit', {
                  User: $scope.User
              });
          }
          return UserService.DownloadUserProfileImage($scope.User.Id, $scope.User.Username);
      }, function(err, status) {
         console.log('not found image no problem');
         document.getElementById('LoginDataNotReady').style.display = 'none';
      })
      .then(function(profile_image, status) {
          if (profile_image.indexOf('base64') > -1)  {
            $scope.User.ProfileImage = profile_image;
            $('#UserProfileImage').children("img").remove();
            $('#UserProfileImage').append(profile_image);
          }
         
      }, function(error, status) {
   //       console.log('error', error);
  //        console.log("Log in Not found");
          $scope.LoginErrorMessage = "Error! Wrong Username or Password";
          $('#LoginErrorAlert').show();
          $scope.IsAdmin = false;
          $scope.IsGuest = true;
          $scope.IsLogin = false; 
          document.getElementById('LoginDataNotReady').style.display = 'none';
          return $q.reject('error occur');
      })
    }

    $scope.Logout = function () {
        var int = 1;
        swal({
          title: "Are you sure?",
          text: "คุณต้องการออกจากระบบ ใช่ หรือ ไม่?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#dd6b55",
          confirmButtonText: "Yes, log out!",
          cancelButtonText: "No, cancel please!",
          closeOnConfirm: false,
          closeOnCancel: false
        },
        function(isConfirm){
            $scope.$apply(function() {
              if (isConfirm) {
                swal("Success", "Log out success", "success");
                $scope.User = {};
                $scope.Firstname = '';
                $scope.Lastname = '';
                $scope.IsLogin = false;
                $scope.IsAdmin = false;
                $scope.IsGuest = true;
                $scope.username = '';
                $scope.password = '';
                $scope.AddNoProfileUserImage();
                $cookies.remove('User');
              } else {
                console.log('cancel');
                swal("Cancelled", "Stay in system :)", "success");
              }
          });
        });
    }
    $scope.ValidateExistUsername = function () {
        if ($scope.Username.length > 0) {
          UserService.IsExistUsername($scope.Username)
          .then(function(data, status) {
              if (!data) {
                  $scope.ExistUsername = false;
                  $scope.UsernameValidateMessage = "Success! This Username is usable.";
                  $('#UsernameAlert').removeClass("alert-warning");
                  $('#UsernameAlert').addClass("alert-success");
                  $('#UsernameAlert').show();
                           
              } else {
                  $scope.ExistUsername = true;
                  $scope.UsernameValidateMessage = "Warning! This Username is reserved.";
                  $('#UsernameAlert').removeClass("alert-success");
                  $('#UsernameAlert').addClass("alert-warning");
                  $('#UsernameAlert').show();
              }
          }, function(error, status) {

          });
        }
    }
    
    $scope.ValidateEmail = function () {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test($scope.Email) || (!$scope.Email && $scope.Email.length > 0)) {
            $scope.ValidateSignupEmail = false;
            $scope.ValidEmail = false;
            $scope.EmailValidateMessage = "Warning! Not an email format.";
            $('#EmailAlert').removeClass("alert-success")
            $('#EmailAlert').addClass("alert-warning");
            $('#EmailAlert').show();
        } else {
            $scope.ValidateSignupEmail = true;
            $scope.ValidEmail = true;
            $scope.EmailValidateMessage = "This email is valid format.";
            $('#EmailAlert').removeClass("alert-warning");
            $('#EmailAlert').addClass("alert-success");
            $('#EmailAlert').show();
        }
        if($scope.ValidEmail == true) {
          $scope.ValidateExistEmail();
        }

        
    }
    $scope.ValidateExistEmail = function () {
      if ($scope.Email.length > 0) {
        UserService.IsExistEmail($scope.Email)
        .then(function (data, status) {
            if (!data) {
                  $scope.EmailValidateMessage = "Success! This Email is usable";
                  $scope.ExistEmail = false;
                  $('#EmailAlert').removeClass("alert-warning");
                  $('#EmailAlert').addClass("alert-success");
                  $('#EmailAlert').show();

              } else {
                  $scope.EmailValidateMessage = "Warning! This Email is reseved";
                  $scope.ExistEmail = true;
                  $('#EmailAlert').removeClass("alert-success");
                  $('#EmailAlert').addClass("alert-warning");
                  $('#EmailAlert').show();
              }
        }, function(error, status){

        });
      }
    }
    $scope.ClearCart = function () {
      console.log("ClearCart ..");
        swal({
          title: "Are you sure?",
          text: "คุณต้องการล้างสินค้าในตะกร้า ใช่ หรือ ไม่?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#dd6b55",
          confirmButtonText: "Yes, clear it!",
          cancelButtonText: "No, cancel please!",
          closeOnConfirm: true,
          closeOnCancel: true
        },
        function(isConfirm){
          $scope.$apply(function() {
            if (isConfirm) {
              var list = $scope.ROHead.ROLineList;
              var len = list.length;
              $scope.ROHead.ROLineList.length = 0;
            //    $("#CartModal").reload();
            //  $scope.ROHead.ROLineList.length = 0;
            } else {
                  swal("Cancelled", "Your product data is safe :)", "success");
            }
          });
        });
    }
    $scope.DeleteCart = function() {
 //     console.log('delete cart');
      swal({
          title: "Are you sure?",
          text: "คุณต้องการล้างสินค้าในตะกร้า ใช่ หรือ ไม่?",
          type: "คำเตือน",
          showCancelButton: true,
          confirmButtonColor: "#dd6b55",
          confirmButtonText: "ใช่, ล้างตะกร้า!",
          cancelButtonText: "ไม่, กรุณายกเลิก!",
          closeOnConfirm: true,
          closeOnCancel: true
        },
        function(isConfirm){
          $scope.$apply(function() {
            if (isConfirm) {
              var list = $scope.ROHead.ROLineList;
              var len = list.length;
              $scope.ROHead.ROLineList.length = 0;
            //    $("#CartModal").reload();
            //  $scope.ROHead.ROLineList.length = 0;
            } else {
                  swal("ยกเลิก", "Your product data is safe :)", "success");
            }
          });
        });
    }
    $scope.ContinueShopping = function() {
        $('#CartModal').modal('toggle');
    } 
    $scope.CheckoutProcess = function() {
 //     console.log("shipment..");
      if ($scope.IsUserInSession()) {
          console.log('user lod in ');
          $("#CartModal").modal("toggle");
          $("#ShipmentModal").modal("show");
          $scope.InitShipment();
      } else {
        swal({
          title: "Are you sure?",
          text: "คุณต้องเข้าสู่ระบบก่อนดำเนินการต่อ",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#5583dd",
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          closeOnConfirm: true,
          closeOnCancel: true
        },
        function(isConfirm){
          $scope.$apply(function() {
            if (isConfirm) {
              $("#CartModal").modal('toggle');
              $("#LoginModal").modal('show');
            } else {
               //   swal("Cancelled", "Your product data is safe :)", "success");
            }
          });
        });
      }
      
    }
    $scope.IsUserInSession = function()  {
      console.log($scope.User);
      if (!$scope.User) {
        return false;
      } else if ($scope.User.Id.length > 0) {
        return true;
      }
    }

    $scope.ChangePostType = function() {
  //    console.log('change post ', $scope.ROHead.PostType);
      if ($scope.ROHead.SumWeight > 20000 && $scope.ROHead.PostType === 'EMS') {
        $scope.ROHead.PostType = 'Normal';
        swal("คำเตือน", "น้ำหนัก EMS ต้องไม่เกิน 20kg", "warning");
      } else {
        if ($scope.ROHead.PostType === 'Normal') {
            var weight_rate = WeightRateService.GetWeightRateNormal($scope.ROHead.SumWeight);
            $scope.ROHead.SumWeightAmount = parseInt(weight_rate); 
            $scope.ROHead.NetAmount = $scope.ROHead.SumAmount + $scope.ROHead.SumVatAmount + $scope.ROHead.SumWeightAmount - $scope.ROHead.SumDiscountAmount;
            
            $scope.$emit('UpdateROHeadROLine', $scope.ROHead );
        } else {
              WeightRateService.GetWeightRateByPostTypeAndWeight($scope.ROHead.PostType, $scope.ROHead.SumWeight)
              .then(function(weightRate , status) {
                $scope.ROHead.SumWeightAmount = parseInt(weightRate.Rate);
                $scope.ROHead.NetAmount = $scope.ROHead.SumAmount + $scope.ROHead.SumVatAmount + $scope.ROHead.SumWeightAmount - $scope.ROHead.SumDiscountAmount;
                
                
                $scope.$emit('UpdateROHeadROLine', $scope.ROHead );
             
              }, function(error, status) {
                console.log(error);
              });
        }
      }
  //    console.log('sum amt ', $scope.ROHead.SumAmount);
  //      console.log('sum disc ',$scope.ROHead.SumDiscountAmount);
  //      console.log('sum vat ',$scope.ROHead.SumVatAmount);
  //      console.log('sum wt ',$scope.ROHead.SumWeightAmount);
  //      console.log('net amt ',$scope.ROHead.NetAmount);
    }
    $scope.UpdateCartBuyQty = function (index, qty) {
      var regexp = /^\d+(\.\d{1,2})?$/;

      var isnum = regexp.test(qty.toString());
      if (isnum) 
      {
          $scope.UpdateCartSummary();
      } else {
          var warn = $translate('MESSAGE.CONTENT.UPDATE_CART_BUY_QTY');
          swal("Warning", warn, "warning");
          $('#BuyQty')[index].focus();
      }
    }
    $scope.UpdateCartSummary = function () {
   //     console.log("UpdateCartSummary ..");
        var roLineList = $scope.ROHead.ROLineList;
        var roHead = $scope.ROHead;
        var amt = 0;
        var sumAmt = 0;
        var sumDiscAmt = 0;
        var sumVatAmt = 0;
        var sumWeightAmt = 0;
        var sumWeight = 0;
        var netAmt = 0; 

        for (var i = 0 ; i < roLineList.length ; i++) {
          var roline = roLineList[i];
      //    console.log(roline);
          roline.Weight = roline.Quantity * roline.DrWeight;
          roline.Amount = roline.Quantity * roline.Price;
          roline.VatAmount = roline.Amount * $scope.Company.VatRate;
          sumAmt += roline.Amount;
          sumWeight += roline.Weight;
          sumVatAmt += roline.VatAmount;
          sumDiscAmt += roline.DiscountAmount;
        }

   //     console.log(sumWeight);
        if ($scope.ROHead.PostType === 'EMS' && sumWeight > 20000) {
            $scope.ROHead.PostType = 'Normal';
            $scope.UpdateCartSummary();
        } else {
            if ($scope.ROHead.PostType === 'Normal') {
                var weight_rate = WeightRateService.GetWeightRateNormal(sumWeight);
                sumWeightAmt = parseInt(weight_rate);
            } else {
                WeightRateService.GetWeightRateByPostTypeAndWeight($scope.ROHead.PostType, sumWeight )
                .then(function(weightRate, status) {
                    sumWeightAmt = parseInt(weightRate.Rate);
                }, function(error, status) {

                });
            }
            netAmt = sumAmt - sumDiscAmt + sumVatAmt + sumWeightAmt;
            $scope.ROHead.SumWeight = sumWeight;
            $scope.ROHead.SumAmount = sumAmt;
            $scope.ROHead.SumVatAmount = sumVatAmt;
            $scope.ROHead.SumWeightAmount = sumWeightAmt;
            $scope.ROHead.SumDiscountAmount = sumDiscAmt;
            $scope.ROHead.NetAmount = netAmt;
        }
    }

    $scope.step = 1;
    $scope.Provinces = [];
    $scope.Districts = [];
    $scope.SubDistricts = [];

    // Param Pay
    $scope.PaymentBank = false;
    $scope.PaymentType= "";

    
    $scope.SelectStep = function(step) {
        if (step == 1) {
            $scope.step = 1;
        } else if (step == 2) {
            $scope.step = 2;
        } else if (step == 3) {
            $scope.step = 3;
        }
    }

    $scope.ValidateBilling =  function() {
        //!str || 0 === str.length
        if (!$scope.ROHead.BillingName || 0 === $scope.ROHead.BillingName.length) {
            swal("เตือน", "คุณต้องใส่ชื่อที่อยู่", "warning");
            return;
        } 
        if (!$scope.ROHead.BillingEmail || 0 === $scope.ROHead.BillingEmail.length) {
            swal("เตือน", "คุณต้องใส่อีเมล", "warning");
            return;
        }
        if (!validateEmail($scope.ROHead.BillingEmail)) {
            swal("เตือน", "อีเมลไม่ถูกต้อง", "warning");
            return;
        }
        if (!$scope.ROHead.BillingAddress || 0 === $scope.ROHead.BillingAddress.length) {
            swal("เตือน", "คุณต้องใส่ที่อยู่เพื่อรับสินค้า", "warning");
            return;
        }
        if (!$scope.ROHead.BillingProvinceId || 0 === $scope.ROHead.BillingProvinceId.length) {
            swal("เตือน", "คุณต้องเลือก จังหวัด", "warning");
            return;
        }
        if (!$scope.ROHead.BillingDistrictId || 0 === $scope.ROHead.BillingDistrictId.length) {
            swal("เตือน", "คุณต้องเลือก เขต/อำเภอ", "warning");
            return;
        }
        if (!$scope.ROHead.BillingSubDistrictId || 0 === $scope.ROHead.BillingSubDistrictId.length) {
            swal("เตือน", "คุณต้องเลือก แขวง/ตำบล", "warning");
            return;
        }
        if (!$scope.ROHead.BillingZipCode || 0 === $scope.ROHead.BillingZipCode.length) {
            swal("เตือน", "คุณต้องเลือก รหัสไปรษณีร์", "warning");
            return;
        }

        if (!$scope.ROHead.TelNo || 0 === $scope.ROHead.TelNo.length) {
            swal("เตือน", "คุณต้องเลือกใส่หมายเลขโทรศัพท์", "warning");
            return;
        }

        if (!$scope.ROHead.MobileNo || 0 === $scope.ROHead.MobileNo.length) {
            swal("เตือน", "คุณต้องใส่หมายเลขมือถือ", "warning");
            return;
        }
        if (validateTelNo($scope.ROHead.TelNo)) {
            swal("เตือน", "หมายเลขโทรศัพท์ไม่ถูกต้อง", "warning");
            return;
        }
        if (validateTelNo($scope.ROHead.MobileNo)) {
            swal("เตือน", "่หมายเลขไม่ถูกต้อง", "warning");
            return;
        }
        /*
        if (!$scope.ROHead.ReceiptName || 0 === $scope.ROHead.ReceiptName.length) {
            swal("เตือน", "คุณต้องใส่ชื่อที่อยู่ที่แสดงในใบเสร็จ", "warning");
            return;
        } 
        if (!$scope.ROHead.ReceiptAddress || 0 === $scope.ROHead.ReceiptAddress.length) {
            swal("เตือน", "คุณต้องใส่ที่อยู่ที่แสดงในใบเสร็จ", "warning");
            return;
        }
        if (!$scope.ROHead.ReceiptProvinceId || 0 === $scope.ROHead.ReceiptProvinceId.length) {
            swal("เตือน", "คุณต้องเลือก จังหวัด ที่แสดงในใบเสร็จ", "warning");
            return;
        }
        if (!$scope.ROHead.ReceiptDistrictId || 0 === $scope.ROHead.ReceiptDistrictId.length) {
            swal("เตือน", "คุณต้องเลือก เขต/อำเภอ ที่แสดงในใบเสร็จ", "warning");
            return;
        }
        if (!$scope.ROHead.ReceiptSubDistrictId || 0 === $scope.ROHead.ReceiptSubDistrictId.length) {
            swal("เตือน", "คุณต้องเลือก แขวง/ตำบล ที่แสดงในใบเสร็จ", "warning");
            return;
        }
        if (!$scope.ROHead.ReceiptZipCode || 0 === $scope.ROHead.ReceiptZipCode.length) {
            swal("เตือน", "คุณต้องเลือก รหัสไปรษณีร์ ที่แสดงในใบเสร็จ", "warning");
            return;
        }
*/
        $scope.step = 2;

        $("#nav-step2").removeAttr("disabled");
        $("#nav-step2").addClass("btn-primary");
        $("#nav-step1").addClass("btn-default");
        $("#nav-step3").addClass("btn-default");
    }
    // End Function for Receipt Module
    $scope.InitShipment = function() {
      ProvinceService.LoadProvince()
      .then(function(provinces, status) {
          $scope.ROHead.BillingEmail = $scope.User.Email;
          $scope.SelectBillingProvinceList = provinces;
          $scope.SelectReceiptProvinceList = provinces;
          $scope.ROHead.BillingProvinceId = "";
          $scope.ROHead.BillingDistrictId = "";
          $scope.ROHead.BillingSubDistrictId = "";
          $scope.ROHead.BillingZipCode = "";
          $scope.ROHead.ReceiptProvinceId = "";
          $scope.ROHead.ReceiptDistrictId = "";
          $scope.ROHead.ReceiptSubDistrictId = "";
          $scope.ROHead.ReceiptZipCode = "";
      }, function(err, status) {
          console.log(err);
      });
      $scope.ROHead.Email = $scope.User.Email;
    }
    $scope.UpdateBillingProvince = function() {
    //    console.log("ProvinceId " + $scope.ROHead.BillingProvinceId);
        document.getElementById('LoadDistrictDataReady').style.display = 'block';
        DistrictService.LoadDistrictByProvince($scope.ROHead.BillingProvinceId)
        .then(function(districts, status) {
            document.getElementById('LoadDistrictDataReady').style.display = 'none';
            $scope.SelectBillingDistrictList = districts;
        }, function(err, status) {
            console.log(err);
        });
    }
    $scope.UpdateReceiptProvince = function() {
    //    console.log("ProvinceId " + $scope.ROHead.ReceiptProvinceId);
        DistrictService.LoadDistrictByProvince($scope.ROHead.ReceiptProvinceId)
        .then(function(districts, status) {
            $scope.SelectReceiptDistrictList = districts;
        }, function(err, status) {
            console.log(err);
        });
    }
    $scope.UpdateBillingDistrict = function() {
        document.getElementById('LoadSubDistrictDataReady').style.display = 'block';
        SubDistrictService.LoadSubDistrictByDistrict($scope.ROHead.BillingDistrictId)
        .then(function(subdistricts, status) {
            $scope.SelectBillingSubDistrictList = subdistricts;
            document.getElementById('LoadSubDistrictDataReady').style.display = 'none';
        }, function(err, status) {
            console.log(err);
        });
    }
    $scope.UpdateReceiptDistrict = function() {

        SubDistrictService.LoadSubDistrictByDistrict($scope.ROHead.BillingDistrictId)
        .then(function(subdistricts, status) {
            $scope.SelectReceiptSubDistrictList = subdistricts;
        }, function(err, status) {
            console.log(err);
        });
    }
    $scope.UpdateBillingSubDistrict = function() {
        SubDistrictService.LoadSubDistrictBySubDistrict($scope.ROHead.BillingSubDistrictId)
        .then(function(zipcode, status) {
        ////    console.log('Bill ' + zipcode);
         //   console.log(zipcode);
         //   console.log(zipcode.ZipCode);
            $scope.SelectBillingZipCodeList = zipcode;
            $scope.ROHead.BillingZipCode = zipcode.ZipCode;
        }, function(err, status) {
            console.log(err);
        });
    }

    $scope.UpdateReceiptSubDistrict = function() {
        SubDistrictService.LoadSubDistrictBySubDistrict($scope.ROHead.ReceiptSubDistrictId)
        .then(function(zipcode, status) {
       //     console.log(zipcode);
      //      console.log(zipcode[0].ZipCode);
            $scope.SelectReceiptZipCodeList = zipcode;
            $scope.ROHead.ReceiptZipCode = zipcode._id;
        }, function(err, status) {
            console.log(err);
        });
    }
    $scope.PerformSameBillAndReceiptAddress = function() {
        console.log('PerformSameBillAndReceiptAddress ' + $scope.IsSameAddress);
        if ($scope.IsSameAddress) {
            $scope.ROHead.ReceiptName = $scope.ROHead.BillingName;
            $scope.ROHead.ReceiptAddress = $scope.ROHead.BillingAddress;
            $scope.ROHead.ReceiptProvinceId = $scope.ROHead.BillingProvinceId;
            $scope.UpdateReceiptProvince();
            $scope.ROHead.ReceiptDistrictId = $scope.ROHead.BillingDistrictId;
            $scope.UpdateReceiptDistrict();
            $scope.ROHead.ReceiptSubDistrictId = $scope.ROHead.BillingSubDistrictId;
            $scope.UpdateReceiptSubDistrict();
     //       console.log($scope.ROHead.BillingZipCode);
            $scope.ROHead.ReceiptZipCode = $scope.ROHead.BillingZipCode;
        }
    }
    $scope.ValidatePayment = function() {
      if ($scope.PaymentType == '') {
            swal("เตือน", "คุณต้องเลือกประเภทการชำระเงิน", "warning");
            return;
        } 
        if ($scope.PaymentType == 'Transfer') {
            if ($scope.PaymentBank == '') {
                swal("เตือน", "คุณต้องเลือกธนาคาร", "warning");
                return;
            } 
        } else if ($scope.PaymentType == 'Paypal') {
            
        } else if ($scope.PaymentType == 'Credit') {
            if (!$scope.cardNumber || 0 === $scope.cardNumber) {
                swal("เตือน", "คุณต้องใส่หมายเลขบัตร", "warning");
                return;
            } 
            if (!$scope.cardExpiry || 0 === $scope.cardNumber) {
                swal("เตือน", "คุณต้องใส่หมายเลขบัตร", "warning");
                return;
            } 
            if (!$scope.cardCVC || 0 === $scope.cardNumber) {
                swal("เตือน", "คุณต้องใส่หมายเลขบัตร", "warning");
                return;
            } 
        }
         
        $scope.step = 3;
        $("#nav-step3").removeAttr("disabled");
        $("#nav-step3").addClass("btn-primary");
        $("#nav-step1").addClass("btn-default");
        $("#nav-step2").addClass("btn-default");

        $scope.ValidateFinish();
    }

    $scope.ProcessingPurchaseOrderValue = 0;
    $scope.ValidateFinish = function() {
      console.log('ValidateFinish');
      $scope.ProcessingPurchaseOrderValue = 15;
        var newcode = '';
        AppConfigService.GetNewCode("RO")
        .then(function(data, status) {
            newcode = data;
            $scope.ProcessingPurchaseOrderValue = 33;
            $scope.ROHead.RODate = new Date(); //(new Date()).toISOString();
            $scope.ROHead.RONo = newcode;
            $scope.ROHead.ROLineList = $scope.ROLineList;
            $scope.ROHead.PaymentType = $scope.PaymentType;
            $scope.ROHead.PaymentBank = $scope.PaymentBank;
            $scope.ROHead.UserId = $scope.User.Id;
            $scope.ROHead.PaymentStatus = "N";
            $scope.ROHead.ShippingStatus = "N";
            $scope.ROHead.StaffApprovePaymentStatus = "N";
            return ReceiptOrderService.CreateReceiptOrder($scope.ROHead);
        }, function(err, status) {
            console.log('err create receipt ', err);
        })
        .then(function(data, status) {
            $scope.ProcessingPurchaseOrderValue = 64;
            return EmailService.SendEmailStaffNewOrder(newcode);
        }, function(err, status) {
            console.log('create ro head ', err);
        })
        .then(function(data, status) {
            $scope.ProcessingPurchaseOrderValue = 89;
            return EmailService.SendEmailCustomerNewOrder($scope.User.Email, newcode);
        }, function(err, status) {
            console.log('error sending email staff ', err);
        })
        .then(function(data, status) {
            swal("Thank you for your order", "You can check and track your order in history.", "success");
            $scope.ProcessingPurchaseOrderValue = 100;
             $scope.ROHead.ROLineList.length = 0;
            document.getElementById('ProcessingPurchaseOrder').style.display = 'none';
            document.getElementById('ProcessedPurchaseOrder').style.display = 'block';
            $timeout(function() {

            }, 2500);
        }, function(err, status) {
            console.log('error sending email customer ', err);
        });
    }
    
    $scope.ChangePaymentType = function() {
      if ($scope.PaymentType == 'Paypal') {
          $scope.LoadPaypalInformation();
      }
    }
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validateTelNo(telNo) {
        var re =/\d\-/g;
        return re.test(telNo);
    }

}]);
