// Every jQuery plugin goes here
(function($) {
    'use strict';

    // jQuery draggable plugin
    $.fn.drags = function(options) {

        options = $.extend({
            activeClass : 'draggable',
            handleClass : 'active-handle',
            handle      : null,
            cursor      :'move',
            svg         : false,
            zIndex      : 1000,
            ondragstart : function(){},
            ondrag      : function(){},
            ondragstop  : function(){},
        }, options);



        return this.each(function(){
            var $drag = options.handle == null ? $(this) : options.handle;

            // if 'this' is SVG element set svg option to true
            if (this.ownerSVGElement != null) {
                options.svg = true;
            }

            $(this).css('cursor', options.cursor).on('mousedown touchstart', function(e) {
                var drg_h = $drag.outerHeight(),
                    drg_w = $drag.outerWidth(),
                    pos_y = $drag.offset().top + drg_h - (e.pageY || e.originalEvent.changedTouches[0].pageY),
                    pos_x = $drag.offset().left + drg_w - (e.pageX || e.originalEvent.changedTouches[0].pageX),
                    // svg stuff
                    currentX = e.clientX || e.originalEvent.changedTouches[0].clientX,
                    currentY = e.clientY || e.originalEvent.changedTouches[0].clientY,
                    currentMatrix = ($(this).attr('transform') || 'matrix(1 0 0 1 0 0)').slice(7,-1).split(' ');

                for (var i = 0, n = currentMatrix.length; i < n; i++) {
                    currentMatrix[i] = +currentMatrix[i];
                }

                $drag.
                    addClass(options.activeClass).
                    css('z-index', options.zIndex).
                    parents().
                    on('mousemove touchmove', function(e) {
                        var x, y;

                        if (options.svg) {
                            x = e.clientX || e.originalEvent.changedTouches[0].clientX;
                            y = e.clientY || e.originalEvent.changedTouches[0].clientY;

                            currentMatrix[4] += x - currentX;
                            currentMatrix[5] += y - currentY;

                            currentX = x;
                            currentY = y;

                            $drag.attr('transform', 'matrix(' + currentMatrix.join(' ') + ')');
                        } else {
                            x = (e.pageX || e.originalEvent.changedTouches[0].pageX) + pos_x - drg_w;
                            y = (e.pageY || e.originalEvent.changedTouches[0].pageY) + pos_y - drg_h;

                            $drag.offset({ top : y, left : x });
                        }

                        options.ondrag.call(this, e);
                    });

                e.preventDefault(); // disable selection

                options.ondragstart.call(this, e);

            }).on('mouseup touchend', function(e) {
                $(this).parents().off('mousemove touchmove');

                $drag.removeClass(options.activeClass);

                options.ondragstop.call(this, e);
            });
        });
    };




})($ || jQuery);
