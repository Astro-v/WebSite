let titreArticle = document.getElementsByClassName('titreArticle1');
let texteArticle = document.getElementsByClassName('texte1');

let dmc_setInterval_1;
let bool = true;
window.addEventListener('scroll', function() {
	if (this.scrollY > 800 && bool) {
		bool = false;
		titreArticle[0].style.marginTop = '800px';
		titreArticle[0].style.opacity = '0';
		dmc_setInterval_1 = setInterval(function() {
			if (parseInt(titreArticle[0].style.marginTop,10)>50 && bool == false) {
				titreArticle[0].style.marginTop = (parseInt(titreArticle[0].style.marginTop,10)-4).toString()+'px';
			} else {
				titreArticle[0].style.marginTop = '50px';
				clearInterval(dmc_setInterval_1);
			}
			if (titreArticle[0].style.opacity<1 && bool == false ) {
				titreArticle[0].style.opacity = (parseFloat(titreArticle[0].style.opacity,10)+4/(800-50)).toString();
			} else {
				titreArticle[0].style.opacity = '1';
			}
		},1);	
	}
	if (this.scrollY <= 800 && bool == false) {
		bool = true;
		titreArticle[0].style.marginTop = '50px';
		titreArticle[0].style.opacity = '1';
		dmc_setInterval_1 = setInterval(function() {
			if (parseInt(titreArticle[0].style.marginTop,10)<800 && bool) {
				titreArticle[0].style.marginTop = (parseInt(titreArticle[0].style.marginTop,10)+4).toString()+'px';
			} else {
				titreArticle[0].style.marginTop = '800px';
				clearInterval(dmc_setInterval_1);
			}
			if (titreArticle[0].style.opacity>0 && bool) {
				titreArticle[0].style.opacity = (parseFloat(titreArticle[0].style.opacity,10)-4/(800-50)).toString();
			} else {
				titreArticle[0].style.opacity = '0';
			}
		},1);	
	}
	if (this.scrollY > 500 && this.scrollY < 900) {
		texteArticle[0].style.marginTop = (925-this.scrollY).toString()+'px';
	}
	if (this.scrollY > 750 && this.scrollY < 900) {
		texteArticle[0].style.opacity = (this.scrollY-750)/150;
	}
});

