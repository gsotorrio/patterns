"use strict";

function Note(value) {
    var value = value;

    this.countNotes = function(billete){
        var note = Math.floor(value / billete);

        if(note > 0){
            value = value - billete;
            console.log(billete);
            this.countNotes(billete)
        }
        else{

        }
    }
} 

Note.prototype = {

}   

//[500, 200, 100, 50, 20, 10, 5]

var Request = function(value) {
    this.value = value;
    console.log("Show me the money " + value);
}

Request.prototype = {
    get: function(bill) {
        var count = Math.floor(this.value / bill);
        this.value -= count * bill;
        console.log("bill " + bill)
        return this;
    }
}

var request = new Request(885);

request.get(500).get(200).get(100).get(50).get(20).get(10).get(5)
