const switchTheme = document.getElementsByClassName('switch__circle')[0]
const switch__box = switchTheme.parentElement.parentElement

const DarkTheme = {
    '--Toogle' : 'hsl(210, 78%, 56%), hsl(146, 68%, 55%)',

    '--Background': 'hsl(230, 17%, 14%)',
    '--BackgroundTop': 'hsl(232, 19%, 15%)',
    '--BackgroundCard': 'hsl(228, 28%, 20%)',
    '--Small-Text': 'hsl(228, 34%, 66%)',
    '--White-Text': 'hsl(0, 0%, 100%)',
    '--HoverCard': 'hsl(229, 28%, 29%)'
}

const LightTheme = {
    '--Toogle': 'hsl(230, 22%, 74%)',

    '--Background': 'hsl(0, 0%, 100%)',
    '--BackgroundTop': 'hsl(225, 100%, 98%)',
    '--BackgroundCard': 'hsl(227, 47%, 96%)',
    '--Small-Text': 'hsl(228, 12%, 44%)',
    '--White-Text': 'hsl(230, 17%, 14%)',
    '--HoverCard': 'hsl(229, 9%, 75%)'
}

const changeTheme = (theme)=>{
    const customStyles = Object.keys(theme);

    for(const styles of customStyles){
        document.documentElement.style.setProperty(styles, theme[styles]);
    }
}

let cont = 0

switchTheme.addEventListener('click',()=>{
    if(cont < 1){
        changeTheme(LightTheme)
        listStyle()
        cont++
        
        localTheme('disable')
    }else if(cont == 1){
        changeTheme(DarkTheme)
        listStyle()
        cont--

        localTheme('enable')
    }
})

const listStyle = ()=>{
    switchTheme.classList.toggle('active__circle')
    switchTheme.parentElement.classList.toggle('active__bar')
    switch__box.classList.toggle('switch__hover')
    switchTheme.parentElement.classList.toggle('active__bar-bg')
}


/* LocalStorage */

const localTheme = (question)=>{
    localStorage.setItem('darkMode',question)
}

document.addEventListener('DOMContentLoaded',()=>{

    if(localStorage.getItem('darkMode')){

        if(localStorage.getItem('darkMode')=='enable'){
            
            changeTheme(DarkTheme)
        }else if(localStorage.getItem('darkMode')=='disable'){

            changeTheme(LightTheme)
            listStyle()
            cont++
        }
    }
})