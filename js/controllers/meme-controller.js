'use strict'

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
    eventListeners()
}

function renderMeme() {
    onClearCanvas()
    gCurrMeme = getMeme()
    gImg = getSelectedImg()
    gMemeStorage.push({ type: 'image', url: gImg.url, id: gImg.id, keywords: gImg.keywords })
    renderImage()
}

function renderImage() {
    const img = new Image()
    img.src = gImg.url
    const memeLines = getLines()
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCavnas.width, gElCavnas.height)
        memeLines.forEach((line, index) => {
            drawText(line.position, line.txt, line.size, line.color)
            const selectedLine = getSelectedLineIdx()
            console.log('index', index)
            console.log('selectedLineIndex', selectedLine)
            if (selectedLine === index) {
                const lineToFrame = getLine()
                drawAFrame(lineToFrame.position, lineToFrame.size, lineToFrame.txt)
            }
        })
    }

}

function drawText(pos, txt, size, color) {
    const { x, y } = pos
    gCtx.fillStyle = color
    gCtx.font = `${size}px david`
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
    gMemeStorage.push({
        pos: { x: x, y: y },
        type: 'text',
        txt: txt,
        font: `${size}px david`,
        fillStyle: color
    })
}


//Change text
function onSetLineText(text) {
    setLineText(text)
    renderMeme()
}
//Change color
function onSetTextColor(color) {
    setTextColor(color)
    renderMeme()
}

//Change text size
function onIncreaseSize() {
    decreaseOrIncreaseSize(true)
    renderMeme()
}
function onDecreaseSize() {
    decreaseOrIncreaseSize(false)
    renderMeme()
}

//Add a Text Line
function onClickAddLine(event) {
    changeNewLineStarter()
    createLine()
    renderMeme()
}

function onClickCanvas(event) {
    const { offsetX, offsetY } = event
    const lines = getLines()
    lines.forEach((line, index) => {
        const textWidth = gCtx.measureText(line.txt).width
        const textHeight = line.size
        const maxX = line.position.x + textWidth
        const maxY = line.position.y + textHeight
        console.log(`minX : ${line.position.x}, minY: ${line.position.y}, maxX ${maxX }:, minY: ${maxY }`)
        if (isInRange(offsetX, line.position.x, maxX) && isInRange(offsetY, line.position.y, maxY)){
            if(index === 0 )  setSelectedLineIdx(index) 
            else  setSelectedLineIdx(index + 1)
            let correctLine = getSelectedLineIdx()
            handleClickOnLine(correctLine)
        }
        else return
    })
}


function handleClickOnLine(idx) {
    const textElm = document.querySelector('.main-editor-header .text-input')
    setSelectedLineIdx(idx)
    renderMeme()
    textElm.value = textElm.value ? getLine().txt : ''

}

//This function Handle when switching line
function onClickSwitchLine() {
    const textElm = document.querySelector('.main-editor-header .text-input')
    const linesLength = getLinesLength()
    let correctLine = getSelectedLineIdx()
    correctLine++
    console.log(correctLine)
    if (correctLine > linesLength - 1) {
        setSelectedLineIdx(0)
        textElm.value = textElm.value ? getLine().txt : ''
        renderMeme()
    }
    else {
        setSelectedLineIdx(correctLine)
        textElm.value = textElm.value ? getLine().txt : ''
        renderMeme()
    }
}

// Draw a frame on the the selected line 
function drawAFrame(pos, fontSize, text) {
    gCtx.save()
    const { x, y } = pos
    const framePadding = 2
    const textWidth = gCtx.measureText(text).width
    const textHeight = -fontSize

    const extraPadding = 30
    const frameWidth = textWidth + framePadding * 2 + extraPadding
    const frameHeight = textHeight + framePadding * 2

    const frameX = x - framePadding
    const frameY = y - framePadding

    gCtx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    gCtx.fillRect(frameX, frameY, frameWidth, frameHeight)

    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 2
    gCtx.strokeRect(frameX, frameY, frameWidth, frameHeight)
    gCtx.restore()
}

// This function check where is the last line and adjust the new line position
function changeNewLineStarter() {
    const { x, y } = getLastTextPosition()
    if (y >= gElCavnas.height - 20) {
        setGPosition({ x: 80, y: 60 })
    }
}

function decreaseOrIncreaseSize(condition) {
    let modifiedSize = null
    const corrSize = getTextSize()
    if (condition) {
        modifiedSize = corrSize + 1
    }
    else {
        modifiedSize = corrSize - 1
    }
    if (modifiedSize < 1) return
    const currectSizeElement = document.querySelector('.main-editor-content .size-input .correctSize')
    setTextSize(modifiedSize)
    currectSizeElement.innerText = `${modifiedSize}`
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
    else {
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
            gMemeStorage.forEach((item) => {
                if (item.type === 'text') {
                    drawText(item.pos, item.txt, item.font, item.fillStyle)
                }
            })

        }
    }
    else {
        console.log('Error: image not found')
    }
}

