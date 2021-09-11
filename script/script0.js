const screenH = screen.height;

let head = document.getElementsByClassName('head');

head[0].style.height = screenH.toString()+'px';

let article = document.getElementsByClassName('article');

article[0].style.height = (2*screenH).toString()+'px';
