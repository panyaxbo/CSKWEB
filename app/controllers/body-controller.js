app.controller('BodyController', ["$scope","CredentialService", "LocaleService", "CurrencyService" ,
  function ($scope ,CredentialService, LocaleService, CurrencyService ) {

  	$scope.SelectedLocale = "th";
  	$scope.SelectedCurrency = "thb";
    $scope.CurrencySymbol = "฿";
    $scope.Multiplier = 1;
    $scope.ROHead = {
       ROLineList : []
    };
    $scope.ROLineList = [];
  	$scope.$on('UpdateSelectedLocale', function (event, message) {
      console.log('broad to main app ', message);
      $scope.SelectedLocale = message;
     //   console.log('user main app ',$scope.user);
    });

  	$scope.$on('UpdateSelectedCurrency', function (event, message) {
      console.log('broad to main app ', message);
      $scope.SelectedCurrency = message;
     //   console.log('user main app ',$scope.user);
    });

    console.log('body' ,$scope.SelectedLocale);
    console.log('body' ,$scope.SelectedCurrency);
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
                Quantity: 0,
                Price: 0,
                DiscountAmount: 0,
                VatAmount: 0,
                Amount: 0
            };

            // Set value 
            ROLine.ProductCode = SelectedProduct.ProductCode;
            ROLine.ProductNameTh = SelectedProduct.ProductNameTh;
            ROLine.Quantity = BuyQty;
            ROLine.Price = SelectedProduct.RetailPrice;
            ROLine.DiscountAmount = 0;
            ROLine.Amount = (ROLine.Price * BuyQty) - ROLine.DiscountAmount;
            ROLine.VatAmount = ($scope.Company.VatRate / 100) * ROLine.Amount;
            ROLine.Uoms = SelectedProduct.Uom;
            ROLine.UomCode = SelectedProduct.UomCode;

            
            ROLine.DrRetailPrice = SelectedProduct.RetailPrice;
            ROLine.DrCostPrice = SelectedProduct.CostPrice;
            ROLine.DrWholesalePrice = SelectedProduct.WholesalePrice;
            ROLine.DrSpecialPrice = SelectedProduct.SpecialPrice;
            ROLine.DrContainCostPrice = SelectedProduct.ContainCostPrice;
            ROLine.DrContainWholesalePrice = SelectedProduct.ContainWholesalePrice;
            ROLine.DrContainSpecialPrice = SelectedProduct.ContainSpecialPrice;

            ROLine.DrUomCode = SelectedProduct.UomCode;
            ROLine.DrContainUomCode = SelectedProduct.ContainUomCode;

            console.log('ROLine.Uoms ' + ROLine.Uoms);
            console.log(ROLine.Amount);
            $scope.ROHead.SumAmount += ROLine.Amount;
            $scope.ROHead.SumVatAmount += ROLine.VatAmount;
            $scope.ROHead.SumDiscountAmount += ROLine.DiscountAmount;
            $scope.ROHead.NetAmount = $scope.ROHead.SumAmount + $scope.ROHead.SumVatAmount - $scope.ROHead.SumDiscountAmount;

            
            $scope.ROLineList.push(ROLine);
            console.log($scope.ROHead.SumAmount);
      
            $scope.ROHead.ROLineList.push(ROLine);
            $scope.$emit('handleReceiptOrderEmit', {
                ROHead: $scope.ROHead
            });
            $scope.$emit('UpdateROHeadROLine', {
                ROHead: $scope.ROHead
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
                /*    var someimage = document.getElementById('ThumbnailProductImage_'+SelectedProduct.ProductCode);
                    
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
