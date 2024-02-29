
let gElCavnas
let gCtx
let gImg
let gCurrMeme
let gCurrLineObject


function onInit() {
    gElCavnas = document.querySelector('.main-content .gallery .main-canvas')
    gCtx = gElCavnas.getContext('2d')
    renderMeme()
    gTextInputElm = document.querySelector('.text-input')
    gTextInputElm.addEventListener('input', (event) => {
        
    onSetLineText(event.target.value)
})
}

function renderMeme() {
    gCtx.clearRect(0, 0, gElCavnas.width, gElCavnas.height) //Fix Rendering issue
    gCurrMeme = getMeme()
    gCurrLineObject = getLine()
    gImg = getSelectedImg()
    renderImage()
}

function renderImage() {
    const img = new Image()
    img.src = gImg.url

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCavnas.width, gElCavnas.height)
        drawText()
    }
}

function drawText() {
    gCtx.fillStyle = gCurrLineObject.color
    gCtx.font = `${gCurrLineObject.size}px david`
    gCtx.fillText(gCurrLineObject.txt, 140, 45)
    gCtx.strokeText(gCurrLineObject.txt, 140, 45)
}


function onSetLineText(text) {
    setLineText(text) 
    renderMeme() 
}

