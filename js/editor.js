'use strict'

var gCtx;
var gElImg;
// in the array gFonts, each object represent the font of a textbox in the editor, gFont[0]=top box, gFont[1]=bottom box
var gFont = [
    {
    shadow : false,
    weight : 'bold',
    size : 25,
    font  : 'Arial',
    color : '#fff'  },
    {
    shadow : false,
    weight : 'bold',
    size : 25,
    font  : 'Arial',
    color : '#fff'  }]


//in this function the global objects in gFont are being modified -- i declares which object will be modified - 0=top, 1=bottom
function updateFont(i, paramType, value){
    gFont.font = document.querySelector('.editor-tools__font').value;
    switch (paramType) {
        case 'sizeMod': gFont[i].size += value;
            break;
        case 'font': gFont[i].font += value;
            break;
        case 'color': gFont[i].color = value;
            break;
        case 'shadow': gFont[i].shadow = (gFont.shadow)? false : true;         
            break;
        case 'shadow': gFont[i].weight = (gFont[i].weight==='bold')? 'normal' : 'bold';         
            break;
        default:
            break;
    }
    renderImage();
}

function drawTemplate(elImg) {
    gElImg = elImg;
    var x = elImg.width;
    var y = elImg.width;
    var canvas = document.querySelector('.editor-canvas');
    canvas.width = x;
    canvas.height = y;
    gCtx = canvas.getContext('2d');
    renderImage();
}

function renderImage (){
    gCtx.drawImage(gElImg, 0, 0, gElImg.width, gElImg.height);
    // drawing top text                     DO FOREACH ON THE TWO TEXTBOXES INSTEAD OF REPEATING YOURSELF
    gCtx.font = gFont[0].weight+' '+ gFont[0].size+'px ' + gFont[0].font ;
    gCtx.fillStyle = gFont[0].color;
    if (gFont[0].shadow){
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
    gCtx.fillText(txtTop, 50, 50);

    // drawing bot text                      DO FOREACH ON THE TWO TEXTBOXES INSTEAD OF REPEATING YOURSELF
    gCtx.font = gFont[1].weight+' '+ gFont[1].size+'px ' + gFont[1].font ;
    gCtx.fillStyle = gFont[1].color;
    if (gFont[1].shadow){
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
    var txtBot = document.querySelector('.editor-tools__text-bot').value;
    gCtx.fillText(txtBot, (gElImg.width)/2, (gElImg.height)-40);

}
