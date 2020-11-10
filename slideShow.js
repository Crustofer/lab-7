var idx = 0;
SlideColegi();

function SlideColegi(){
	var i;
	var slides = document.getElementsByClassName("slides");
	
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	idx++
	if(idx > slides.length) {idx = 1}

	slides[idx-1].style.display = "block"

	setTimeout(SlideColegi, 3000);
}