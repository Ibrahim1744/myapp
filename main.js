let header=document.querySelector('header');
let hamburgerMenu=document.querySelector('.fa-bars');
let xhamburgerMenu=document.querySelector('.fa-x');
let menu=document.getElementById('menu');



window.addEventListener("scroll",(eo)=>{
    let scrolled=window.scrollY;
    if(scrolled>0){
        header.classList.add("header-scroll")

    }
    else{
        header.classList.remove("header-scroll")

    }

    
})

hamburgerMenu.addEventListener("click",(eo)=>{
    menu.classList.toggle("show-menu");
    hamburgerMenu.classList.toggle('bars-toggle')
    xhamburgerMenu.classList.toggle('close-toggle')
    
})
xhamburgerMenu.addEventListener("click",(eo)=>{
    menu.classList.toggle("show-menu");
    hamburgerMenu.classList.toggle('bars-toggle')
    xhamburgerMenu.classList.toggle('close-toggle')
    
})
