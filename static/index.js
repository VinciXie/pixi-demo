const ee = function (sel) {
  return document.querySelector(sel)
}


var app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('Basic text in pixi');
basicText.x = 30;
basicText.y = 90;

app.stage.addChild(basicText);



var style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
});



var richText = new PIXI.Text('Rich text with a lot of options and across multiple lines', style);
richText.x = 30;
richText.y = 180;

app.stage.addChild(richText);




var filter = new PIXI.filters.ColorMatrixFilter();

app.stage.filters = [filter];

var count = 0;

app.ticker.add(function(delta) {


    count += 0.1;

    var matrix = filter.matrix;

    matrix[1] = Math.sin(count) * 3;
    matrix[2] = Math.cos(count);
    matrix[3] = Math.cos(count) * 1.5;
    matrix[4] = Math.sin(count / 3) * 2;
    matrix[5] = Math.sin(count / 2);
    matrix[6] = Math.sin(count / 4);
});
