$(document).ready(function() {
	$('.contact').click(function(e){
		e.preventDefault()
		$(location).attr('href','mailto:okadri@live.com?body=' + encodeURIComponent("\n\n\n ~ Sent from ObadaKadri.com "));
	});
	$('.sidebar-nav').scrollspy()
});
