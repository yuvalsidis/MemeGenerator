
let gElCavnas
let gCtx
let gImg
let gCurrMeme
let gCurrLine

function onInit() {
    gElCavnas = document.querySelector('.main-content .gallery .main-canvas')
    gCtx = gElCavnas.getContext('2d')
    renderMeme()
}

function renderMeme() {
    gCurrMeme = getMeme()
    gCurrLine = getLine(0)
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

