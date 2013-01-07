$(document).ready(function() {
	$('.brand').click(function(e){
		e.preventDefault()
		$(location).attr('href','http://obadakadri.com');
	});
	$('.brand').html('obadakadri.com');
});
