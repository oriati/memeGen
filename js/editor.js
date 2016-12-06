'use strict'

var canvas;
var ctx;


testCanvas();
function testCanvas(){
    var testImg = document.querySelector('#testCan-image');
    createMeme(testImg);
}



function createMeme(elImg) {
    console.log('creating');
    canvas = document.querySelector('.editor-canvas');
    ctx = canvas.getContext('2d');
    ctx.drawImage(elImg, 25, 25, 600, 600);
    ctx.font = "60px 'Segoe UI'";
    var topTxt = document.querySelector('.input-text-top').value;
    var botTxt = document.querySelector('.input-text-bot').value;
    ctx.fillText(topTxt, 200, 100);
    ctx.fillText(botTxt, 200, 550);
}

// function insertText(ctx) {
//     ctx.font = "60px 'Segoe UI'";
//     var topTxt = document.querySelector('.input-text-top').value;
//     var botTxt = document.querySelector('.input-text-bot').value;
//     ctx.fillText(topTxt, 200, 100);
//     ctx.fillText(botTxt, 200, 550);
// }






