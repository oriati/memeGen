'use strict';

var gItems;
var galleryCont;
var gKeyWords = ['fuuny', 'animal', 'bad', 'akward', 'happy', 'sad'];

function init() {
    galleryCont = document.querySelector('.gallery__container');
    createItems();
}

function createItems() {
    gItems = [];
    for (var i = 1; i < 14; i++) {
        gItems.push({
            id: i + 1,
            url: "",
            keywords: getKeyWords(),
        })
    }
}

function renderItems() {
    var strHtml;
    for (var i = 1; i < 14; i++) {
        strHtml += '<img src="assets/memes/' + i + '.jpg">';
    }
    galleryCont.innerHTML = strHtml;
}

function getKeyWords() {
    var keywords = [];
    for (var i = 0; i < getRandomInt(2, 4); i++) {
        var keyword = gKeyWords[getRandomInt(0, gKeyWords.length - 1)];
        // check to see if keyword is present and if not 
        // push it to keywords
        while (keywords.indexOf(keyword) === -1) {
            keywords.push(keyword);
        }
    }
    return keywords;
}

// this function filters the meme gallery according to the search/keywords
// (works every click/type)
function filterMeme(keyword) {

}

function renderKeyWordsList() {

}

function editMode() {
    console.log('hello');
}