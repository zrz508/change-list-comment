$(document).ready(function () {
	function addComment() {
		let name = $('.js-comments__name-input').val();
		let text = $('.js-comments__label-textarea').val();

		if (name.length !== 0 && text.length !== 0) {
			$('.js-comments__name-input').removeClass('error');
			$('.js-comments__label-textarea').removeClass('error');

			$('.js-comments__none').hide();

			$('.js-comments__list').append(`
			<li class="js-item">
    		<article>
            <header class="header-article">
            <h2 class="comments__author ">${name}</h2>
            <button type="button" class="comments__delete js-comments__delete">x</button>
            <button type="button" class="slide-down js-slide-down"></button>
            </header>

            <p class="comments__text js-comments__text">
            ${text}
            </p>
        </article>	
		</li> 
			
			`);
			name = $('.js-comments__name-input').val('');
			text = $('.js-comments__label-textarea').val('');
		} else {
			name = $('.js-comments__name-input').addClass('error');
			text = $('.js-comments__label-textarea').addClass('error');
		}



		function deleteComment(item) {
			item.remove();
		}


		$('body').on('click', '.js-comments__delete', function (event) {
			event.preventDefault();
			let item = $(this).parents('.js-item');

			deleteComment(item);
		})

		function slide(slideDownLeft) {
			slideDownLeft.slideToggle();
		}
		$('.slide-down').on('click', function () {
			$('.header-article').find('.slide-down').toggleClass('comments__left');
			$('.comments__text').fadeToggle();
		})
	}
	$('.js-comments__form-button').on('click', addComment);
})