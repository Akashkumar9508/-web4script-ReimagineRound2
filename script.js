// Function to check if the device is a desktop
function isDesktop() {
  return window.innerWidth > 1024; // Adjust the width as needed for your breakpoint
}

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// loader animation
window.addEventListener('load', function () {
  var loader = document.getElementById('loader');
  var content = document.getElementById('content');
  setTimeout(function () {
    loader.style.display = 'none';
    content.style.display = 'block';
    initializeScrollTrigger();
  },10000);
});

// for responsive nav bar 
let lastScrollTop = 0;
navbar = document.querySelector(".nav");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || this.document.elementFromPoint.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-10%";
  }
  else {
    navbar.style.top = "0%";
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
      // scroller: "body",
      // markers: true,
      start: "top 0%",
      end: "top -200%",
      scrub: 2,
      pin: true
    }
  });
  const threeDModle = document.querySelector(".threeDModle");
  const section1 = document.querySelector(".section1");
  const section3 = document.querySelector(".section3");
  const nav = document.querySelector(".nav");

  const tl1 = gsap.timeline();
  tl1.from(".threeDModle", {
    y: 600,
    duration: 2,
    ease: "elastic.out(1,0.3)",
  });

  tl1.from(".circle", {
    opacity: 0,
    duration: 2,
    ease: "back.out(1.7)",
  });

  tl1.from(".mainText1", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: "power1.inout",
  }, 'mainText');

  tl1.from(".mainText2", {
    x: 500,
    opacity: 0,
    duration: 1,
    ease: "power1.inout",
  }, 'mainText');

  tl1.from(".threeDModleRight", {
    x: 700,
    duration: 2,
    ease: "back.out(1.7)",
  }, 'bottle');

  tl1.from(".threeDModleLeft", {
    x: -700,
    duration: 2,
    ease: "back.out(1.7)",
  }, 'bottle');

  tl1.from(nav, {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut"
  });

  tl1.from(".iconSection1", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "circ.out",
  }, 'icon');

  tl1.from(".iconSection2", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "circ.out",
  }, 'icon');

  tl1.from(".exploreSection", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.inout",
  }, 'icon');


  //  3d model animation 
  const threeD = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      // markers:true,
      start: "30% 50%",
      end: "3% 50%",
      scrub: true,
    }
  });


  threeD.to(".threeDModle", {
    left: "-30%",
  });


  threeD.to(".threeDModle", {
    top: "30%",
    left: "32%",
    scale: "1.3",
    duration: "2",
  });




  //  section 3 animation 

  const section3Animation = gsap.timeline({
    scrollTrigger: {
      position: "fixed",
      trigger: ".section3",
      start: "top 0%",
      end: "top -300%",
      scrub: true,
      pin: true,
    }
  });
  
  // Function to apply animations based on screen size
  function applyAnimations() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Mobile animations
      section3Animation.to(".textPart1", {
        scale: 1,
        borderRadius: "0px",
        duration: 8,
      });
  
      section3Animation.to(".img1", {
        width: "100%",
        duration: 8,
      });
  
      section3Animation.to(".section3part2", {
        zIndex: "4",
      });
  
      section3Animation.to(".img2", {
        width: "100%",
        duration: 8,
      });
  
      section3Animation.to(".textPart2", {
        scale: 1,
        borderRadius: "10px",
        duration: 8,
      });
  
      section3Animation.to(".section3part3", {
        zIndex: "5",
      });
  
      section3Animation.to(".textPart3", {
        scale: 1,
        borderRadius: "10px",
        duration: 8,
      });
  
      section3Animation.to(".img3", {
        width: "100%",
        duration: 8,
      });
    } else {
      // Desktop animations
      section3Animation.to(".textPart1", {
        scale: 1,
        borderRadius: "0px",
        duration: 8,
      });
  
      section3Animation.to(".img1", {
        width: "50%",
        duration: 8,
      });
  
      section3Animation.to(".section3part2", {
        zIndex: "4",
      });
  
      section3Animation.to(".img2", {
        width: "50%",
        duration: 8,
      });
  
      section3Animation.to(".textPart2", {
        scale: 1,
        borderRadius: "0px",
        duration: 8,
      });
  
      section3Animation.to(".section3part3", {
        zIndex: "5",
      });
  
      section3Animation.to(".textPart3", {
        scale: 1,
        borderRadius: "0px",
        duration: 8,
      });
  
      section3Animation.to(".img3", {
        width: "50%",
        duration: 8,
      });
    }
  }
  
  // Call the function on load
  applyAnimations();
  
  // Reapply animations on window resize
  window.addEventListener('resize', applyAnimations);
  
  const triangleAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".secondPage3",
      start: "200% 50%",
      end: "250% 50%",
      // markers:true,
      scrub: true,
    }
  });
  triangleAnimation.from(".traingle1",{
    x:-500,
    duration:8,
  },'traingle')
  triangleAnimation.from(".traingle2",{
    x:500,
    duration:8,
  },'traingle')
  triangleAnimation.from(".traingleTextLeft",{
    x:-550,
    duration:8,
  },"traingleText")
  triangleAnimation.from(".traingleTextRight",{
    x:510,
    duration:8,
  },"traingleText")

  //section5 animation

  const buySection = gsap.timeline({
    scrollTrigger: {
      trigger: ".secondPage5",
      start: "86.5% 50%",
      end: "87.5% 50%",
      // markers:true,
      scrub: true,
    }
  });

  buySection.from(".f1",{
    opacity:0,
    duration:2,
    left:-100,
  })
  buySection.from(".f2",{
    opacity:0,
    duration:2,
  })
  buySection.from(".f3",{
    opacity:0,
    duration:2,
    left:100,
  })
  buySection.from(".flavourText",{
    opacity:0,
    left:"-200px",
    duration:2, 
    // top:,
  })
