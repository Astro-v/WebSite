let decouvrirButton = document.getElementsByClassName('decouvrirButton');

let dmc_setInterval_2;
decouvrirButton[0].addEventListener('click', function() {
	dmc_setInterval_2 = setInterval(function() {
		if (window.scrollY<1000) {
			window.scroll(0,window.scrollY+5);
		} else {
			clearInterval(dmc_setInterval_2);
		}
	},1);	
});