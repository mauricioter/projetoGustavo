let carosseis = document.getElementsByClassName('buttons')  

for (let index = 0; index < carosseis.length; index++) {
    let carossel = carosseis[index]  
    let btnBack = carossel.getElementsByClassName('button1')[0]
    let btnNext = carossel.getElementsByClassName('buttonReset')[0] 
    let itens = carossel.getElementsByClassName('image')  
    console.log(itens)
    let position = 0 
    let mover = position + 100 


    
    btnNext.addEventListener('click ', () => {
        mover = position + 100 

        for (let c = 0; c < imagen.length; c++) {
            itens[c].style.right = mover + '%' 
            
            position = mover
        } 
    })  

    btnBack.addEventListener('click', () => { 
        mover = position - 100 
        for (let c = 0; c < imagen.length; c++) {
            
            itens[c].style.right = mover + '%' 

            position = mover
            
        }
    })
} 
