$(document).ready(function() {
	$('.brand-region').append('<div class="brand">Awladuna.org</brand>');
	$('.brand').click(function(e){
		e.preventDefault()
		$(location).attr('href','http://www.awladuna.org');
	});
});
