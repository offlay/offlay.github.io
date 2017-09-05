
$(document).ready(function() {
								setInterval(function() {
										window.scrollTo(0, 400);
										$('navbar-default ').css('background-color', 'white');
								}, 2000);
								setInterval(function() {
										window.scrollTo(0, 0);
										$('navbar-default ').css('background-color', 'transparent');
								}, 4000);
				}
