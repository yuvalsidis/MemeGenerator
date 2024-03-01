function textInputListener(){
    gTextInputElm = document.querySelector('.text-input')
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