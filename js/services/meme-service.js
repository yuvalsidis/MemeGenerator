'use strict'
const gPosition = {x : 0, y : 40}

var gImgs = [{ id: 1, url: 'img/meme-imgs-square/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            position: { x: 140, y: 40 },
            txt: 'Insert text here',
            size: 40,
            color: 'white',
            fontFamily : 'impact',
            bold : false
        }
    ]

}

_createImgs()

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}

function getSelectedImg() {
    return gImgs.find((img) => img.id === gMeme.selectedImgId)
}

function getLinesLength() {
    return gMeme.lines.length
}
function getImg() {
    return gImgs
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getLines() {
    return gMeme.lines
}

function getLastTextPosition() {
    return gPosition
}

function getSelectedLineIdx(){
    return gMeme.selectedLineIdx
}

function setGPosition(pos) {
    gPosition.x += pos.x
    gPosition.y = pos.y
}

function setSelectedLineIdx(idx){
    gMeme.selectedLineIdx = idx
}

function getTextSize() {
    return gMeme.lines[gMeme.selectedLineIdx].size
}

function getLineByIndex(idx) {
    return gMeme.lines[idx]
}

function setTextSize(value) {
    gMeme.lines[gMeme.selectedLineIdx].size = value
}

function setLineText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function setTextColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setSelectedImgId(idx) {
    gMeme.selectedImgId = idx
    renderGallery
}

function setLineBoldValue(condition) {
    gMeme.lines.find((line,index) => {
        if(index === gMeme.selectedLineIdx){
            line.bold = condition
        }
    })
}

function setPositionLine(pos) {
    gMeme.lines.find((line,index) => {
        if(index === gMeme.selectedLineIdx){
            line.position = {x: pos.x, y: pos.y}
        }
    })
}

function deleteLine(idx) {
    gMeme.lines.splice(idx, 1)
}

function createLine(){
    gPosition.y += 30

    gMeme.lines.push(
        {
            position: { x: gPosition.x, y: gPosition.y },
            txt: 'Insert text here',
            size: 40,
            color: 'white',
            fontFamily : 'impact',
            bold : false
        }
    )
    console.log('added line')
}

function _createImgs() {
    for (var i = 1; i <= 18; i++)
        gImgs.push(
            {
                id: i,
                url: `img/meme-imgs-square/${i}.jpg`,
                keywords: ['funny', 'cat'] //Fix Keywords for every Image
            }
        )
    for (var i = 19; i <= 43; i++) {

        gImgs.push(
            {
                id: i,
                url: `img/meme-imgs-various/${i}.jpg`,
                keywords: ['funny', 'cat'] //Fix Keywords for every Image
            }
        )
    }
}
