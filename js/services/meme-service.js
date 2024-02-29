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

function getImg(idx){
    return gImgs.find((img) => img.id === idx)
}

function getLine(idx){
    return gMeme.lines[idx]
}

function setLineText(idx, text) {
    gMeme.lines[idx].txt = text
}