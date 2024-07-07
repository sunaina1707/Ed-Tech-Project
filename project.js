// CHANGE NAVBAR STYLES ON SCOLL

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// HIDE/SHOW FAQ ANSWERS

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        //CHANGE ICON
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-multiply";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})


// SHOW/HIDE NAV MENU
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// CLOSE NAV MENU
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)