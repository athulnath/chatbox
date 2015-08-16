(function() {
	angular
		.module('chatbox')
		.controller('chatController', chatController);

chatController.$inject = [];		
////

function chatController() {
	var vm = this;
	vm.message = "";
	vm.messageArray = [{name:"adfafasf", uMsg: true}, {name:"adsfasdf", uMsg: false}];
	vm.sendMessage = sendMessage;

	activate();

////
	function activate() {
	}

	function sendMessage() {
		vm.messageArray.push({name: vm.message});
		vm.message = "";
	}
	
}		

})();