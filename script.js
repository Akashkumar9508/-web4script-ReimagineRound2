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

// for responsive nav bar 
let lastScrollTop =0;
navbar = document.querySelector(".nav");
window.addEventListener("scroll",function(){
  var scrollTop = window.pageYOffset || this.document.elementFromPoint.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar.style.top="-10%";
  }
  else{
    navbar.style.top="0%";
  }
  lastScrollTop = scrollTop;
})

// gsap 
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
    const threeDModle = document.querySelector(".threeDModle");
    const section1= document.querySelector(".section1");
    const section3= document.querySelector(".section3");
    const nav= document.querySelector(".nav");

    const tl1 = gsap.timeline();
    tl1.from(".threeDModle",{
      y:600,
      // rotate:"360deg",
      duration:2,
      ease: "elastic.out(1,0.3)",
    });
    tl1.from(".circle",{
      opacity:0,
      duration:2,
      ease:"power1.inout",
    });
    tl1.from(".mainText1",{
      x:-500,
      opacity:0,
      duration:1,
      ease:"power1.inout",
    },'mainText');
    tl1.from(".mainText2",{
      x:500,
      opacity:0,
      duration:1,
      ease:"power1.inout",
    },'mainText');
    tl1.from(nav,{
        y: -100,
        opacity:0,
        duration: 1, // duration of 1 second
        ease: "power1.inOut" // easing function for smooth animation
      });

      tl1.from(".iconSection1",{
        x:-100,
        opacity:0,
        duration:1,
        ease:"power1.inout",
      },'icon');
      tl1.from(".iconSection2",{
        x:100,
        opacity:0,
        duration:1,
        ease:"power1.inout",
      },'icon');
      tl1.from(".exploreSection",{
        x:-100,
        opacity:0,
        duration:1,
        ease:"power1.inout",
      },'icon');
    };




