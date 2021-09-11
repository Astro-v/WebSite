let nav = document.getElementsByClassName('nav');

window.addEventListener('scroll', function() {
	if (this.scrollY < 200) {
		nav[0].style.backgroundColor = 'rgba(221, 221, 221,'+(this.scrollY/200).toString()+')';
	} else {
		nav[0].style.backgroundColor = 'rgba(221, 221, 221,1)';
	}
});