"use strict";

function countBillets() {
	var clientMoney = window.document.getElementById("textBox").value;
	var arrayBillets = [];
	
	var arrValues = [500, 200, 100, 50, 20, 10, 5];
	
	for (var i = 0; i < arrValues.length; i++) {
		if (Math.floor(clientMoney / arrValues[i] ) > 0) {
		arrayBillets.push(Math.floor(clientMoney / arrValues[i] ) + "x" + arrValues[i]);
		clientMoney = clientMoney - (Math.floor(clientMoney / arrValues[i] )*arrValues[i]);
		}
	}
	
	window.document.getElementById("money").innerText = arrayBillets;		
}
