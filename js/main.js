'use strict';

var gItems;
var elGallery;
var elKeywords;
var gKeyWords = ['funny', 'animal', 'bad', 'akward', 'happy', 'sad'];

function init() {
    elGallery = document.querySelector('.gallery__container');
    elKeywords = document.querySelector('.keywords');
    createItems();
    renderKeyWordsList();
}

function createItems() {
    gItems = [];
    var strHtml;
    for (var i = 1; i < 14; i++) {
        gItems.push({
            id: i,
            url: "",
            keywords: getKeyWords(),
        });
    }
    renderItems(gItems);
}

function renderItems(items) {
    var strHtml = items.reduce(function (abr, item) {
        abr += '<img  onclick="toggleMode(this)" src="assets/memes/'
            + item.id
            + '.jpg" id="item-'
            + item.id
            + '" class="gallery__item">';
        return abr;
    }, '');
    elGallery.innerHTML = strHtml;
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

// get value from the search input and send it to the filter function
function searchMeme(el) {
    var keyword = el.value;
    if (keyword === '') {
        $('.gallery__item').removeClass('hide');
        return;
    }
    filterMeme(keyword, el);
}

// filter the gallery according to keywords
function filterMeme(keyword, search) {
    // if the keyword came from a keyword button - clear search input
    if (!search) {
        document.querySelector('#seach-input').value = '';
        console.log('erasing');
    }
    gItems.forEach(function (item) {
        var match = item.keywords.some(function (itemKeyword) {
            return keyword === itemKeyword;
        });
        var itemStr = '#item-' + item.id;
        if (!match) {
            document.querySelector(itemStr).classList.add('hide');
        } else {
            document.querySelector(itemStr).classList.remove('hide');
        }
    });
}

function renderKeyWordsList() {
    var strHtml = gKeyWords.reduce(function (abr, keyword) {
        var keywordStr = "'" + keyword + "'";
        abr += '<button onclick="filterMeme(' + keywordStr + ')">' + keyword + '</button">';
        return abr;
    }, '');
    elKeywords.innerHTML = strHtml;
}

function toggleMode(trigger) {
    if (trigger === 'url') {
        var urlImage = document.querySelector('#url-input').value;
        console.log(urlImage);
        createMeme(urlImage);
    }
    else if (trigger) {
        createMeme(trigger);
        document.querySelector('main').classList.add('editor-mode');
    } else {
        document.querySelector('main').classList.remove('editor-mode');
    }
}