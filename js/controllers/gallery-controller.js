let gGalleryImgs
gGalleryImgs = getImg()

function renderGallery() {
    let gMainContent = document.querySelector('.main-content')
    let strHTML = []
    gGalleryImgs.map((img) => {
        strHTML.push(`<img src="${img.url}">`)
    })
    strHTML = strHTML.join('')
    gMainContent.innerHTML = strHTML
}