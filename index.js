const theme= document.querySelector(':root');
const btns= document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const color= e.currentTarget.classList;
        if(color.contains('btn1')){
            theme.style.setProperty('--theme-color',"#3498db")
        } else  if(color.contains('btn2')){
            theme.style.setProperty('--theme-color',"#ff1756")
        }
        else  if(color.contains('btn3')){
            theme.style.setProperty('--theme-color',"darkmagenta")
        }
        else  if(color.contains('btn4')){
            theme.style.setProperty('--theme-color',"blue")
        }
        else  if(color.contains('btn5')){
            theme.style.setProperty('--theme-color',"green")
        }
    })
})