let titreArticle = document.getElementsByClassName('titreArticle1');
let texteArticle = document.getElementsByClassName('texte1');

window.addEventListener('scroll', function() {
	if (this.scrollY > 300 && this.scrollY < 800) {
		titreArticle[0].style.marginTop = (825-this.scrollY).toString()+'px';
	}
	if (this.scrollY > 450 && this.scrollY < 600) {
		titreArticle[0].style.opacity = ((this.scrollY-450)/150).toString();
	}
	if (this.scrollY > 500 && this.scrollY < 900) {
		texteArticle[0].style.marginTop = (925-this.scrollY).toString()+'px';
	}
	if (this.scrollY > 750 && this.scrollY < 900) {
		texteArticle[0].style.opacity = (this.scrollY-750)/150;
	}
});

