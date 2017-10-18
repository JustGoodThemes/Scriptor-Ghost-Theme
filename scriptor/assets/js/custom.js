/**
 * Main JS file for Scriptor behaviours
 */

/*globals jQuery, document */
(function ($) {
	"use strict";

	$(document).ready(function(){

		// Responsive video embeds
		$(".post-content").fitVids();

		// Scroll to top
		$('#back-to-top').on('click', function(e) {
			$('html, body').animate({'scrollTop': 0});
			e.preventDefault();
		});

	});

}(jQuery));