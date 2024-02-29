
let gElCavnas
let gCtx
let gImg
let gCurrMeme
let gCurrLineObject
let gMemeStorage = []


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
    onClearCanvas()
    gCurrMeme = getMeme()
    gCurrLineObject = getLine()
    gImg = getSelectedImg()
    renderImage()
}

function renderImage() {
    const img = new Image()
    img.src = gImg.url
    gMemeStorage.push({ type: 'image', imgSrc: gImg.url })
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCavnas.width, gElCavnas.height)
        drawText()
    }

}

function drawText() {
    const pos = { x: 140, y: 40 }
    gCtx.fillStyle = gCurrLineObject.color
    gCtx.font = `${gCurrLineObject.size}px david`
    gCtx.fillText(gCurrLineObject.txt, 140, 45)
    gCtx.strokeText(gCurrLineObject.txt, pos.x, pos.y)
    gMemeStorage.push({ type: 'text', x: pos.x, y: pos.y, txt: gCurrLineObject.txt, font: `${gCurrLineObject.size}px david`, fillStyle: gCurrLineObject.color })
}


function onSetLineText(text) {
    setLineText(text)
    renderMeme()
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
    }
    redrawCanvas()
}

function redrawCanvas() {
    const foundedImage = gMemeStorage.find((item) => item.type === 'image')
    console.log('foundedImage')
    if (foundedImage.type === 'image') {
        const img = new Image()
        img.src = foundedImage.imgSrc
        img.onload = () => {
            gCtx.drawImage(img, 0, 0, gElCavnas.width, gElCavnas.height)
            gMemeStorage.forEach((item) =>{
                if(item === 'text'){
                    gCtx.font = item.font
                    gCtx.fillStyle = item.fillStyle
                    gCtx.fillText(item.txt, item.x, item.y)
                    gCtx.strokeText(item.txt, item.x, item.y)
                }
            })

        }
    }
    else {
        console.log('Error image not found')
    }
}
