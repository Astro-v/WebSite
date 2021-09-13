


let dmc_setInterval_11;
let dmc_setInterval_12;
let dmc_setInterval_13;
let dmc_setInterval_14;
let bool_1 = true;
let bool_2 = true;

window.addEventListener('scroll', function() {

	/* Article 1 */
	for (let i = 0; i < article.length; ++i){
		if (this.scrollY >= (2*i+1)*(screenH-80) && this.scrollY < (2*i+2)*(screenH-80)) {
			backTest[i].style.top = '80px';
			backTest[i].style.position = 'fixed';
			backTest[i].style.marginTop = '0px';
		} else if (this.scrollY >= (2*i+2)*(screenH-80)) {
			backTest[i].style.position = 'static';
			backTest[i].style.marginTop = (screenH-80).toString()+'px';
		} else {
			backTest[i].style.position = 'static';
			backTest[i].style.marginTop = '0px';
		}
	}
	/* Titre 1 */

	/*if (this.scrollY > screenH-screenH/4) {
		bool_1 = false;
		titreArticle[0].style.marginTop = '1000px';
		titreArticle[0].style.opacity = '0';
		if (parseInt(titreArticle[0].style.marginTop,10)>50 && bool_1 == false) {
			titreArticle[0].style.marginTop = (parseInt(titreArticle[0].style.marginTop,10)-4).toString()+'px';
		} else {
			titreArticle[0].style.marginTop = '50px';
		}
		if (titreArticle[0].style.opacity<1 && bool_1 == false ) {
			titreArticle[0].style.opacity = (parseFloat(titreArticle[0].style.opacity,10)+4/(1000-50)).toString();
		} else {
			titreArticle[0].style.opacity = '1';
		}
	}
	if (this.scrollY <= screenH-screenH/4 && bool_1 == false) {
		bool_1 = true;
		dmc_setInterval_12 = setInterval(function() {
			if (parseInt(titreArticle[0].style.marginTop,10)<800 && bool_1) {
				titreArticle[0].style.marginTop = (parseInt(titreArticle[0].style.marginTop,10)+4).toString()+'px';
			} else {
				titreArticle[0].style.marginTop = '1000px';
			}
			if (titreArticle[0].style.opacity>0 && bool_1) {
				titreArticle[0].style.opacity = (parseFloat(titreArticle[0].style.opacity,10)-4/(1000-50)).toString();
			} else {
				titreArticle[0].style.opacity = '0';
				clearInterval(dmc_setInterval_12);
			}
		},1);	
	}
	if (this.scrollY > screenH+screenH/4 && bool_2) {
		bool_2 = false;
		texteArticle[0].style.marginTop = '1000px';
		texteArticle[0].style.opacity = '0';
		dmc_setInterval_13 = setInterval(function() {
			if (parseInt(texteArticle[0].style.marginTop,10)>50 && bool_2 == false) {
				texteArticle[0].style.marginTop = (parseInt(texteArticle[0].style.marginTop,10)-4).toString()+'px';
			} else {
				texteArticle[0].style.marginTop = '50px';
			}
			if (texteArticle[0].style.opacity<1 && bool_2 == false ) {
				texteArticle[0].style.opacity = (parseFloat(texteArticle[0].style.opacity,10)+4/(1000-50)).toString();
			} else {
				texteArticle[0].style.opacity = '1';
				clearInterval(dmc_setInterval_13);
			}
		},1);	
	}
	if (this.scrollY <= screenH+screenH/4 && bool_2 == false) {
		bool_2 = true;
		dmc_setInterval_14 = setInterval(function() {
			if (parseInt(texteArticle[0].style.marginTop,10)<1000 && bool_2) {
				texteArticle[0].style.marginTop = (parseInt(texteArticle[0].style.marginTop,10)+4).toString()+'px';
			} else {
				texteArticle[0].style.marginTop = '1000px';
			}
			if (texteArticle[0].style.opacity>0 && bool_2) {
				texteArticle[0].style.opacity = (parseFloat(texteArticle[0].style.opacity,10)-4/(1000-50)).toString();
			} else {
				texteArticle[0].style.opacity = '0';
				clearInterval(dmc_setInterval_14);
			}
		},1);	
	}*/
});

