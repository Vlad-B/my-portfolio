const backToTopButton = document.querySelector('#back-to-top');

window.addEventListener('scroll', scrollDown);

function scrollDown() {
	const btnClass = backToTopButton.classList;
	const btnStyle = backToTopButton.style;
	const btnEntrance = btnClass.contains('btnEntrance');
	if (window.pageYOffset > 300) {
		if (!btnEntrance) {
			btnClass.remove('btnExit');
			btnClass.add('btnEntrance');
			btnStyle.display = 'block';
		}
	} else {
		if (btnEntrance) {
			btnClass.remove('btnEntrance');
			btnClass.add('btnExit');
			setTimeout(() => {
				btnStyle.display = 'none';
			}, 250);
		}
	}
}

backToTopButton.addEventListener('click', backToTop);

function backToTop() {
	window.scrollTo(0, 0);
}
