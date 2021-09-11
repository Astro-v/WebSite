let nav = document.getElementsByClassName('nav');

window.addEventListener('scroll', function() {
	if (this.scrollY < 200) {
		nav[0].style.backgroundColor = 'rgba(20,20,20,0)';
	} else {
		nav[0].style.backgroundColor = 'rgba(20,20,20,1)';
	}
});