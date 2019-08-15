window.onscroll = function (event) {
    if(window.scrollY > 50) {
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
}
let liTags = document.getElementsByClassName('menuTigger')
for (let i = 0; i < liTags.length; i++) {
    
    liTags[i].onmouseenter = function (event) {  
        let li = event.currentTarget   
        let ul = li.getElementsByTagName('ul')[0];
        ul.classList.add('active')
    }
    liTags[i].onmouseleave = function (event) {
        let li = event.currentTarget
        let ul = li.getElementsByTagName('ul')[0];
        ul.classList.remove('active')
    }
}
let aTags = document.querySelectorAll('nav > ul > li > a')
console.log(aTags);
for(let i = 0; i < aTags.length; i++){
    aTags[i].onclick = function (event) {
        event.preventDefault();
        let a = event.currentTarget
        console.log(a.href);
        
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let rect = element.getBoundingClientRect()
        window.scrollTo(0,top - 80)
        
        
    }
}
