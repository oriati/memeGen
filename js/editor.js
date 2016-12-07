'use strict'

var gCanvas;
var gCtx;
var gElImg;

/** */var font = 'Segoe UI';

testCanvas();
function testCanvas(){
    var testImg = document.querySelector('#testCan-image');
    drawTemplate(testImg);
}

function drawTemplate(elImg) {
    gElImg = elImg;
    console.log('creating');
    gCanvas = document.querySelector('.editor-canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.drawImage(elImg, 0, 0, 600, 600);
}
function addText (){
    gCtx.drawImage(gElImg, 0, 0, 600, 600);
    gCtx.font = '60px '+ font ;
    var txtTop = document.querySelector('.input-text-top').value;
    var txtBot = document.querySelector('.input-text-bot').value;
    console.log('txtTop', txtTop);
    console.log('txtBot', txtBot);
    gCtx.fillText(txtTop, 50, 100);
    gCtx.fillText(txtBot, 50, 500);
    // var currCanvas = document.querySelector('.editor-canvas');
    // gCtx.drawImage(currCanvas,0,0,600,600);
}

console.log('canvas', gCanvas);
console.log('ctx', gCtx);
