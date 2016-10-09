$.fn.uiSelect = function(options) {

    var opts = $.extend({}, $.fn.uiSelect.defaults, options);

    var parent = $(this);

    var toggle = parent.children(opts.toggle);

    var dropdown = parent.children(opts.dropdown);

    var init = function() {

        toggle.click(function() {

            $(this).siblings(opts.dropdown).show();

        });

        dropdown.mouseleave(function() {

            $(this).hide();

        });

    }

    dropdown.children().click(function() {

        var dataValue = $(this).attr("data-value");
        
        toggle.children().text($(this).text());
        toggle.children().attr("data-value", dataValue);

        opts.callback.call(this, dataValue);

    });


    init();

};

$.fn.uiSelect.defaults = {
    toggle: '.dropdown-toggle',
    dropdown: '.dropdown-list',
    callback: function() {}
};