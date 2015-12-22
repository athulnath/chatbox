(function(){
	angular
		.module("chatbox")
		.directive("focus", function () {
  			return function (scope, element, attributes) {
  				console.log("calling");
    			element[0].focus(); 
  		}
	});
})();