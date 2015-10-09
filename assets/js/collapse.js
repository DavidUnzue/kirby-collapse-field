(function ($) {
    $(document).ready(function() {

        if (app && typeof app == 'object') {
            $(app.main).on('view:load', function () {

				$('.collapse').each(function(){
					$(this).nextUntil(".collapse").andSelf().wrapAll('<div class="collapse-wrapper" />');
				});
				$('.collapse-wrapper .collapse').each(function(){
					$(this).nextUntil(".collapse").wrapAll('<div class="collapse-wrapper-panel" />');
				});

				var allPanels = $('.collapse-wrapper > .collapse-wrapper-panel').hide();
				var allTitles = $('.collapse-wrapper > .collapse > h2');


				$('.collapse-wrapper > .collapse > h2').click(function() {
					$this = $(this);
					$target =  $this.parent().next();

					if($target.hasClass('active')){
					 	$('h2.active').removeClass('active');
						$target.removeClass('active').slideUp();
					} else {
					 	allPanels.removeClass('active').slideUp();
					 	allTitles.removeClass('active');
						$this.addClass('active');
						$target.addClass('active').slideDown();
					}
				}).first().addClass('active').parent().next().addClass('active').slideDown(0);


            });
        }

    });
} (jQuery));
