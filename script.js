// menu bar 

const menuBar = document.querySelector(".menuBar");
const navDiv = document.querySelector(".navDiv");
let menuBarActive = false;

menuBar.addEventListener("click", function() {
    menuBarActive = !menuBarActive;
    if (menuBarActive) {
        menuBar.classList.add("addEnd");
        menuBar.classList.remove("addStart");
        navDiv.classList.add("navDivStart");
        navDiv.classList.remove("navDivClose");
    } else {
        menuBar.classList.add("addStart");
        menuBar.classList.remove("addEnd");
        navDiv.classList.add("navDivClose");
        navDiv.classList.remove("navDivStart");
    }
});
