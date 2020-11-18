const burger = (btn,list) => {
    const bur = document.querySelector(btn),
          menu = document.querySelector(list),
          boduy = document.body

    bur.addEventListener('click', function(){
        this.classList.toggle('active')
        menu.classList.toggle('active')
        boduy.classList.toggle('lock')
    })
}
burger('.header__burger', '.header-fixed')