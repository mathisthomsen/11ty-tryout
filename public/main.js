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

// MULTILINGUAL

const langToggle = document.querySelector('#langToggle')
const langList = document.querySelector('#langList')

const openLangList = function(){
    langList.classList.toggle('open')
}
// 1 GET BROWSER LANG

let browserLang = navigator.language
//console.log(browserLang)
console.log(localStorage.getItem('locale'))
// 2 SAFE IN COOKIE
if (localStorage.getItem('locale') === null) {
    localStorage.setItem('locale', browserLang)
    console.log('lang has been set')
} else {
    console.log('lang is already set')
}
// UPDATE ON LANG TOGGLE & REDIRECT
const changeLanguage = function(el){
        console.log(el)  
}
// REDIRECT ON INITIAL VISIT