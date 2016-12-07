'use strict'

var gCanvas;
var gCtx;
var gElImg;

testCanvas();
function testCanvas(){
    var testImg = document.querySelector('#testCan-image');
    createMeme(testImg);
}

function createMeme(elImg) {
    gElImg = elImg;
    console.log('creating');
    gCanvas = document.querySelector('.editor-canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.drawImage(elImg, 10, 10, 600, 600);
    gCtx.font = "60px 'Segoe UI'";
    // var topTxt = document.querySelector('.input-text-top').value;
    // var botTxt = document.querySelector('.input-text-bot').value;
}

function addText (elText, placeStr){
    console.log('placeStr', placeStr);
    var botTxt = elText.value;
    var topTxt = elText.value;
    if (placeStr==='top'){
        console.log(elText.value);
        gCtx.fillText(topTxt, 50, 100);
    } else {
        console.log(elText.value);
        gCtx.fillText(botTxt, 50, 550);
        // gElImg = createMeme(gElImg);
    }
    var currCanvas = document.querySelector('.editor-canvas');
    gCtx.drawImage(currCanvas,10,10,600,600);
}