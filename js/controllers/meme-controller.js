'use strict'

let gElCavnas
let gCtx
let gImg
let gCurrMeme
let gCurrLineObject
let gMemeStorage = []
let gTextInputElm

function onInit() {
    gElCavnas = document.querySelector('.main-content .gallery .main-canvas')
    gCtx = gElCavnas.getContext('2d')
    renderMeme()
    textInputListener()
}

function renderMeme() {
    onClearCanvas()
    gCurrMeme = getMeme()
    gCurrLineObject = getLine()
    gImg = getSelectedImg()
    gMemeStorage.push({ type: 'image', url: gImg.url, id: gImg.id, keywords: gImg.keywords})
    renderImage()
}

function renderImage() {
    const img = new Image()
    img.src = gImg.url
    console.log(gImg.url)
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCavnas.width, gElCavnas.height)
        drawText()
    }

}

function drawText() {
    const pos = { x: 140, y: 40 }
    gCtx.fillStyle = gCurrLineObject.color
    gCtx.font = `${gCurrLineObject.size}px david`
    gCtx.fillText(gCurrLineObject.txt, 140, 40)
    gCtx.strokeText(gCurrLineObject.txt, pos.x, pos.y)
    gMemeStorage.push({ type: 'text', x: pos.x, y: pos.y, txt: gCurrLineObject.txt, 
                        font: `${gCurrLineObject.size}px david`, fillStyle: gCurrLineObject.color })
}

function onSetLineText(text) {
    setLineText(text)
    renderMeme()
}

function onSelectImg(id) {
    setSelectedImgId(id)
    moveImageToEditorAndRender()
}

// DOWNLOAD IMG
function onClickDownloadImg(elLink) {
    const imgContent = gElCavnas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

// STORAGE HANDLE
function onClearCanvas() {
    gMemeStorage = []
    gCtx.clearRect(0, 0, gElCavnas.width, gElCavnas.height) //Fix Rendering issue
}

function onSaveCanvas() {
    console.log(gMemeStorage)
    saveToStorage('canvas', gMemeStorage)
}

function onLoadFromCavnas() {
    const storedCanvas = loadFromStorage('canvas')
    if (storedCanvas) {
        gMemeStorage = storedCanvas
        redrawCanvas()
    }
    else{
        renderMeme();
    }
}

function redrawCanvas() {
    const foundedImage = gMemeStorage.find((item) => item.type === 'image')
    if (foundedImage) {
        const img = new Image()                                                                    //reuse render Image when can 
        img.src = foundedImage.url
        console.log(foundedImage.url)
        img.onload = () => {
            gCtx.drawImage(img, 0, 0, gElCavnas.width, gElCavnas.height)
            gMemeStorage.forEach((item) =>{
                if(item.type === 'text'){
                    gCtx.font = item.font
                    gCtx.fillStyle = item.fillStyle
                    gCtx.fillText(item.txt, item.x, item.y)                                         //Reuse drawText function when can..
                    gCtx.strokeText(item.txt, item.x, item.y)
                }
            })

        }
    }
    else {
        console.log('Error: image not found')
    }
}
