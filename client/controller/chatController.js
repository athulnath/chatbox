(function() {
	angular
		.module('chatbox')
		.controller('chatController', chatController);

chatController.$inject = ["$scope", "config"];
////

function chatController($scope, config) {
	
	var vm = this;
	vm.user = {data: "adfs"};
	var socket;
	vm.message = "";
	vm.messageArray = [{name:"adfafasf", uMsg: true}, {name:"adsfasdf", uMsg: false}, 
	{name:"adsfasdf", uMsg: false}, {name:"adsfasdf", uMsg: false}, {name:"adsfasdf", uMsg: false}, 
	{name:"adfafasf", uMsg: true}, {name:"adsfasdf", uMsg: false}, {name:"adsfasdf", uMsg: false}, 
	{name:"adsfasdf", uMsg: false}, {name:"adsfasdf", uMsg: false}, {name:"adfafasf", uMsg: true}, 
	{name:"adsfasdf", uMsg: false}, {name:"adsfasdf", uMsg: false}, {name:"adsfasdf", uMsg: false}, 
	{name:"adsfasdf", uMsg: false}];
	
	vm.sendMessage = sendMessage;

	activate();

////
	function activate() {
		socket = io(config.chatserver);
		socket.on('chat', function(data) {
			vm.messageArray.push({name: data.message, uMsg: true});
			$scope.$apply();
		});

		socket.emit('init', "athulnath");
	}

	function sendMessage() {
		vm.messageArray.push({name: vm.message, uMsg: false});
		socket.emit('chat', "athulnath", { message: vm.message});
		vm.message = "";
		$("#btn-input").focus();
	}

}		

})();