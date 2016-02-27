app.controller('BodyController', ["$scope","CredentialService", "LocaleService", "CurrencyService" , "WeightRateService",
  function ($scope ,CredentialService, LocaleService, CurrencyService, WeightRateService ) {

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
        console.log('body arg ', args);
    });
  	$scope.$on('UpdateSelectedLocaleBroadcast', function (event, message) {
      console.log('broad to main app ', message);
      $scope.SelectedLocale = message;
    });
  	$scope.$on('UpdateSelectedCurrencyBroadcast', function (event, currency) {
      console.log('broad to main app ', currency);
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

    $scope.AddCart = function (SelectedProduct, BuyQty, Index) {
      console.log('add cart');
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

            ROLine.UomNameTh = SelectedProduct.UomNameTh;
            ROLine.UomNameEn = SelectedProduct.UomNameEn;
            ROLine.UomNameJp = SelectedProduct.UomNameJp;
            ROLine.UomNameCn = SelectedProduct.UomNameCn;
            
            $scope.ROHead.SumAmount += ROLine.Amount;
            $scope.ROHead.SumWeight += ROLine.Weight;
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
}]);
