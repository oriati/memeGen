'use strict'

var gCtx;
var gElImg;
// in the array gLabels, each object represent the label of a textbox in the editor, gLabels[0]=top box, gLabels[1]=bottom bo
var gLabels = [
    {
    x : 150,
    y : 50,
    shadow : false,
    weight : 'bold',
    size : 25,
    font  : 'Arial',
    color : '#fff'  },
    {
    x : 150,
    y : 200,
    shadow : false,
    weight : 'bold',
    size : 25,
    font  : 'Arial',
    color : '#fff'  }]


//in this function the global objects in gLabels are being modified -- i declares which object will be modified - 0=top, 1=bottom
function updateFont(i, paramType, value){
    gLabels.font = document.querySelector('.editor-tools__font').value;
    switch (paramType) {
        case 'sizeMod': gLabels[i].size += value;
            break;
        case 'font': gLabels[i].font += value;
            break;
        case 'color': gLabels[i].color = value;
            break;
        case 'shadow': gLabels[i].shadow = (gLabels.shadow)? false : true;         
            break;
        case 'shadow': gLabels[i].weight = (gLabels[i].weight==='bold')? 'normal' : 'bold';         
            break;
        default:
            break;
    }
    renderImage();
}

function drawTemplate(elImg) {
    gElImg = elImg;
    var x = elImg.naturalWidth;
    var y = elImg.naturalHeight;
     
    var canvas = document.querySelector('.editor-canvas');
    canvas.width = x;
    canvas.height = y;
    gCtx = canvas.getContext('2d');
    renderImage();
}

function renderImage (){
    gLabels[0].x = gElImg.naturalWidth/2;
    gLabels[1].x = gElImg.naturalWidth/2;
    gLabels[0].y = gElImg.naturalHeight* (1/10) + (gLabels[0].size);
    gLabels[1].y = gElImg.naturalHeight* (9/10) - (gLabels[1].size);
    gCtx.drawImage(gElImg, 0, 0, gElImg.naturalWidth, gElImg.naturalHeight);
    // drawing top text                     DO FOREACH ON THE TWO TEXTBOXES INSTEAD OF REPEATING YOURSELF
    gCtx.font = gLabels[0].weight+' '+ gLabels[0].size+'px ' + gLabels[0].font ;
    gCtx.fillStyle = gLabels[0].color;
    if (gLabels[0].shadow){
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
    gCtx.fillText(txtTop, gLabels[0].x, gLabels[0].y);

    // drawing bot text                      DO FOREACH ON THE TWO TEXTBOXES INSTEAD OF REPEATING YOURSELF
    gCtx.font = gLabels[1].weight+' '+ gLabels[1].size+'px ' + gLabels[1].font ;
    gCtx.fillStyle = gLabels[1].color;
    if (gLabels[1].shadow){
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
    gCtx.fillText(txtBot, gLabels[1].x, gLabels[1].y);

}
