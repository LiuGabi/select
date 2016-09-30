$.fn.uiSelect = function(options) {

    var parent = $(this);

    var opts = $.extend({}, $.fn.uiSelect.defaults, options);

    var click = function(toggle, dropdown) {

        parent.children(toggle).click(function(e) {

            $(this).siblings(dropdown).show(function() {

                selectSort($(this));

                // console.log(this);

            });

        });

    }

    var selectSort = function(dropdown) {

        dropdown.children().click(function() {

            $(this).text();

            var dataValue = $(this).attr("data-value");
            
            dropdown.siblings(opts.toggle).children().text($(this).text());
            dropdown.siblings(opts.toggle).children().attr("data-value", dataValue);

        });

        opts.callback();

    }

    // var handleCallback = function(opts.callBackSelect) {

    //     if (typeof opts.callBackSelect === "function") {

                        
    //     }

    // }

    click(opts.toggle, opts.dropdown);

};

$.fn.uiSelect.defaults = {
    toggle: '.dropdown-toggle',
    dropdown: '.dropdown-list',
    callBackSelect: function() {}
};