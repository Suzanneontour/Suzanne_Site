$( document ).ready(function() {
	hoverEffect();
});

function hoverEffect(){
	$( ".photoContainer" ).hover(
		function() {
			$( ".caption" ).show();
		}, function() {
			$( ".caption" ).hide();
		}
		);
}