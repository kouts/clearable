/*
Copyright 2014 Giannis Koutsaftakis

Version: 1.0.0 Timestamp: Wed Jan 15 10:41:33 EET 2014

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

(function($) {
	"use strict";
	
	$.fn.clearable = function(options){

		var opts = $.extend({}, $.fn.clearable.options, options || {});

		$(document).on('keyup', this.selector, function(){
			$(this).parents('div').first().css('position', 'relative');
			var icon = $(opts.icon).addClass(opts.icon_class+' '+opts.icon_close_class).css({
				'position':'absolute',
				'right':opts['adjust_right'],
				'top':opts['adjust_top'],
				'cursor':'pointer',
				'display':'none'
			});
			var next_icon = $(this).nextAll('.'+opts.icon_close_class).first();
			if($(this).val()==''){
				next_icon.hide();
			}else{
				if(next_icon.length){
					next_icon.fadeIn(200);
				}else{
					$(this).after(icon).fadeIn(200);
					$(this).nextAll('.'+opts.icon_close_class).first().fadeIn(200);
				}
			}
		}).on('click', '.'+opts.icon_close_class, function(){
			$(this).prevAll('input:first').val('');
			$(this).hide();
		});
	};

	$.fn.clearable.options = {
		wrapper_class: 'clearable-wrapper',
		icon: '<i/>',
		icon_class: 'glyphicon glyphicon-remove',
		icon_close_class: 'clearable-close',
		adjust_right: '2px',
		adjust_top: '2px'
	};

})(jQuery);