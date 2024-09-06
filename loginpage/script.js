const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})

document.addEventListener("DOMContentLoaded", function() {
	const text1 = document.getElementById("text1");
	const text2 = document.getElementById("text2");
	
	let currentText = text1;
	
	// Initial animation
	currentText.style.opacity = 1;
	
	setInterval(function() {
		currentText.style.opacity = 0;
		
		// Toggle between text1 and text2
		if (currentText === text1) {
			currentText = text2;
		} else {
			currentText = text1;
		}
		
		currentText.style.opacity = 1;
	}, 3000); // Change text every 3 seconds
});