app.service("CurrencyService", ["$q","$http", "ENV", function ($q, $http, ENV) {
    var _SelectedCurrency = '';
    return {
        getSelectedCurrency: function() {
            return _SelectedCurrency;
        },
        setSelectedCurrency: function(CurrencyCode) {
            _SelectedCurrency = CurrencyCode;
        },
        GetCurrencyRate: function(CurrencyCode) {
        	var defer = $q.defer();
        	var currencyURL = ENV.apiEndpoint + "/currency/GetRateCurrency/" + CurrencyCode;
	         $http.get(currencyURL)
	         .success(function (data, status) {
	         	console.log('service', data);
	        	defer.resolve(data);
	        })
	        .error(function (error, status) {
	        	defer.reject(error);
	        });
        	return defer.promise;
        }
    };
}]);