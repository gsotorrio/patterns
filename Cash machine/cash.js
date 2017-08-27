"use strict";

function countBillets() {
	var clientMoney = window.document.getElementById("textBox").value;
	var arrayBillets = [];
	
	var arrValues = [500, 200, 100, 50, 20, 10, 5];
	
	for (var i = 0; i < arrValues.length; i++) {
		
		var note = Math.floor(clientMoney / arrValues[i]);
		
		if (note > 0) {
			
			arrayBillets.push(" " + note + "x" + arrValues[i]);
			
			clientMoney = clientMoney - (note * arrValues[i]);
		}
	}
	
	window.document.getElementById("money").innerText = arrayBillets;		
}

function Note500() {
	var next = null;
	
	this.setNext = function (note){
		next = note;
	}
	
	this.handleRequest = function (value) {
		var note = Math.floor(value / 500);
		
		if (note > 0){
			console.log("500");
			this.handleRequest(value - 500);
		}
		else {
			next.handleRequest(value);
		}
	}
}

function Note200() {
	var next = null;
	
	this.setNext = function (note){
		next = note;
	}
	
	this.handleRequest = function (value) {
		var note = Math.floor(value / 200);
		
		if (note > 0){
			console.log("200");
			this.handleRequest(value - 200);
		}
		else {
			next.handleRequest(value);
		}
	}
}

function Note100() {
	var next = null;
	
	this.setNext = function (note){
		next = note;
	}
	
	this.handleRequest = function (value) {
		var note = Math.floor(value / 100);
		
		if (note > 0){
			console.log("100");
			this.handleRequest(value - 100);
		}
		else {
			next.handleRequest(value);
		}
	}
}

function Note50() {
	var next = null;
	
	this.setNext = function (note){
		next = note;
	}
	
	this.handleRequest = function (value) {
		var note = Math.floor(value / 50);
		
		if (note > 0){
			console.log("50");
			this.handleRequest(value - 50);
		}
		else {
			next.handleRequest(value);
		}
	}
}

function Note20() {
	var next = null;
	
	this.setNext = function (note){
		next = note;
	}
	
	this.handleRequest = function (value) {
		var note = Math.floor(value / 20);
		
		if (note > 0){
			console.log("20");
			this.handleRequest(value - 20);
		}
		else {
			next.handleRequest(value);
		}
	}
}

function Note10() {
	var next = null;
	
	this.setNext = function (note){
		next = note;
	}
	
	this.handleRequest = function (value) {
		var note = Math.floor(value / 10);
		
		if (note > 0){
			console.log("10");
			this.handleRequest(value - 10);
		}
		else {
			next.handleRequest(value);
		}
	}
}

function Note5() {
	var next = null;
	
	this.setNext = function (note){
		next = note;
	}
	
	this.handleRequest = function (value) {
		var note = Math.floor(value / 5);
		
		if (note > 0){
			console.log("5");
			this.handleRequest(value - 5);
		}
	}
}

var note500 = new Note500();
var note200 = new Note200();
var note100 = new Note100();
var note50 = new Note50();
var note20 = new Note20();
var note10 = new Note10();
var note5 = new Note5();

note500.setNext(note200);
note200.setNext(note100);
note100.setNext(note50);
note50.setNext(note20);
note20.setNext(note10);
note10.setNext(note5);

note500.handleRequest(885);

// Chain responsability pattern (patron cadena responsabilidades)