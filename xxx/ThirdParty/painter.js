// Pain on the screen different figures
// You cannot change this file!!

const Painter = function(){
    
    const x = 40;
    const y = 40;

    this.pain = (figure) =>{
        figure.display(x, y);
    };
};