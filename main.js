var navbar = document.getElementById("top-navbar");
window.addEventListener("scroll", function() {
    var st = window.pageYOffset || window.scrollTop; 
    if (st >= 500){
      navbar.classList.add("shade");
    } else {
        navbar.classList.remove("shade");
    }
}, false);


var typed = new Typed(".text-2", {
  strings: ["Adithya Swaminathan."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: false
});