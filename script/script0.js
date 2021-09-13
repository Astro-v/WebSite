const screenH = window.innerHeight;

let titreArticle = document.getElementsByClassName('titreArticle');
let texteArticle = document.getElementsByClassName('texteArticle');
let backTest = document.getElementsByClassName('backTest');
let head = document.getElementsByClassName('head');
let article = document.getElementsByClassName('article');
let foot = document.getElementsByClassName('foot');

head[0].style.height = screenH.toString()+'px';
for (let i = 0; i < backTest.length; ++i) {
	backTest[i].style.height = (screenH-80).toString()+'px';
	backTest[i].style.marginTop = '0px';
}

for (let i = 0; i < article.length; ++i) {
	article[i].style.height = (2*(screenH-80)).toString()+'px';
}

for (let i = 0; i < texteArticle.length; ++i) {
	texteArticle[i].style.marginTop = '0px';
}



foot[0].style.height = (screenH-80).toString()+'px';
