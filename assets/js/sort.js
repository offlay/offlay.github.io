$(document).ready(function() {
				$('.menu li a').click(function() {
					$('.menu li').removeClass('selected');
					$(this).parent('li').addClass('selected');
				});
				$('li').on('click', function(){
  					if (this.id == "all") {
							$('.gallery').fadeIn("slow");
						}	else if (this.id == "web") {
							$('.gallery').hide();
							$('.web').fadeIn("slow");
						} else if (this.id == "graphic") {
							$('.gallery').hide();
							$('.graphic').fadeIn("slow");
						} else if (this.id == "aidentic") {
							$('.gallery').hide();
							$('.aidentic').fadeIn("slow");
						}
				});

});
