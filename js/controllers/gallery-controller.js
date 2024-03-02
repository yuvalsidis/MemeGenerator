let gGalleryImgs
gGalleryImgs = getImg()

function renderGallery() {
    let gMainContent = document.querySelector('.main-content')
    let strHTML = []
    gGalleryImgs.map((img) => {
        strHTML.push(`<img src="${img.url}" onclick="onSelectImg(${img.id})" style="height: 200px; width: auto;">`)
    })
    strHTML = strHTML.join('')
    gMainContent.innerHTML = strHTML
}