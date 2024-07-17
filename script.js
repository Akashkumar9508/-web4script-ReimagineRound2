// script.js
window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
        initializeScrollTrigger();
    }, 200); 
});
function initializeScrollTrigger() {
    const slideCont = document.querySelector(".slideCont");
    const section2 = document.querySelector(".section2");

    gsap.to(slideCont, {
        transform: "translateX(-200%)",
        scrollTrigger: {
            trigger: section2,
            scroller: "body",
            // markers: true,
            start: "top 0%",
            end: "top -200%",
            scrub: 2,
            pin: true
        }
    });
}


// 3d model animation 

const threeDModle = document.querySelector(".3dModle");
const section1= document.querySelector(".section1");
const section2= document.querySelector(".section2");
const section3= document.querySelector(".section3");


