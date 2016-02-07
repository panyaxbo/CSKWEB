app.service("ProductService", ["$q", "$http", "ENV", function ($q, $http, ENV) {
    return {
    	LoadProduct: function() {
    		var defer  = $q.defer();
    		var loadproduct_url = ENV.apiEndpoint + "/products/LoadProduct/";
		    $http.get(loadproduct_url)
		    .success(function(data, status) {
              //  console.log('cryspp serc ', data);
	            defer.resolve(data);
		    })
		    .error(function(error, status) {
		    	defer.reject(error);
		    });
	        return defer.promise;
    	}
    };
}]);