var largeImageArray = ["img/large_3.jpg", "img/large_10.jpg", "img/large_12.jpg", "img/large_16.jpg", "img/large_17.jpg", "img/large_18.jpg", "img/large_19.jpg"];
var isopen = false;

$(".photoContainer").click(function(){
	var self = $(this);
	toggleLightBox();
	addTextToMain(self);
	addImageToMain(self);
});


function addTextToMain(clickedElement){
	var clickedImageText = clickedElement.children('p').text();
	var mainParagraph = $('.main-image-container .main-text p');
	mainParagraph.text(clickedImageText);
}

function addImageToMain(clickedElement){
	var largeImagePath = clickedElement.attr("large-image-path");
	var mainImage = $('.main-image-container .main-image-wrapper img');
	mainImage.attr('src', largeImagePath);
}








function showLargeImage(photo){
	$('.large').css('src', photo)
}

function toggleLightBox(photo) {
	if(isopen){
		$(".main-image-container").css('visibility', 'hidden');
	} else {		
		$(".main-image-container").css('visibility', 'visible');
		showLargeImage(photo)
	} 
	isopen = !isopen;
}

function displayMainImageContainer(){
	 mainImageContainer.animate({height:'500px', width: '500px', opacity: 1},"slow");
}




/*	$('main-image-container').click(function() {
	$('main-image-container').css('visibility, visible');
	});
}*/

/*var images = ["img/________.jpg", "img/________.jpg", "img/_______.jpg", "img/_______.jpg","img/_______.jpg"];
var currentImage = 0;

document getElementById('id_of_image_in_slider').onclick = function() {
function enlarge() {
	document.getElementByClassName(main-image-container) {
		
	}
}




    
    var mainImageText = $('.photoContainer p').text();

	var myelement = $('.main-image-container p').text(mainImageText);

	console.log(myelement);

$('main-image-container').click(function() {
$('main-image-container').css('visibility, visible');
}
*/
/*
$(".main-image-container").click(function() {
		$(".main-image-container").animate({
			width: '+=40px'
		}, 1000);
	});*/
















