
(function() {

	var whoMainNav = document.querySelector("#whoMainNav");
	var whoNav = document.querySelector("#whoNav");
	var workMainNav = document.querySelector("#workMainNav");
	var workNav = document.querySelector("#workNav");

	function dropdownWho() {
		//methods are functions that are prewitten into JS
		// add class/toggle to about dropdown sub nav
		// (adds or removes slideToggle class, meaning it will add the CSS we added in main.css)
		whoNav.classList.toggle("slideToggle");
	}

	function dropdownWork() {
		workNav.classList.toggle("slideToggle");
	}

	whoMainNav.addEventListener("mouseover", dropdownWho);
	// not the best way to make sub nav disappear...
	whoNav.addEventListener("mouseout", dropdownWho);
	workMainNav.addEventListener("mouseover", dropdownWork);
	workNav.addEventListener("mouseout", dropdownWork);

})();

// Makes big nav disappear on scroll

// make function wait?

var navAppear = window.pageYOffset;

window.onscroll = function() {
var navDisappear = window.pageYOffset;
  if (navAppear > navDisappear) {
    document.getElementById("mainHeader").style.top = "0";
  } else {
    document.getElementById("mainHeader").style.top = "-151px";
  }
  navAppear = navDisappear;
}

// function scrollFunction() {

// if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//     document.getElementById("mainHeaderCon").style.padding = "0px";
//     document.getElementById("headerLogo").style.width = "61px";
//   } else {
//   	document.getElementById("mainHeaderCon").style.padding = "20px";
//     document.getElementById("headerLogo").style.width = "122px";
//   }
// }