// Pain on the screen different figures
// You cannot change this file!!

const Painter = function(){
    
    const x = settings.X;
    const y = settings.Y;

    this.pain = (figure) =>{
        figure.display(x, y);
    };
};