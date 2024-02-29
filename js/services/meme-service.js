var gImgs = [{id: 1, url: 'img/meme-imgs-square/1.jpg', keywords: ['funny', 'cat']}]
var gMeme = {
 selectedImgId: 1,
 selectedLineIdx: 0,
 lines: [
 {
 txt: 'I sometimes eat Falafel',
 size: 40,
 color: 'red'
 }
 ]
}
var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

function getMeme(){
   return gMeme
}

function getSelctedImg(params) {
    
}
function getImg(){
    return gImgs.find((img) => img.id === gMeme.selectedImgId)
}

function getLine(){
    return gMeme.lines[gMeme.selectedLineIdx]
}

function setLineText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

