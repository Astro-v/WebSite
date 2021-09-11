let titreArticle = document.getElementsByClassName('titreArticle1');
let texteArticle = document.getElementsByClassName('texte1');
let background = document.getElementsByClassName('background_1');


let dmc_setInterval_11;
let dmc_setInterval_12;
let bool = true;
background[0].style.marginTop = '0px';
window.addEventListener('scroll', function() {
	if (this.scrollY > screenH-280 && bool) {
		bool = false;
		titreArticle[0].style.marginTop = '800px';
		titreArticle[0].style.opacity = '0';
		dmc_setInterval_11 = setInterval(function() {
			if (parseInt(titreArticle[0].style.marginTop,10)>50 && bool == false) {
				titreArticle[0].style.marginTop = (parseInt(titreArticle[0].style.marginTop,10)-4).toString()+'px';
			} else {
				titreArticle[0].style.marginTop = '50px';
			}
			if (titreArticle[0].style.opacity<1 && bool == false ) {
				titreArticle[0].style.opacity = (parseFloat(titreArticle[0].style.opacity,10)+4/(800-50)).toString();
			} else {
				titreArticle[0].style.opacity = '1';
				clearInterval(dmc_setInterval_11);
			}
		},1);	
	}
	if (this.scrollY <= screenH-280 && bool == false) {
		bool = true;
		dmc_setInterval_12 = setInterval(function() {
			if (parseInt(titreArticle[0].style.marginTop,10)<800 && bool) {
				titreArticle[0].style.marginTop = (parseInt(titreArticle[0].style.marginTop,10)+4).toString()+'px';
			} else {
				titreArticle[0].style.marginTop = '800px';
			}
			if (titreArticle[0].style.opacity>0 && bool) {
				titreArticle[0].style.opacity = (parseFloat(titreArticle[0].style.opacity,10)-4/(800-50)).toString();
			} else {
				titreArticle[0].style.opacity = '0';
				clearInterval(dmc_setInterval_12);
			}
		},1);	
	}
	if (this.scrollY >= screenH-80 && this.scrollY < screenH+screenH-80) {
		article[0].style.marginTop = (this.scrollY-screenH+80).toString()+'px';
	} else if (this.scrollY < screenH-80) {
		article[0].style.marginTop = '0px';
	}
	if (this.scrollY > screenH && this.scrollY < 900) {
		texteArticle[0].style.opacity = (this.scrollY-750)/150;
	}
});

