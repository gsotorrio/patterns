"use strict";

function countBillets() {
	var clientMoney = window.document.getElementById("textBox").value;
	var arrayBillets = [];
	
	if (Math.floor(clientMoney / 500 ) > 0) {
		arrayBillets.push(Math.floor(clientMoney / 500 ) + "x500");
		clientMoney = clientMoney - (Math.floor(clientMoney / 500 )*500);
	}
	
	if (Math.floor(clientMoney / 200 ) > 0) {
		arrayBillets.push(Math.floor(clientMoney / 200 ) + "x200");
		clientMoney = clientMoney - (Math.floor(clientMoney / 200 )*200);
	}
	
	if (Math.floor(clientMoney / 100 ) > 0) {
		arrayBillets.push(Math.floor(clientMoney / 100 ) + "x100");
		clientMoney = clientMoney - (Math.floor(clientMoney / 100 )*100);
	}
	
	if (Math.floor(clientMoney / 50 ) > 0) {
		arrayBillets.push(Math.floor(clientMoney / 50 ) + "x50");
		clientMoney = clientMoney - (Math.floor(clientMoney / 50 )*50);
	}
	
	if (Math.floor(clientMoney / 20 ) > 0) {
		arrayBillets.push(Math.floor(clientMoney / 20 ) + "x20");
		clientMoney = clientMoney - (Math.floor(clientMoney / 20 )*20);
	}
	
	if (Math.floor(clientMoney / 10 ) > 0) {
		arrayBillets.push(Math.floor(clientMoney / 10 ) + "x10");
		clientMoney = clientMoney - (Math.floor(clientMoney / 10 )*10);
	}
	
	if (Math.floor(clientMoney / 5 ) > 0) {
		arrayBillets.push(Math.floor(clientMoney / 5 ) + "x5");
		clientMoney = clientMoney - (Math.floor(clientMoney / 5 )*5);
	}
	
	window.document.getElementById("money").innerText = arrayBillets	
}
