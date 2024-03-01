'use strict'

// THIS FILE HANDLE THE GALLERY AND EDITOR CONTENT
// REMOVE AND ADD THE CONTENT


var editorContent = document.querySelector('.main-content').innerHTML

function onClickGallery(){
    onSaveCanvas()
    renderGallery()
}

function onClickEditor() {
    const mainContent = document.querySelector('.main-content')
    mainContent.innerHTML = editorContent
    onInit()
    onLoadFromCavnas() 
}



