'use strict';

var gItems;
var galleryCont;
var gKeyWords = ['fuuny', 'animal', 'yes', 'akward', 'happy', 'sad'];

function init(){
    galleryCont = document.querySelector('.gallery__container');  
    renderItems();
}

function createItems(){
    gItems=[];
    for (var i = 1; i < 14; i++){
        gItems.push({
            id  :   i+1,
            url :   "",
            keywords : getKeyWords(),
                })
    }

}

function getKeyWords();


function renderItems (){
    var strHtml;
    for (var i = 1; i < 14; i++){
        strHtml += '<img src="assets/memes/'+ i + '.jpg">';
    }
    galleryCont.innerHTML = strHtml;    
}