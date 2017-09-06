$(document).ready(function() {
					setInterval(function() {
				  	if ($(window).scrollTop() > 1){
				    	$('.navbar-default').addClass('sticky');
				  	}
				  	else{
				    	$('.navbar-default').removeClass('sticky');
				  	}
						});
				});
