'use strict'

var gCanvas;
var gCanvasContainer;
var gCtx;
var gElImg;
var gMeme = {};         // = {meme:img , labels:{top:{text:'', x:100, y:100, weight:'bold',color},bottom:{text:'...',x:100 etc...}}}

function initEditor() {
    gCanvas = document.querySelector('.editor-canvas');
    gCanvasContainer = document.querySelector('#canvas-container');
    gCtx = gCanvas.getContext('2d');
}
// reciving elImg From image library and initializing canvas
function initCanvas(elImg) {
    // initializing wysiwyg
    $('.text-box input[type=text]').val('');
    $('.text-box .toggle-btn').addClass('active');
    $('.editor-font__color').val('#000000');

    gElImg = elImg;
    gCanvas.width = elImg.naturalWidth;
    gCanvas.height = elImg.naturalHeight;
    var img = new Image();
    img.src = elImg.src;
    gMeme.meme = img;
    img.onload = function () {
        initLabels();
        drawMeme();
    }
}

function initLabels() {
    gMeme.labels = {
        top: {
            x: 200,
            y: 50,
            text: '',
            shadow: true,
            weight: 'bold',
            size: 30,
            font: 'Arial',
            color: '#fff'
        },
        bottom: {
            x: 200,
            y: 400,
            text: '',
            shadow: true,
            weight: 'bold',
            size: 30,
            font: 'Arial',
            color: '#fff'
        }
    }
}

// this function will fire at start and for every change of labels - it will print the IMAGE AND TWO LABELS on the canvas

///fix in update - text!!!
function drawMeme() {
    gCtx.drawImage(gMeme.meme, 0, 0, gElImg.naturalWidth, gElImg.naturalHeight);
    resize(gCanvas, gCanvasContainer);
    for (var label in gMeme.labels) {
        if (gMeme.labels[label].shadow) {
            gCtx.shadowColor = '#000';
            gCtx.shadowBlur = 0;
            gCtx.shadowOffsetX = 3;
            gCtx.shadowOffsetY = 3;
        }
        else {
            gCtx.shadowColor = 'gray';
            gCtx.shadowBlur = 0;
            gCtx.shadowOffsetX = 0;
            gCtx.shadowOffsetY = 0;
        }
        // else
        gCtx.font = gMeme.labels[label].weight + ' ' + gMeme.labels[label].size + 'px ' + gMeme.labels[label].font;
        gCtx.fillStyle = gMeme.labels[label].color;
        gCtx.fillText(gMeme.labels[label].text, gMeme.labels[label].x, gMeme.labels[label].y);
    }
}


function updateLabels(i, paramType, value) {
    // gLabels.font = document.querySelector('.editor-tools__font').value;
    switch (paramType) {
        case 'sizeMod': gMeme.labels[i].size += value;
            break;
        case 'font': gMeme.labels[i].font = value;
            break;
        case 'color': gMeme.labels[i].color = value;
            break;
        case 'shadow': gMeme.labels[i].shadow = (gMeme.labels[i].shadow) ? false : true;
            break;
        case 'weight': gMeme.labels[i].weight = (gMeme.labels[i].weight === 'bold') ? 'normal' : 'bold';
            break;
        case 'text': gMeme.labels[i].text = value;
            break;
        default:
            break;
    }
    drawMeme();
}

function downloadMeme(elLink) {
    elLink.href = gCanvas.toDataURL();
    elLink.download = 'DaMemeGenerator.jpg';
}

function resize(canvas, container) {

    // aspect ratio
    var widthToHeight = canvas.width / canvas.height;
    var newWidthToHeight = widthToHeight;

    // cache the window dimensions (discount the border)
    var newWidth = container.innerWidth,
        newHeight = container.innerHeight;

    newWidthToHeight = newWidth / newHeight;

    console.log('width = ', newWidth);

    // scale the container using CSS		
    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        container.style.height = newHeight + 'px';
        container.style.width = newWidth + 'px';
    } else {
        newHeight = newWidth / widthToHeight;
        container.style.width = newWidth + 'px';
        container.style.height = newHeight + 'px';
        console.log('changing width to', container.style.width);
    }

};

// listen to resize events
window.addEventListener('resize', function () {
    resize(gCanvas, gCanvasContainer);
}, false);

// also resize the screen on orientation changes
window.addEventListener('orientationchange', function () {
    resize(gCanvas, gCanvasContainer);
}, false);