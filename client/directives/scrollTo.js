(function(){
	angular
		.module("chatbox")
		.directive("scroll", function () {
  return function (scope, element, attributes) {
    		setTimeout(function () {
        			window.scrollTo(0, element[0].offsetTop - 100)
    		});
  		}
	});
})();