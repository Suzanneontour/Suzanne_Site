var images = ["img/India_1.jpg", "img/India_2.jpg", "img/India_3.jpg", "img/India_4.jpg","img/India_5.jpg"];
var currentImage = 0;

function changePicture(photoIndex) {
	var mainImage = document.getElementById("mainPhoto");
    // We should keep track of the current image for our next() and previous() functions
    currentImage = photoIndex;
	mainImage.setAttribute("src", images[photoIndex])
}

// We don't need to pass a parameter into next. I'm going to implement the next image. You should be able to do the same thing for the previous image. Please let me know if you have trouble doing it.
function next() {
	//var nextImage = document.getElementById("next");
	//nextImage.setAttribute("src", images[currentImage])

    // We're changing the same mainPhoto, so we need to get that. You were getting the 'next' arrow.    
    currentImage+=1; // Let's increment the index by one
    alert(currentImage);
    if (currentImage == images.length) { // Let's check if we're on the last image
        currentImage = 0; // Let's go to the first image if we're on the last image
    }
	var mainImage = document.getElementById("mainPhoto");
	mainImage.setAttribute("src", images[currentImage]);
}

function previous() {
	var previousImage = document.getElementById("back");
}

  
