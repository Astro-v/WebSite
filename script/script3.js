let decouvrirButton = document.getElementsByClassName('decouvrirButton');

let dmc_setInterval;
decouvrirButton[0].addEventListener('click', function() {
	dmc_setInterval = setInterval(function() {
		if (window.scrollY<1000) {
			newElt.style.width = window.scroll(0,window.scrollY-2);
		} 
	},3);	
});