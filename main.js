function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
//导航栏浮动
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
})
//技能条滚动
me.classList.remove("offset")
window.addEventListener('scroll', function () {
    if (window.scrollY > 652) {
        let progressBar = document.querySelectorAll('.progress')
        for (let i = 0; i < progressBar.length; i++) {
            progressBar[i].classList.remove('default')

        }
        
    }
})


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
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (event) {
        event.preventDefault()
        let a = event.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href);
        let top = element.offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 60;
        let coords = { y:currentTop};
        let s = targetTop - currentTop;
        s = Math.abs(s);
        var t = s * 3;
        
        if(t > 500){ t = 500};
       
        
        var tween = new TWEEN.Tween(coords)
            .to({ y:targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {      
                window.scrollTo(0,coords.y)       
            })
            .start(); 
    }
    
}
let projects = document.querySelectorAll('.project')
projects = Array.prototype.slice.call(projects)



protfolioALL.onclick = function () {   
    protfolioSlider.className = 'bar state-1'
    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.add('active')
    }
    
}
protfolioFramework.onclick = function () {
    protfolioSlider.className = 'bar state-2'
    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.remove('active')
        if (projects[i].attributes[1].nodeValue === 'Vue') {
            projects[i].classList.add('active')
        }
        
        
    }
}
protfolioVallina.onclick = function () {
    protfolioSlider.className = 'bar state-3'
    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.remove('active')
        if (projects[i].attributes[1].nodeValue === 'JavaScript') {
            projects[i].classList.add('active')
        }


    }
}

window.addEventListener('scroll', function () {


    let specialTages = document.querySelectorAll('[data-x]')
    let minIndex = 0;
    for (let i = 1; i < specialTages.length; i++) {
        if ((Math.abs(specialTages[i].offsetTop - window.scrollY) < (Math.abs(specialTages[minIndex].offsetTop - window.scrollY)))) {
                  minIndex = i;
        }
    }
    
    
    specialTages[minIndex].classList.remove('offset')
    let id = specialTages[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode;
    let brothersAndMe = li.parentNode.children
    
    for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')

});

function findClosestAndRemoveOffset() {
    
    
    
    
}  

weixin.addEventListener('click',(e)=>{
    weixinContact.classList.add('active')
    
})
closeButton.addEventListener('click',(e)=>{
    weixinContact.classList.remove('active')
})


// 修改作品展示
