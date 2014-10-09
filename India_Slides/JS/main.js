var images = ["img/India_1.jpg", "img/India_2.jpg", "img/India_3.jpg", "img/India_4.jpg","img/India_5.jpg"];
var currentImage = 0;

function changePicture(photoIndex) {
	var mainImage = document.getElementById("mainPhoto");
	mainImage.setAttribute("src", images[photoIndex])

}

function next(forward) {
	var nextImage = document.getElementById("next");
	nextImage.setAttribute("src", images[currentImage])

}

function previous() {
	var previousImage = document.getElementById("back");
}

  