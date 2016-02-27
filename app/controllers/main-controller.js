"use strict"
app.controller('MainController', ["$scope","$q", "$timeout", "$translate", "$cookies","CredentialService", "LocaleService", 
  "CurrencyService" , "ProductService", "CompanyService", "EmailService", "blockUI",
  "ProvinceService", "DistrictService", "SubDistrictService", "WeightRateService", "UserService", "CryptoService",
  function ($scope, $q, $timeout, $translate, $cookies, CredentialService, LocaleService, CurrencyService , 
    ProductService, CompanyService, EmailService, ngDialog, blockUI, ProvinceService, DistrictService, SubDistrictService, 
    WeightRateService, UserService, CryptoService) {

  	$scope.Locale = "th";
    $scope.SelectedCurrency = "thb";
    $scope.SelectedLocale = "th";
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

    $scope.$on('UpdateROHeadROLineFromBodyBroadcast', function (event, args) {
        $scope.ROHead = args;
        $scope.ROLineList = $scope.ROHead.ROLineList;
        console.log('main arg ', args);
    });

    $scope.SelectedMenuCurrency = function (currency) {
        $scope.SelectedCurrency = currency;
        console.log('cur ', currency);
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
        $scope.$emit('UpdateSelectedLocale', $scope.SelectedLocale);
    }

    CredentialService.LoadOAuth()
    .then(function(data, status) {
        OAuth.initialize(data);
    }, function(error, status) {
        console.log('oauth err ', error);
    });
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
    $scope.Products = [];
    ProductService.LoadProduct()
    .then(function(data, status) {
      $scope.Products = data;
    }, function(error, status) {

    })
    $scope.Signup = function () {
      console.log('sinn up ');
      var email = $scope.Email;
      $scope.User.Firstname = $scope.Firstname;
      $scope.User.Lastname = $scope.Lastname;
      var hashLink = '';
      UserService.CreateUserEmailActivate($scope.Username, $scope.Password, email, $scope.User)
      .then(function(data, status) {
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
      console.log($scope.username, $scope.password);
   //   blockUI.start("Please wait");
      var appuser = {};
      UserService.LoginWithUsernameAndPassword($scope.username, $scope.password)
      .then(function(data, status) {
          console.log('data ' , data);
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
          console.log('error', error);
          console.log("Log in Not found");
          $scope.LoginErrorMessage = "Error! Wrong Username or Password";
          $('#LoginErrorAlert').show();
          $scope.IsAdmin = false;
          $scope.IsGuest = true;
          $scope.IsLogin = false; 
    //      blockUI.stop();
          return $q.reject('error occur');
      })
      .then(function (isActivate, status) {
          if (!isActivate || isActivate === undefined) {
          } else {

              $scope.User = appuser;
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
           //   blockUI.stop();
              
              console.log('IsAdmin', $scope.IsAdmin);
              console.log('IsGuest', $scope.IsGuest);
              console.log('IsLogin', $scope.IsLogin);
              console.log('User ', $scope.User);

              alert($scope.IsLogin);

              if ($scope.RememberMe) {
                var now = new Date();
                now.setDate(now.getDate() + 1);
                $cookies.putObject('User', $scope.User);
              }
         
          }

          return UserService.DownloadUserProfileImage($scope.User.Id, $scope.User.Username);
      })
      .then(function(profile_image, status) {
          if (profile_image.indexOf('base64') > -1)  {
            $scope.User.ProfileImage = profile_image;
            $('#UserProfileImage').children("img").remove();
            $('#UserProfileImage').append(profile_image);
            
          }

            ngDialog.close();
      }, function(error, status) {
          console.log('error', error);
          console.log("Log in Not found");
          $scope.LoginErrorMessage = "Error! Wrong Username or Password";
          $('#LoginErrorAlert').show();
          $scope.IsAdmin = false;
          $scope.IsGuest = true;
          $scope.IsLogin = false; 
        //  ngDialog.close();
          return $q.reject('error occur');
      })
    }
  	
    $scope.OpenCartDialog = function() {
     //   ngDialog.open({ template: 'views/about.html' });
        ngDialog.open({ 
          template: '/views/cart-template.html',
          scope: $scope,
          controller: 'MainController',
         className: 'ngdialog-theme-default dialogwidth1000'
        });
    }
    $scope.DeleteCart = function() {
      console.log('delete cart');
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
    //  console.log('continue shop');
      ngDialog.close();
    } 
    $scope.CheckoutProcess = function() {
      console.log("shipment..");
        if ($scope.IsUserInSession()) {
          console.log('user log in ');
          ngDialog.open({
            template: '/views/shipping-template.html',
            scope: $scope,
            closeByEscape: true,
            className: 'ngdialog-theme-default dialogwidth780'
          });
          $scope.InitShipment();
          ngDialog.close();
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
              ngDialog.open({ 
                template: '/views/login-template.html',
                scope: $scope,
                closeByEscape: false,
                controller: 'MainController',
                className: 'ngdialog-theme-default dialogwidth780'
              });
              ngDialog.close(); // Turn off Cart Dialog
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
/*    $scope.OpenLoginDialog = function() {
        ngDialog.open({ 
          scope: $scope,
          template: '/views/login-template.html',
          closeByEscape: true,
          className: 'ngdialog-theme-default dialogwidth780',
          controller: 'MainController'
        });
    }*/
    $scope.OpenForgetPasswordDialog = function() {
        ngDialog.open({ 
          template: 'ForgetPasswordTemplate'
        });
    }
    $scope.OpenInputPasswordDialog = function() {
        ngDialog.open({ 
          template: 'InputPasswordTemplate'
        });
    }

    $scope.ChangePostType = function() {
      console.log('change post ', $scope.ROHead.PostType);
      WeightRateService.GetWeightRateByPostTypeAndWeight($scope.ROHead.PostType, $scope.ROHead.SumWeight)
      .then(function(weightRate , status) {
        $scope.ROHead.SumWeightAmount = parseInt(weightRate.Rate);
        $scope.ROHead.NetAmount = $scope.ROHead.SumAmount + $scope.ROHead.SumVatAmount + $scope.ROHead.SumWeightAmount - $scope.ROHead.SumDiscountAmount;
        console.log('sum amt ', $scope.ROHead.SumAmount);
        console.log('sum disc ',$scope.ROHead.SumDiscountAmount);
        console.log('sum vat ',$scope.ROHead.SumVatAmount);
        console.log('sum wt ',$scope.ROHead.SumWeightAmount);
        console.log('net amt ',$scope.ROHead.NetAmount);
        
        $scope.$emit('UpdateROHeadROLine', $scope.ROHead );
     
      }, function(error, status) {
        console.log(error);
      });
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
        console.log("UpdateCartSummary ..");
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
          roline.Amount = roline.Quantity * roline.Price;
          roline.VatAmount = roline.Amount * 0.07;
          sumAmt += roline.Amount;
          sumWeight += roline.Weight;
          sumVatAmt += roline.VatAmount;
          sumDiscAmt += roline.DiscountAmount;
        }
        netAmt = sumAmt - sumDiscAmt + sumVatAmt;
        WeightRateService.GetWeightRateByPostTypeAndWeight(ROHead.PostType,sumWeight )
        .then(function(weightRate, status) {
            sumWeightAmt = parseInt(weightRate.Rate);
        }, function(error, status) {

        });
        $scope.ROHead.SumWeight = sumWeight;
        $scope.ROHead.SumAmount = sumAmt;
        $scope.ROHead.SumVatAmount = sumVatAmt;
        $scope.ROHead.SumWeightAmount = sumWeightAmt;
        $scope.ROHead.SumDiscountAmount = sumDiscAmt;
        $scope.ROHead.NetAmount = netAmt;
    }

    $scope.step = 1;
    $scope.Provinces = [];
    $scope.Districts = [];
    $scope.SubDistricts = [];

    // Param Pay
    $scope.PaymentBank = false;
    $scope.PaymentType= "";

    $scope.Paypal = {};
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
        if (!validateTelNo($scope.ROHead.TelNo)) {
            swal("เตือน", "หมายเลขโทรศัพท์ไม่ถูกต้อง", "warning");
            return;
        }
        if (!validateTelNo($scope.ROHead.MobileNo)) {
            swal("เตือน", "่หมายเลขไม่ถูกต้อง", "warning");
            return;
        }
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
    }
    $scope.UpdateBillingProvince = function() {
        console.log("ProvinceId " + $scope.ROHead.BillingProvinceId);
        DistrictService.LoadDistrictByProvince($scope.ROHead.BillingProvinceId)
        .then(function(districts, status) {
            $scope.SelectBillingDistrictList = districts;
        }, function(err, status) {
            console.log(err);
        });
    }
    $scope.UpdateReceiptProvince = function() {
        console.log("ProvinceId " + $scope.ROHead.ReceiptProvinceId);
        DistrictService.LoadDistrictByProvince($scope.ROHead.ReceiptProvinceId)
        .then(function(districts, status) {
            $scope.SelectReceiptDistrictList = districts;
        }, function(err, status) {
            console.log(err);
        });
    }
    $scope.UpdateBillingDistrict = function() {
        SubDistrictService.LoadSubDistrictByDistrict($scope.ROHead.BillingDistrictId)
        .then(function(subdistricts, status) {
            $scope.SelectBillingSubDistrictList = subdistricts;
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
            console.log('Bill ' + zipcode);
            console.log(zipcode);
            console.log(zipcode.ZipCode);
            $scope.SelectBillingZipCodeList = zipcode;
            $scope.ROHead.BillingZipCode = zipcode.ZipCode;
        }, function(err, status) {
            console.log(err);
        });
    }

    $scope.UpdateReceiptSubDistrict = function() {
        SubDistrictService.LoadSubDistrictBySubDistrict($scope.ROHead.ReceiptSubDistrictId)
        .then(function(zipcode, status) {
            console.log(zipcode);
            console.log(zipcode[0].ZipCode);
            $scope.SelectReceiptZipCodeList = zipcode;
            $scope.ROHead.ReceiptZipCode = zipcode.ZipCode;
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
            console.log($scope.ROHead.BillingZipCode);
            $scope.ROHead.ReceiptZipCode = $scope.ROHead.BillingZipCode;
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
