function  eventListeners(){
    textInputListener()
    colorInputListener()
    clickOnBodyElments()   
}

// This function prevent default relode when clicking on button or input
function clickOnBodyElments(){
    document.body.addEventListener('click', event => {
        event.target.classList.contains('btn') ? event.preventDefault() : null 
    })
    document.body.addEventListener('click', event => {
        event.target.classList.contains('emoji') ? event.preventDefault() : null 
    })
    document.body.addEventListener('click', event => {
        event.target.classList.contains('arrow') ? event.preventDefault() : null 
    })

}

function textInputListener(){
    gTextInputElm = document.querySelector('.main-editor-header .text-input')
    gTextInputElm.addEventListener('input', (event) => {
        
        onSetLineText(event.target.value)
    })
    // Prevent default for pressing key 'Enter' (SUBMIT)
    gTextInputElm.addEventListener('keypress', (event) =>{
        if(event.keyCode === 13){
            event.preventDefault()
        }
    })
}

function colorInputListener(){
    gColorInputElm = document.querySelector('.main-editor-content .color-input')
    gColorInputElm.addEventListener('input', (event) => {
        console.log(event.target.value)
        onSetTextColor(event.target.value)
    })
    gColorInputElm.value =  getLine().color
}

