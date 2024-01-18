let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
	
	$(document).ready(function(){
		$(".menu__toggle").click(function(){
			$(this).toggleClass("active");
			$(".navbtn__menu").toggleClass("active");
		})
	})
	
	
	function scrollApper() {
		let aboutImg = document.querySelector('.about__img');
		let cardPosition = aboutImg.getBoundingClientRect().top;
		let screenPosition = window.innerHeight / 1.5;
					
		if (cardPosition < screenPosition) {
				aboutImg.classList.add('anim-apper');
			} 
				}
			
		window.addEventListener('scroll', scrollApper);
