$(document).ready(function() {
	$('.region-footer').html('<div class="brand">obadakadri.com</brand>');
	$('.brand').click(function(e){
		e.preventDefault()
		$(location).attr('href','http://obadakadri.com');
	});
});
