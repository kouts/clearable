/*
Copyright 2014 Giannis Koutsaftakis - info@webrunapps.com
http://www.webrunapps.com

Version: 1.0.0 Timestamp: Wed Jan 15 15:45:44 EET 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.
*/
<<<<<<< HEAD
//Comment added
=======
/* comment added by papas*/
>>>>>>> origin/master

(function($) {
	"use strict";
	
	$.fn.clearable = function(options){

		options = $.extend($.fn.clearable.defaults, options);

		$(document).on('keyup paste', this.selector, function(){
			var $wrapper = $(this).parents('div.'+options.wrapper_class).first();
			if($wrapper.length === 0){
				$(this).wrap('<div class="'+options.wrapper_class+'"/>').focus();
			}
			$wrapper.css('position', 'relative');
			var icon = $(options.icon).addClass(options.icon_class+' '+options.icon_close_class).css({
				'position':'absolute',
				'right':options['adjust_right'],
				'top':options['adjust_top'],
				'cursor':'pointer',
				'display':'none',
				'z-index':'1000'
			});
			var next_icon = $(this).nextAll('.'+options.icon_close_class).first();
			if($(this).val()==''){
				next_icon.hide();
			}else{
				if(next_icon.length){
					next_icon.fadeIn(200);
				}else{
					$(this).after(icon).fadeIn(200);
					$(this).nextAll('.'+options.icon_close_class).first().fadeIn(200);
				}
			}
		}).off('click').on('click', '.'+options.icon_close_class, function(){
			var $input = $(this).prevAll('input:first');
			$input.val('').focus();
			$(this).hide();
			options.onClose($input, this);
		});
	};

	$.fn.clearable.defaults = {
		onClose: function(){},
		wrapper_class: 'clearable-wrapper',
		icon: '<span/>',
		icon_class: 'glyphicon glyphicon-remove',
		icon_close_class: 'clearable-close',
		adjust_right: '2px',
		adjust_top: '2px'
	};

})(jQuery);
