// It use painter and figures

const Screen = function (){

    const painter = new Painter();

    const square = new SquareFigure();
    const triangle = new TriangleFigure();

    this.clickSquare = () => {
        painter.pain(square);
    };

    this.clickTriangle = () => {
        painter.pain(triangle);
    };
};