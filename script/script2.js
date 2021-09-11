let nav = document.getElementsByClassName('nav');

window.addEventListener('scroll', function() {
	if (this.scrollY < 200) {
		nav[0].style.backgroundColor = 'rgba(32,32,32,'+(this.scrollY/200).toString()+')';
	} else {
		nav[0].style.backgroundColor = 'rgba(32,32,32,1)';
	}
});