var largeImageArray = ["img/large/large_3.jpg", "img/large/large_10.jpg", "img/large/large_12.jpg", "img/large/large_16.jpg", "img/large/large_17.jpg", "img/large/large_18.jpg", "img/large/large_19.jpg"];
var mainImageContainer = $(".main-image-container");

$(".photoContainer").click(function(){
	console.log($(this).children('p').text());
});

//div.animate({width:'300px',visibility: "visible"},"slow");
//div.animate({height:'100px',visibility:"visible"},"slow");
//div.animate({width:'100px',visibility: "visible"},"slow");



function showLargeImage(whichImage){
	displayMainImageContainer();
	addMainImage();
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
















