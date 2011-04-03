/**
 * jquery.rainbow.js
 * 
 * Converts text into a rainbow of colours.
 * 
 * (c) 2010 Leftclick.com.au
 * Licensed under the GNU General Public License (GPL).
 * Commercial licenses also available.
 */

;(function($) {
	var defaults = {
		'element': 'span',
		'css': [ 'color' ],
		'saturation': 1.0,
		'value': 1.0
	};

	$.fn.rainbow = function(options) {
		var settings = $.extend(true, {}, defaults, options);
		return $(this).each(function() {
			var text = $(this).text();
			$(this).empty();
			var c = settings.saturation * settings.value;
			var m = settings.value - settings.saturation;
			for (var i=0, h=0.0, len=text.length, dh=6.0/len; i<len; i++, h+=dh) {
				var x = c * (1.0 - Math.abs(Math.floor(h) % 2 + h - Math.floor(h) - 1.0));
				var r = ((h < 1.0) || (h >= 5.0)) ? c : (((h >= 2.0) && (h < 4.0)) ? 0.0 : x);
				var g = ((h >= 1.0) && (h < 3.0)) ? c : ((h >= 4.0) ? 0.0 : x);
				var b = ((h >= 3.0) && (h < 5.0)) ? c : ((h < 2.0) ? 0.0 : x);
				var rgb = 'rgb(' + Math.floor((r + m) * 255) + ',' + Math.floor((g + m) * 255) + ',' + Math.floor((b + m) * 255) + ')';
				var $elem = $('<' + settings.element + ' />').text(text[i]);
				$.each(settings.css, function(i, prop) {
					$elem.css(prop, rgb);
				});
				$('#slogan').append($elem);
			}
		});
	};

})(jQuery);
