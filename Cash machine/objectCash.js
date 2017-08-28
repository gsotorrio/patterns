"use strict";

function Note(value) {
    var value = value;

    this.countNotes = function(billete){
        var note = Math.floor(value / billete);

        if(note > 0){
            value = value - billete;
            console.log(billete);
        }
    }
} 

Note.prototype = {
    get: function(bill){
        this.countNotes(bill)
    }
}   

var myNote = new Note(885);

myNote.get(500).get(200)

[500, 200, 100, 50, 20, 10, 5]
