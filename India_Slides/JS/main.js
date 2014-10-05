var images = ["img/India_1.jpg", "img/India_2.jpg", "img/India_3.jpg", "img/India_4.jpg","img/India_5.jpg"];
var currentImage = 0;

function changePicture(photoIndex) {
	document.getElementById("mainPhoto").setAttribute("src", images[0], images[1], images[2], images[3], images[4], images[5])

}

function next(photoStrip) {
	document.getElementById("next").setAttribute("src", images[1], images[2], images[3], images[4], images[5])

}

function previous() {

}

  