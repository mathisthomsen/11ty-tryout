let burgerToggle = document.querySelector('#burgerMenu')
let menuList = document.querySelector('.menuList')
let main = document.querySelector('main')
let body = document.querySelector('body')

function toggleMenu(){
    console.log('click')
    let toggleState = menuList.getAttribute('data-state')
    if(toggleState === 'closed') {
        menuList.setAttribute('data-state', 'open')
        burgerToggle.setAttribute('data-state', 'open')
        burgerToggle.setAttribute('aria-expanded','true')
        main.setAttribute('data-menustate', 'open')
        body.setAttribute('data-menustate', 'open')
        console.log("menu now open")
    }
    else {
        menuList.setAttribute('data-state', 'closed')
        burgerToggle.setAttribute('data-state', 'closed')
        burgerToggle.setAttribute('aria-expanded','false')
        main.setAttribute('data-menustate', 'closed')
        body.setAttribute('data-menustate', 'closed')
        console.log("menu now closed")
    }

}

burgerToggle.addEventListener('click', toggleMenu)

if (main.getAttribute('data-state') === 'open') {
    main.addEventListener('click', toggleMenu)
}