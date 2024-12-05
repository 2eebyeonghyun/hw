"use strict"

const body = document.querySelector('body');
const mainVsTextBox = document.querySelector('.section01 .textBox');

window.addEventListener('load',function(){
    mainVsTextBox.classList.add('active');
});

function btn(){
    let btn = document.querySelector('.menu__wr');
    let aside = document.querySelector('.sideBar_wr');
    let closeBtn = document.querySelector('.sideBar_wr .closeBtn');

    btn.addEventListener('click', function(){
        this.classList.toggle('active');
        aside.classList.add('active');
    });

    closeBtn.addEventListener('click', function(){
        aside.classList.remove('active');
    });
}

function card(){
    let card = document.querySelectorAll('.grid_wr > li');

    card.forEach(item => {
        item.addEventListener('mousemove', function(event){
            // let e = -(window.innerWidth / 2 - event.pageX) / 30;
            // let n = (window.innerHeight / 2 - event.pageY) / 10;

            let rect = item.getBoundingClientRect();
            let x = rect.left + rect.width / 2;
            let y = rect.top + rect.height / 2;
            let offsetX = event.x - x;
            let offsetY = event.y - y;

            const rotateX = (offsetY / rect.height) * 30;
            const rotateY = (offsetX / rect.width) * 30;

            item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        });

        item.addEventListener('mouseleave', function(){
            item.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    });
}

function topbtn(){
    let topBtn = document.querySelector('.topBtn');

    topBtn.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })
}

btn();
card();
topbtn();




