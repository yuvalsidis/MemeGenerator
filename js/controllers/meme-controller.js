
let gElCavnas
let gCtx

function onInit() {
    gElCavnas = document.querySelector('.main-content .gallery .main-canvas')
    gCtx = gElCavnas.getContext('2d')
    renderMeme()
}

function renderMeme(){
    renderImage()
}
function renderImage() {
    const img = new Image()
    img.src = 'img/meme-imgs-square/1.jpg'

    img.onload = () =>{
        gCtx.drawImage(img, 0, 0, gElCavnas.width, gElCavnas.height)        
        drawText()
    }
}

function drawText() {
    gCtx.lineWidth = 2
    gCtx.fillStyle = 'white'
    gCtx.font = '45px david'
    gCtx.fillText('Hello', 140, 45)
    gCtx.strokeText('Hello', 25, 45)
}