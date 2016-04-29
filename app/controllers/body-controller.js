app.controller('BodyController', ["$scope","$http", "ENV","$q", "$timeout", "$translate", "$cookies", "$location", "$filter", "CredentialService", "LocaleService", "CurrencyService" , 
  "ProductService", "CompanyService", "EmailService", 
  //"blockUI",
  "ProvinceService", "DistrictService", "SubDistrictService", "WeightRateService", 
  "UserService", "CryptoService", "ReceiptOrderService", "AppConfigService", "ngTableParams", "MenuService",
  function ($scope,$http, ENV, $q, $timeout, $translate, $cookies, $location, $filter, CredentialService, LocaleService, CurrencyService , 
    ProductService, CompanyService, EmailService,
    // blockUI,
      ProvinceService, DistrictService, SubDistrictService, WeightRateService, 
    UserService, CryptoService, ReceiptOrderService, AppConfigService, ngTableParams, MenuService) {

  	$scope.SelectedLocale = "th";
  	$scope.SelectedCurrency = "thb";
    $scope.CurrencySymbol = "฿";
    $scope.Multiplier = 1;
    $scope.ROHead = {
        SumAmount : 0,
        SumVatAmount : 0,
        SumDiscountAmount : 0,
        SumWeight: 0,
        SumWeightRate: 0,
        NetAmount : 0,
        PostType: 'Normal',
        ROLineList : []
    };
    $scope.ROLineList = [];
    $scope.$on('UpdateROHeadROLineBroadcast', function (event, args) {
        $scope.ROHead = args;
        $scope.ROLineList = $scope.ROHead.ROLineList;
   //     console.log('body arg ', args);
    });
  	$scope.$on('UpdateSelectedLocaleBroadcast', function (event, message) {
  //    console.log('broad to main app ', message);
      $scope.SelectedLocale = message;
    });
  	$scope.$on('UpdateSelectedCurrencyBroadcast', function (event, currency) {
   //   console.log('broad to main app ', currency);
      if (currency === 'thb') {
        $scope.Multiplier = 1;
        $scope.CurrencySymbol = "฿";
        $scope.SelectedCurrency = "thb";
      } else if (currency === 'usd') {
        CurrencyService.GetCurrencyRate('usd')
        .then(function(rate, status) {
            $scope.Multiplier = rate;
            $scope.CurrencySymbol = "$";
            $scope.SelectedCurrency = "usd";
        }, function (err, status) {
            console.log(err);
        });
      } else if (currency === 'eur') {
        CurrencyService.GetCurrencyRate('eur')
        .then(function(rate, status) {
            $scope.Multiplier = rate;
            $scope.CurrencySymbol = "£";
            $scope.SelectedCurrency = "eur";
        }, function (err, status) {
            console.log(err);
        });
      } else if (currency === 'jpy') {
        CurrencyService.GetCurrencyRate('jpy')
        .then(function(rate, status) {
            $scope.Multiplier = rate;
            $scope.CurrencySymbol = "¥";
            $scope.SelectedCurrency = "jpy";
        }, function (err, status) {
            console.log(err);
        });
      } else if (currency === 'gbp') {
        CurrencyService.GetCurrencyRate('gbp')
        .then(function(rate, status) {
            $scope.Multiplier = rate;
            $scope.CurrencySymbol = "£";
            $scope.SelectedCurrency = "gbp";
        }, function (err, status) {
            console.log(err);
        });
      } else if (currency === 'cny') {
        CurrencyService.GetCurrencyRate('cny')
        .then(function(rate, status) {
            $scope.Multiplier = rate;
            $scope.CurrencySymbol = "元";
            $scope.SelectedCurrency = "cny";
        }, function (err, status) {
            console.log(err);
        });
      } 
    });

    $scope.$on('handleUserBroadcast', function (event, args) {
        $scope.User = args.User;
        $scope.ViewAppUserData = args.User;
    });

    $scope.AddCart = function (SelectedProduct, BuyQty, Index) {
 //     console.log('add cart');
        if (BuyQty > 0) {
            var sumAmt = 0;
            var netAmt = 0;
            var sumVatAmt = 0;

            var ROLine = {
                Id: 0,
                ProductCode: "",
                ProductNameTh: "",
                ProductNameEn: "",
                ProductNameJp: "",
                ProductNameCn: "",
                Quantity: 0,
                Price: 0,
                Weight: 0,
                DiscountAmount: 0,
                VatAmount: 0,
                Amount: 0
            };

            // Set value 
            ROLine.ProductCode = SelectedProduct.ProductCode;
            ROLine.ProductNameTh = SelectedProduct.ProductNameTh;
            ROLine.ProductNameEn = SelectedProduct.ProductNameEn;
            ROLine.ProductNameJp = SelectedProduct.ProductNameJp;
            ROLine.ProductNameCn = SelectedProduct.ProductNameCn;
            ROLine.Quantity = BuyQty;
            ROLine.Price = SelectedProduct.SalePrice;
            ROLine.DiscountAmount = 0;
            ROLine.Amount = (ROLine.Price * BuyQty);
            ROLine.VatAmount = ($scope.Company.VatRate / 100) * ROLine.Amount;
            ROLine.Weight = (SelectedProduct.Weight * BuyQty);
            ROLine.DrWeight = SelectedProduct.Weight;
            ROLine.UomNameTh = SelectedProduct.UomNameTh;
            ROLine.UomNameEn = SelectedProduct.UomNameEn;
            ROLine.UomNameJp = SelectedProduct.UomNameJp;
            ROLine.UomNameCn = SelectedProduct.UomNameCn;
            
            $scope.ROHead.SumAmount += ROLine.Amount;
            $scope.ROHead.SumWeight += ROLine.Weight;

            if ($scope.ROHead.PostType === 'Normal') {
                var weight_rate = WeightRateService.GetWeightRateNormal($scope.ROHead.SumWeight);
                $scope.ROHead.SumWeightAmount = parseInt(weight_rate); 
                $scope.ROHead.SumVatAmount += ROLine.VatAmount;
                $scope.ROHead.SumDiscountAmount += ROLine.DiscountAmount;
                $scope.ROHead.NetAmount = $scope.ROHead.SumAmount + $scope.ROHead.SumVatAmount + $scope.ROHead.SumWeightAmount - $scope.ROHead.SumDiscountAmount;

                $scope.ROLineList.push(ROLine);
                $scope.ROHead.ROLineList.push(ROLine);
                  
                $scope.$emit('UpdateROHeadROLineFromBody', $scope.ROHead );
               
            } else {
                WeightRateService.GetWeightRateByPostTypeAndWeight($scope.ROHead.PostType, $scope.ROHead.SumWeight)
                .then(function(weightRate , status) {
                  $scope.ROHead.SumWeightAmount = parseInt(weightRate.Rate);
                  $scope.ROHead.SumVatAmount += ROLine.VatAmount;
                  $scope.ROHead.SumDiscountAmount += ROLine.DiscountAmount;
                  $scope.ROHead.NetAmount = $scope.ROHead.SumAmount + $scope.ROHead.SumVatAmount + $scope.ROHead.SumWeightAmount - $scope.ROHead.SumDiscountAmount;

                  console.log('sum amt ', $scope.ROHead.SumAmount);
                  console.log('sum disc ',$scope.ROHead.SumDiscountAmount);
                  console.log('sum vat ',$scope.ROHead.SumVatAmount);
                  console.log('sum wt ',$scope.ROHead.SumWeightAmount);
                  console.log('net amt ',$scope.ROHead.NetAmount);
                  $scope.ROLineList.push(ROLine);
                  
            
                  $scope.ROHead.ROLineList.push(ROLine);
                  
                  $scope.$emit('UpdateROHeadROLineFromBody', $scope.ROHead );
               
                }, function(error, status) {
                  console.log(error);
                });
            }
            
            swal({
              title: "สำเร็จ",
              text: "ใส่รายการ " + SelectedProduct.ProductNameTh + " จำนวน " + BuyQty + " ในตะกร้าสำเร็จ !!",
              type: "success",
              showCancelButton: false,
              confirmButtonColor: "#5583dd",
              confirmButtonText: "OK",
              closeOnConfirm: true
            },
            function(isConfirm){
              if (isConfirm) {
                $scope.$apply(function(){
                /*  var someimage = document.getElementById('ThumbnailProductImage_'+SelectedProduct.ProductCode);
                    
                    var myimg = someimage.getElementsByTagName('img')[2]; //[0] stripe-new [1] stripe-sale
                    if (myimg !== undefined) {
                        var image_tag = myimg.cloneNode(true); // Must clone because image thumbnail will disappear

                        image_tag.setAttribute("width", "50px");
                        image_tag.setAttribute("height", "50px");
                        $('#CartProduct_'+SelectedProduct.ProductCode).append(image_tag);
                    }*/
                });
              } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
              }
            });
        } else {
            //alert("จำนวนต้องเป็นตัวเลข และ มากกว่า 0");
            sweetAlert("เกิดข้อผิดพลาด", "จำนวนต้องเป็นตัวเลข และ มากกว่า 0", "warning");
            //      ROHead.ROLineList[Index].BuyQty = 0;
        }
    }



    $scope.SearchHistoryReceipt = function() {
   //    console.log($scope.User);
   //   console.log($scope.User.Id);
        ReceiptOrderService.LoadROHeadByUserIdAndStatus($scope.User.Id, $scope.SearchPaymentStatus, $scope.SearchShippingStatus, 
            $scope.StartDate, $scope.EndDate)
        .then(function(data, status) {
            if (data.length > 0 ) {
                $scope.SearchHistoryReceipts = data;
                $scope.HistoryReceiptTableParams = new ngTableParams({
                    page: 1,            // show first page
                    count: 10           // count per page
                }, {
                    total: data.length, // length of data
                    getData: function($defer, params) {
                        $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });
            } else {
                swal("Your data not found", "Cannot find your purchase order data.", "warning");
            }
        }, function(err, status) {
            console.log(err);
        });
    }


    $scope.SearchCustomerOrder = function() {
        if($scope.SearchCustomerRONo === undefined || $scope.SearchCustomerRONo.length <= 0) {
            $scope.SearchCustomerRONo = 'RO';
        }
        
        if ($('#SelectCustomerList').val() === undefined || $('#SelectCustomerList').val() === null) {
            $scope.SearchCustomerName = '$';
        } else {
            $scope.SearchCustomerName = $('#SelectCustomerList').val();
        }
        ReceiptOrderService.LoadROHeadByStaff($scope.SearchCustomerRONo, $scope.SearchCustomerName, $scope.SearchCustomerOrderPaymentStatus, 
            $scope.SearchCustomerOrderShippingStatus, $scope.SearchCustomerOrderStartDate, $scope.SearchCustomerOrderEndDate)
        .then(function(data, status) {
            if (data.length > 0 ) {
                $scope.SearchCustomerOrders = data;
                $scope.CustomerOrderTableParams = new ngTableParams({
                    page: 1,            // show first page
                    count: 10           // count per page
                }, {
                    total: data.length, // length of data
                    getData: function($defer, params) {
                        $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });
            } else {
                swal("Your data not found", "Cannot find customer order data.", "warning");
            }
        }, function (err, status) {
            console.log(err);
        });
    }
    $scope.InitCustomerOrder = function () {
        var load_customer_url = ENV.apiEndpoint + "/users/LoadAppUser";
        $('#SelectCustomerList').select2({ 
            ajax: {
                dataType : "json",
                url      : load_customer_url,
                formatResult : formatCustomer,
                processResults: function (data) {
                    return {
                        results: $.map(data, function(obj) {
                            return { id: obj._id, text: obj.Firstname };
                        })
                    };
                }
            }
        });
    }
    function formatCustomer (data) {
        return data.Firstname + '-' + data.Lastname;
    };
    $scope.PrintRO = function(roHeadId) {
        ReceiptOrderService.LoadROHeadROLineByROHeadId(roHeadId)
        .then(function(data, status) {
            $scope.PrintROData = data;

            $timeout(function() {
                var a = document.getElementById('printing-css').value;
                var b = document.getElementById('PrintROModal').innerHTML;
                window.frames["print_frame"].document.title = document.title;
                window.frames["print_frame"].document.body.innerHTML = '<style>' + a + '</style>' + b;
                window.frames["print_frame"].window.focus();
                window.frames["print_frame"].window.print();
            }, 2000);
        }, function(err, status) {
            console.log(err);
        });
        
    }
    $scope.ViewRO = function (roHeadId, mode) {

        ReceiptOrderService.LoadROHeadROLineByROHeadId(roHeadId)
        .then(function(data, status) {
        //    console.log(data);
            if (mode === 'History') {
                $scope.ViewHistoryRO = data;
                return AWSService.DownloadReceiptPaymentThumbnail($scope.ViewHistoryRO.RONo);
            } else if (mode === 'Customer') {
                $scope.ViewStaffRO = data;
                return AWSService.DownloadReceiptPaymentThumbnail($scope.ViewStaffRO.RONo);
            }
        }, function(err, status) {
            console.log(err);
        })
        .then(function(data, status) {
            if (mode === 'History') {
                var img = $('#ThumbnailReceiptPayment').closest('div').find('img').first();
                img.remove();
                $('#ThumbnailReceiptPayment').append(data);
            } else if (mode === 'Customer') {
                var img = $('#ThumbnailStaffViewReceiptPayment').closest('div').find('img').first();
                img.remove();
                $('#ThumbnailStaffViewReceiptPayment').append(data);
            }
        }, function(err, status) {
            console.log(err);
        })
    }

     $scope.PerformValidatePaymentDocument = function (IsApprove) {
  //      console.log($scope.ViewStaffRO.UserId);
        var UserId = $scope.ViewStaffRO.UserId;
        
        if (IsApprove === 'Y') {
            EmailService.SendEmailApprovePayment(UserId)
            .then(function(data, status) {
                return ReceiptOrderService.PerformApprovePayment($scope.ViewStaffRO.RONo);
            }, function(err, status) {
                console.log(err);
            })
            .then(function(data, status) {
                swal("สำเร็จ", "อนุมัติเอกสารการจ่ายเงินเรียบร้อย", "success"); 
                $('#StaffROModal').modal('toggle');
            }, function(err, status) {
                swal("เกิดข้อผิดพลาด", data, "error");
            });

        } else if (IsApprove === 'N') {
    //        console.log($scope.ViewStaffRO.UserId);
            swal({   
                title: "Reject Payment Document",   
                text: "Reason",   
                type: "input",   
                showCancelButton: true,   
                closeOnConfirm: false,   
                animation: "slide-from-top",   
                inputPlaceholder: "Reject reason" }
                , function(inputValue) {   
                    console.log('inputValue' + inputValue);
                    if (inputValue === false) return false;      
                    if (inputValue === "") {     
                        swal.showInputError("You need to write something!");     
                        return false   
                    } else if (inputValue.length > 0) {      
                        $scope.ValidateForm = {
                            UserId : '',
                            RejectReason : ''
                        };
                        $scope.ValidateForm.UserId = UserId;
                        $scope.ValidateForm.RejectReason = inputValue;

                        EmailService.SendEmailRejectPayment($scope.ValidateForm)
                        .then(function(data, status) {
                            console.log('reject success');
                            $('#StaffROModal').modal('toggle');
                        }, function(err, status) {
                            swal("เกิดข้อผิดพลาด", data, "error");
                        });
                    }
            });
        }
    }
}]);
