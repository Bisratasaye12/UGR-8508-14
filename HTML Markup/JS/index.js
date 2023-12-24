


var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n, slides_id) {
showSlides(slideIndex += n, slides_id);
}



function showSlides(n, slides_id) {
var i;
var slides = document.getElementsByClassName(slides_id);

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slides[slideIndex-1].style.display = "flex";


}


