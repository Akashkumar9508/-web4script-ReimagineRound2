

// horizontal scroll
// gsap.to(".slide",{
//     scrollTrigger : {
//         trigger : ".real",
//         start : "top top",
//         end : "bottom bottom", 
//         scrub : 1
//     },
//     xPercent : -200,
//     ease :Power4
// });


var slideCont = document.querySelector(".slideCont");
var section2 = document.querySelector(".section2");

gsap.to(slideCont,{
    transform:"translateX(-201.5%)",
    scrollTrigger:{
        trigger: section2,
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -200%",
        scrub:2,
        pin:true

    }
})