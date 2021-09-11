let titreArticle = document.getElementsByClassName('titreArticle1');

window.addEventListener('scroll', function() {
	if (this.scrollY > 200 && this.scrollY < 600) {
		titreArticle[0].style.marginTop = 800-this.scrollY+'px';
	}
	if (this.scrollY > 450 && this.scrollY < 600) {
		titreArticle[0].style.opacity = (this.scrollY-450)/150;
	}
});

let texteArticle = document.getElementsByClassName('texte1');

window.addEventListener('scroll', function() {
	if (this.scrollY > 200 && this.scrollY < 600) {
		titreArticle[0].style.marginTop = 800-this.scrollY+'px';
	}
	if (this.scrollY > 450 && this.scrollY < 600) {
		titreArticle[0].style.opacity = (this.scrollY-450)/150;
	}
});

