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
    items.forEach(function (item) {
        renderItem(item);

    });
}

function renderItem(item) {
    var template = $('#hex-template').clone();
    template.attr('id', 'item-' + item.id);
    template.removeClass('template');
    template.find('img').attr('src', 'assets/memes/' + item.id +'.jpg');
    template.appendTo('#meme-gallery');   
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
    // Clearing the gallery
    $('#meme-gallery').empty();
    // if the keyword came from a keyword button - clear search input
    if (!search) {
        document.querySelector('#seach-input').value = '';
    }
    gItems.forEach(function (item) {
        var match = item.keywords.some(function (itemKeyword) {
            return keyword === itemKeyword;
        });
        if (match) { renderItem(item); }
    });
}


function renderKeyWordsList() {
    var strHtml = gKeyWords.reduce(function (abr, keyword) {
        var keywordStr = "'" + keyword + "'";
        abr += '<button onclick="filterMeme(' + keywordStr + ')" class="clean-btn">' + keyword + '</button">';
        return abr;
    }, '');
    elKeywords.innerHTML = strHtml;
}

// toggling between Editor & Gallery
function toggleMode(trigger) {
    var elMain = document.querySelector('main');
    // image from url
    if (trigger === 'url') {
        var urlImage = new Image();
        urlImage.src = document.querySelector('#url-input').value;
        drawTemplate(urlImage);
        elMain.classList.add('editor-mode');
    }
    // img from gallery
    else if (trigger) {
        drawTemplate(trigger);
        document.querySelector('main').classList.add('editor-mode');
        elMain.classList.add('editor-mode');
    }
    // closing the editor with buttons
    else {
        document.querySelector('main').classList.remove('editor-mode');
        elMain.classList.remove('editor-mode');
    }
}