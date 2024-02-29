
let gElCavnas
let gCtx
let gImg
let gCurrMeme
let gCurrLine


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
    gCurrMeme = getMeme()
    gCurrLine = getLine()
    gImg = getImg(gCurrMeme.selectedImgId)
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
    gCtx.fillStyle = gCurrLine.color
    gCtx.font = `${gCurrLine.size}px david`
    gCtx.fillText(gCurrLine.txt, 140, 45)
    gCtx.strokeText(gCurrLine.txt, 140, 45)
}


function onSetLineText(text) {
    setLineText(gCurrLine, text) 
}

