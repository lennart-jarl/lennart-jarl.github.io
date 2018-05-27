document.addEventListener("DOMContentLoaded", function(event) { 

	$('.smooth-goto').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 800);
		return false;
	});

});