'use strict'

var canvas;
var ctx;


testCanvas();
function testCanvas(){
    var testImg = document.querySelector('#testCan-image');
    editMode(testImg);

}

function editMode(elImg){
     canvas = document.querySelector('.editor-canvas');
     ctx = canvas.getContext('2d');
     ctx.drawImage(elImg, 0, 0, 568, 360);

}



