document.addEventListener('DOMContentLoaded', function () {
const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-mobile__item');
const allSections = document.querySelectorAll('.default-section');
const navBtnBars = document.querySelector('.burger-btn__bars');

const handleNav = () => {
    nav.classList.toggle('nav-mobile--active')
    
    navBtnBars.classList.remove('black-bars-color');
    
    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-mobile--active')
        })
    })
}





const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();

//dodaje cień do nawigacji
const nav2 = document.querySelector('.nav-desktop')

function addshadow() {
    if (window.scrollY >= 300) {
        nav2.classList.add ('shadow-bg')
    } else {
        nav2.classList.remove ('shadow-bg') 
    }
}

window.addEventListener('scroll', addshadow)



const handleObserver = () => {
    const currentSection = window.scrollY;
    
    allSections.forEach(section => {
        if(section.classList.contains('white-section') && section.offsetTop <= currentSection) {
            navBtnBars.classList.add('black-bars-color');
        } 
        else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection) {
            navBtnBars.classList.remove('black-bars-color');
        }
    })
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
});

const priceLists = document.querySelectorAll('.price__list');
const priceTabs = document.querySelectorAll('.btn');

const showInfo = id => {
    // priceLists.forEach(element => element.style.display = 'none')
    priceLists.forEach(price => price.style.transform = 'translateX(-300%)')
    priceTabs.forEach(tab => tab.classList.remove('price-tab-active'))
    
    // document.getElementById(id).style.display = 'flex'
    document.getElementById(id).style.transform = 'translate(0)'
    
    const currentActiveButton = document.querySelector(`[data-id=${id}]`)
    currentActiveButton.classList.add('price-tab-active')
}