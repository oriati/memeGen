'use strict'

var gCtx;
var gElImg;
var gFont = {
    shadow : false,
    weight : 'bold',
    size : 25,
    font  : 'Arial',
    color : '#fff'}


/** */var font = 'Segoe UI';

testCanvas();
function testCanvas(){
    var testImg = document.querySelector('#testCan-image');
    drawTemplate(testImg);
}



function updateFont(paramType, value){
    gFont.font = document.querySelector('.editor-tools__font').value;
    switch (paramType) {
        case 'sizeMod': gFont.size += value;
            break;
        case 'color': gFont.color = value;
            break;
        case 'shadow': gFont.shadow = (gFont.shadow)? false : true;         
            break;

        default:
            break;
    }
    console.log('font', gFont.font);
    console.log('size', gFont.size);
    console.log('color', gFont.color);
    renderImage();
}

function drawTemplate(elImg) {
    gElImg = elImg;
    var canvas = document.querySelector('.editor-canvas');
    gCtx = canvas.getContext('2d');
    gCtx.drawImage(elImg, 0, 0, 600, 600);
}

function renderImage (){
    gCtx.drawImage(gElImg, 0, 0, 600, 600);
    // ctx.font="30px Arial";
    gCtx.font = gFont.weight+' '+ gFont.size+'px ' + gFont.font ;
    gCtx.fillStyle = gFont.color;
    if (gFont.shadow){
        gCtx.shadowColor = 'gray';
        gCtx.shadowBlur = 10;
        gCtx.shadowOffsetX = 3;
        gCtx.shadowOffsetY = 3;
    } else {
        gCtx.shadowColor = 'gray';
        gCtx.shadowBlur = 0;
        gCtx.shadowOffsetX = 0;
        gCtx.shadowOffsetY = 0;
    }
    var txtTop = document.querySelector('.editor-tools__text-top').value;
    var txtBot = document.querySelector('.editor-tools__text-bot').value;
    gCtx.fillText(txtTop, 50, 100);
    gCtx.fillText(txtBot, 50, 500);
}
