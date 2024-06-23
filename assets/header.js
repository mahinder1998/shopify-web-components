const headerWrap = document.querySelector(".header-wrap");
const menuList = document.querySelectorAll(".menu-list");

menuList.forEach(function(items){
    const menuToggle = items.querySelector(".menu-toggle");
    menuToggle.addEventListener("click", ()=>{
        menuList.forEach(function(item){
            if(item !== items){
                item.classList.remove("active-droopdown");
                headerWrap.classList.remove("header-active");
                item.firstElementChild.classList.remove("toggle-active");
            }
        })
        items.classList.add("active-droopdown");
        headerWrap.classList.add("header-active");
        menuToggle.classList.add("toggle-active");
    })
});
window.addEventListener("click", function(e){
    if(e.target.getAttribute("class") != "header-wrap" && !e.target.closest(".header-wrap") 
    ){
        removeHeder();
    }
})

function removeHeder(){
    headerWrap.classList.remove("header-active");
    menuList.forEach(function(items){
        items.classList.remove("active-droopdown");
        items.firstElementChild.classList.remove("toggle-active")
    });
}

// scroll 
let lastScrollTop = 0;
window.addEventListener("scroll", ()=>{
    console.log(lastScrollTop)
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        headerWrap.classList.add("hide-header");
        headerWrap.classList.remove("header-active");
        removeHeder();
    }else{
        headerWrap.classList.remove("hide-header");
        headerWrap.classList.add("header-active");
    }
    if(scrollTop == 0){
        headerWrap.classList.remove("header-active");
        removeHeder();
    }
    
    lastScrollTop = scrollTop;
});





//  mobile menu js start

const mobDrawer = document.querySelector("mobile-drawer");
const mobToggle = document.querySelector('#menu-toggle-mob');
const menuClose = document.querySelector(".menu-close");
const submenuActive = document.querySelectorAll(".submenu");


console.log(submenuActive, "submenuActive")



mobToggle.addEventListener("click", ()=>{
    mobDrawer.classList.add("menu-open");
    document.body.style.cssText = "overflow:hidden;"
})


menuClose.addEventListener("click", ()=>{
    mobDrawer.classList.remove("menu-open");
    document.body.style.cssText = "overflow:unset;"
    submenuActive.forEach((openItem)=>{
        openItem.classList.remove("submenu-open");
    })
})


// menus select
const fisrtMenu =  document.querySelectorAll(".menu-toggle");
const backMenu = document.querySelectorAll(".back-menu");


fisrtMenu.forEach(function(menu){
    menu.addEventListener("click", (currentMenu)=>{
        let childElement = currentMenu.currentTarget.nextElementSibling;
        childElement.classList.add("submenu-open");
    })
})
backMenu.forEach(function(back){
    back.addEventListener("click", (backItem)=>{
       let parentSelector = backItem.currentTarget.closest(".submenu");
       parentSelector.classList.remove("submenu-open")
    })
})


window.addEventListener("resize", ()=>{
    let windowWidth = window.innerWidth;
    if(windowWidth > 1023){
        if(mobDrawer.classList.contains("menu-open")){
            mobDrawer.classList.remove("menu-open")
        }
    }
})