
var gImgs = [{ id: 1, url: 'img/meme-imgs-square/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Insert ext here',
            size: 40,
            color: 'red'
        }
    ]
}

_createImgs()
console.log(gImgs)
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}

function getSelectedImg() {
    return gImgs.find((img) => img.id === gMeme.selectedImgId)
}

function getImg() {
    return gImgs
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function setLineText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function _createImgs() {
    for (var i = 1; i <= 45; i++)
        gImgs.push(
            {
                id: i,
                url: `img/meme-imgs-square${i}.jpg`, 
                keywords: ['funny', 'cat'] //Fix Keywords for every Image
            }
        )
}
