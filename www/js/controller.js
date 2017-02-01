var inventCtrl = angular.module('inventory.controller',[]);

inventCtrl.controller('LoginController', function($scope, $state, $http){

	$scope.data = {};
	$scope.doLogin = function(){
		
	$http.get("http://localhost/codecanyon/", {params: {"username": $scope.data.phone, "password": $scope.data.password}}).success(function(data,status,headers, config) {
		console.log("Login successfull");
		console.log(data);
		$state.go('tabs.dashboard')
	}).error(function(data,status,headers,config) {
		console.log("header is " + headers)
		console.log("status is " + status)
	})
	
	}
})

inventCtrl.controller('RegisterController', function($scope){

})

inventCtrl.controller('DashboardController', function($scope, $state){

	$scope.next = function(){
		console.log("clicked")
		$state.go('tabs.upload');
	}

	$scope.make_sales = function(){
		$state.go('sales');
	}

	$scope.stock_manag = function(){
		$state.go('stock_management')
	}
})

inventCtrl.controller('ProfileController', function($scope, $state){
	$scope.logout = function(){
		$state.go('login')
	}
})

inventCtrl.controller('UploadController', function($scope, $state){
	
	$scope.back = function(){
		$state.go('tabs.dashboard')
	}

})

inventCtrl.controller('SalesController', function($scope, $state, $ionicPopup){
	$scope.display = false;
	$scope.cart = [];
	$scope.is_cart_empty = false;
	$scope.num_of_product = 0;

	$scope.addToCart = function(params){
		$scope.cart.push(params)
		$scope.is_cart_empty = true;
		console.log($scope.cart)
		$scope.num_of_product = $scope.cart.length;
	}

	$scope.doSomething = function(){
		$scope.display = true;
	}

	$scope.back = function(){
		$state.go('tabs.dashboard');
	}

	$scope.back_to_sales= function(){
		$state.go('sales')
	}

	$scope.final_sales = function(){
		$state.go('final_sales');
	}

	$scope.remove = function(){
		console.log("removed!!!");
	}

	$scope.done = function(){
		 $ionicPopup.alert({
		    title: 'Success',
		    template: `<div style="color: green; text-align: center"><i class="icon ion-checkmark"></i>	<span>Sales made successfully</span>     	
		    </div>`
		  });	 
	}

	$scope.closeSearch= function(){
		$scope.display = false;
	}
});

inventCtrl.controller('StockController', function($scope, $state){
	
	$scope.back_dash = function(){
		$state.go('tabs.dashboard');
	}

})