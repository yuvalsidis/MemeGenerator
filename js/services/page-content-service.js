// THIS FILE HANDLE THE GALLERY AND EDITOR CONTENT
// REMOVE AND ADD THE CONTENT

let gMainContent = document.querySelector('.main-content')


function onClickGallery(){
    gMainContent.innerHTML = ''
    renderGallery()
}

function onClickEditor() {
    gMainContent.innerHTML = ''
}