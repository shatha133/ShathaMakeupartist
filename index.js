const whatsapp = document.getElementById('whatsapp');
const controllerMessage = document.getElementById('controller-message')
const agree = document.getElementById('agree')

whatsapp.addEventListener('click', () => {
    controllerMessage.classList.add('displayShow')
})

agree.addEventListener('click', () => {
    setTimeout(() => {
        
        controllerMessage.classList.remove('displayShow')
        controllerMessage.classList.add('displayNone')

    }, 500)
})