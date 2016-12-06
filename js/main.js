'use strict';

var gItems;
var galleryCont;
var gKeyWords = ['fuuny', 'animal', 'yes', 'akward', 'happy', 'sad'];

function init(){
    galleryCont = document.querySelector('.gallery__container');  
    renderItems();
}
/**fix!!! */
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

function getKeyWords(){
    // var keyWords=[];

    // for (var i = 0; i < getRandomInt(2, 4); i++){
    //     getKeyWords[getRandomInt(0,gKeyWords.length-1)];
        
    // }
}


function renderItems (){
    var strHtml;
    for (var i = 1; i < 14; i++){
        strHtml += '<img src="assets/memes/'+ i + '.jpg">';
    }
    galleryCont.innerHTML = strHtml;    
}

//  this function filters the meme gallery according to the search/keywords(works every click/type)
function filterMeme (keyword){

}

function renderKeyWordsList(){

}

function editMode(){
    
}



