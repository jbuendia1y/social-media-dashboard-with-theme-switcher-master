const switchTheme = document.getElementsByClassName('switch__circle')[0]

const DarkTheme = {
    '--Toogle' : 'hsl(210, 78%, 56%), hsl(146, 68%, 55%)',

    '--Background': 'hsl(230, 17%, 14%)',
    '--BackgroundTop': 'hsl(232, 19%, 15%)',
    '--BackgroundCard': 'hsl(228, 28%, 20%)',
    '--Small-Text': 'hsl(228, 34%, 66%)',
    '--White-Text': 'hsl(0, 0%, 100%)',
}

const LightTheme = {
    '--Toogle': 'hsl(230, 22%, 74%)',

    '--Background': 'hsl(0, 0%, 100%)',
    '--BackgroundTop': 'hsl(225, 100%, 98%)',
    '--BackgroundCard': 'hsl(227, 47%, 96%)',
    '--Small-Text': 'hsl(228, 12%, 44%)',
    '--White-Text': 'hsl(230, 17%, 14%)'
}

const changeTheme = (theme)=>{
    const customStyles = Object.keys(theme);

    for(const styles of customStyles){
        document.documentElement.style.setProperty(styles, theme[styles]);
        console.log(styles)
    }
}

let cont = 0

switchTheme.addEventListener('click',()=>{
    if(cont < 1){
        changeTheme(LightTheme)
        switchTheme.classList.toggle('active__circle')
        switchTheme.parentElement.classList.toggle('active__bar')
        cont++
    }else if(cont == 1){
        changeTheme(DarkTheme)
        switchTheme.classList.toggle('active__circle')
        switchTheme.parentElement.classList.toggle('active__bar')
        cont--
    }
})