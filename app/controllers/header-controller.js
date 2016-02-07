"use strict"
app.controller('HeaderController', ["$scope","$translate", "$cookies","notificationService","CredentialService", "LocaleService", "CurrencyService" ,
  function ($scope,$translate, $cookies,notificationService, CredentialService, LocaleService, CurrencyService ) {

  	$scope.Locale = "th";
    $scope.SelectedCurrency = "thb";
    $scope.SelectedLocale = "th";
    $scope.IsAdmin = false;
    $scope.IsGuest = true;
    $scope.IsLogin = false;
    $scope.ROHead = {
        SumAmount: 0,
        SumVatAmount: 0,
        SumDiscountAmount: 0,
        NetAmount: 0
    };
   // if ($rootScope.ROLineList == undefined) {
  //      $rootScope.ROLineList = [];
 //   }

    $scope.User = {
        Id :"",
        RoleNameEn: "",
        Username: "",
        Password: "",
        Role: {
            RoleCode: "",
            RoleNameEn: "",
            RoleNameTh: "",
        },
        Staff: {
            Firstname: "Guest",
            Lastname: ""
        }
    };

    $scope.SelectedCurrency = function (currency) {
        $scope.SelectedCurrency = currency;
        console.log('cur ', currency);
        if (currency == "thb") {
            CurrencyService._SelectedCurrency = "thb";
            $scope.SelectedMenu = "thb";
            $scope.CurrencySymbol = "฿";
            $scope.Multiplier = 1;
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

    $scope.SelectedLocale = function (locale) {
    	console.log('loc ', locale);
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
      //  $scope.$emit('handleLocaleEmit', {
    //        SelectedLocale: locale
    //    });

        $scope.$emit('UpdateSelectedLocale', $scope.SelectedLocale);
    }

    CredentialService.LoadOAuth()
    .then(function(data, status) {
        OAuth.initialize(data);
        console.log(data);
    }, function(error, status) {
        console.log('oauth err ', error);
    });

    
    $scope.Signup = function () {
  
      console.log('sinn up ');
      var email = $scope.Email;
      $scope.User.Firstname = $scope.Firstname;
      $scope.User.Lastname = $scope.Lastname;
      var hashLink = '';
      UserService.CreateUserEmailActivate($scope.Username, $scope.Password, email, $scope.User)
      .then(function(data, status) {
      //    blockUI.message("25%");
          return CryptoService.GenerateHashLink($scope.Username, $scope.Password, email)
      }, function(err, status) {
          blockUI.stop();
          console.log('err create app user ', err);
      })
      .then(function (data, status) {
          console.log(data);
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
      //    blockUI.message("100%");
      //    blockUI.stop();
      //    swal("Sign up almost Success", "Please check your email to activate your account", "success");
          $("#LoginModal").modal("toggle");
      }, function(error, status) {
          swal("Error", "Cannot sign up this time", "error");
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
      var appuser = {};
      UserService.LoginWithUsernameAndPassword($scope.username, $scope.password)
      .then(function(data, status) {
          console.log('data ' , data);
          if (!data || data === undefined) {
       //       swal("Error", "Cannot login maybe username or password incorrect", "error");
              $scope.User = [];
              $scope.IsAdmin = false;
              $scope.IsGuest = false;
              return;
          } else {
            appuser = data;
          }
          return UserService.CheckIsUserActivate($scope.username, $scope.password);
      })
      .then(function (data, status) {
          console.log(appuser, appuser.Role.RoleCode);
          if (!data || data === undefined) {
        //    swal("Error", "Sorry, your account is not activated yet, please check your email.", "error");
          } else {
            $scope.User = appuser;
            $scope.User.Id = appuser._id;
            $scope.User.Username = appuser.Username;
            $scope.User.Password = appuser.Password;
            $scope.User.Role.RoleCode = appuser.Role.RoleCode;
            $scope.User.Role.RoleNameEn = appuser.Role.RoleNameEn;
            $scope.User.Role.RoleNameTh = appuser.Role.RoleNameTh;
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
            $("#LoginModal").modal("toggle");

            if ($scope.RememberMe) {
              var now = new Date();
              now.setDate(now.getDate() + 1);
              $cookies.putObject('User', $scope.User);
            }
          }
          return UserService.DownloadUserProfileImage($scope.User.Id, $scope.User.Username);
      })
      .then(function(profile_image, status) {
   //     console.log(profile_image);
        $scope.User.ProfileImage = profile_image;
          $('#UserProfileImage').children("img").remove();
          $('#UserProfileImage').append(profile_image);
          return UserService.DownloadUserThumbnailImage($scope.User.Id, $scope.User.Username);
      })
      .then(function(thumbnail_image, status) {
   //     console.log(thumbnail_image);
          $('#ThumbnailProfileImage').children("img").remove();
          $('#ThumbnailProfileImage').append(thumbnail_image);

          //Clear value after login successfully
          $scope.username = "";
          $scope.password = "";
          $scope.$emit('handleUserEmit', {
              User: $scope.User
          });
      }, function(error, status) {
          console.log('error', error);
          console.log("Log in Not found");
          $scope.LoginErrorMessage = "Error! Wrong Username or Password";
          $('#LoginErrorAlert').show();
          $scope.IsAdmin = false;
          $scope.IsGuest = true;
          $scope.IsLogin = false; 
      });
    }
  	$scope.TestNotifiy = function() {
            notificationService.success("a", "v", "x");
    };

    


}]);
