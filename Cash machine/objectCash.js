"use strict";

function Note(value) {
    var value = value;

    this.countNotes = function(billetes){
        var note = Math.floor(value / billetes);

        if(note > 0){
            value = value - billetes;
            console.log(billetes);
        }
        else{
            
        }
    }
}



[500, 200, 100, 50, 20, 10, 5]