//section5animation ended
  // navlist main code 

  const menuBar = document.querySelector(".menubar");
  const closeBar = document.querySelector(".closeText");
  const navListMain = document.querySelector(".mainNavlist");

  menuBar.addEventListener("click",function(){
    navListMain.style.display="block";
    navListAnimation();
  })

  closeBar.addEventListener("click",function(){
    navListMain.style.display="none";
  })
  
  function navListAnimation(){
    const navListTl = gsap.timeline({
      scrub:2,
      yoyo:true
    });
    navListTl.from(".mainNavlist",{
      x:"50%",
      opacity:0,
      ease:"power1.inOut",
    })
    navListTl.from(".list1",{
      top:-100,
      opacity:0,
      ease: "power1.inOut",
    });
    navListTl.from(".list2",{
      x:-100,
      opacity:0,
      ease: "power1.inOut",
    });
    navListTl.from(".list3",{
      top:-100,
      opacity:0,
      ease: "power1.inOut",
    });
    navListTl.from(".list4",{
      x:-100,
      opacity:0,
      ease: "power1.inOut",
    });
    navListTl.from(".list5",{
      top:-100,
      opacity:0,
      ease: "power1.inOut",
    });
    navListTl.from(".list6",{
      x:-100,
      opacity:0,
      ease: "power1.inOut",
    });
    navListTl.from(".navListRightContent",{
      right:-300,
      opacity:0,
      ease: "power1.inOut",

    })
    navListTl.from(".socialMedia",{
      right:-300,
      opacity:0,
      ease: "power1.inOut",

    })
  }
};
  


//cursor animation
// Function to initialize cursor effects
function initializeCursorEffects() {
  var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    sectioMain = document.querySelector('.sectionmain'),
    navListMainSection = document.querySelector('.navListMainSection'),  
    mouseX = 0,
    mouseY = 0;

  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        }
      });
    }
  });

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('grow');
      cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
      cursor.classList.add('grow');
      if (link.classList.contains('small')) {
        cursor.classList.remove('grow');
        cursor.classList.add('grow-small');
      }
    });
  });
}

// Check if the screen width is greater than 768px (desktop)
if (window.matchMedia("(min-width: 768px)").matches) {
  initializeCursorEffects();
}




// section2pageanimationvideo


if (isDesktop()) {
  document.addEventListener('mousemove', function (e) {
    const video = document.querySelector('.video');
    video.style.clipPath = `circle(250px at ${e.clientX}px ${e.clientY}px)`; // Updated to 250px radius
    video.style.webkitClipPath = `circle(300px at ${e.clientX}px ${e.clientY}px)`; // Webkit prefix for Safari
  });
}

// triangle animation 

//navlist custom cursor
function initializeNavCursorEffects() {
  var cursor = document.querySelector('.nav_cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0;

  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        }
      });
    }
  });
  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('nav_grow');
      cursor.classList.remove('nav_grow-small');
    });
    link.addEventListener('mousemove', () => {
      cursor.classList.add('nav_grow');
      if (link.classList.contains('small')) {
        cursor.classList.remove('nav_grow');
        cursor.classList.add('nav_grow-small');
      }
    });
  });
}
if (window.matchMedia("(min-width: 768px)").matches) {
  initializeNavCursorEffects();
}

//water ripple effect

$(document).ready(function() {
  $('.slide2').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04
  });
});


// can section 

const can = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    // markers:true,
    start: "510% 50%",
    end: "550% 50%",
    scrub: 2,
  }
});

can.from(".popRight",{
  scale:0.8,

  x:0,
},'pop')
can.from(".popLeft",{
  scale:0.8,
  x:0,
},'pop');
can.from(".popText",{
  scale:0.7,
},'pop');

can.from(".leftCan",{
  x:-1000,
  opacity:0,

},'can');

can.from(".rightCan",{
  x:1000,
  opacity:0,

},'can');

can.from(".centerCan",{
  opacity:0,

});

can.from(".popDiscription",{
  opacity:0,
},'can');


const footer = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    // markers:true,
    start: "700% 50%",
    end: "770% 70%",
    scrub: true,
  }
});


footer.from(".leftFooter",{
  x:-100,
  opacity:0,


},'footer')
footer.from(".rightFooter",{
  x:100,
  opacity:0,


},'footer')

footer.from(".footerBottom",{
  opacity:0,
  y:100,


})

gsap.to(".svg2", {
  y: "-20px",
  duration: 2,
  repeat:-1,
  ease: "linear",
  yoyo:true,
});