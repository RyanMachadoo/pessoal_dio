const acordianTrigger = document.querySelectorAll('.acordion .trigger')

acordianTrigger.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordean = trigger.parentElement
        const isOpen = acordean.classList.contains('open')
        if(isOpen){
            acordean.classList.remove('open')

        }else{
            acordean.classList.add('open')
        }
        
    })
   
        
    

})