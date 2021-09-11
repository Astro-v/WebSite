const screenH = screen.height;

let head = document.getElementsByClassName('head');

head[0].style.height = screenH.toString()+'px';

let article = document.getElementsByClassName('article');

article[0].style.height = (screenH-210).toString()+'px';

let text = document.getElementsByClassName('texte1');

text[0].style.marginTop = screenH+'px';

let foot = document.getElementsByClassName('foot');

foot[0].style.height = (screenH-210).toString()+'px';