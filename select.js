$.fn.uiSelect = function(options) {

    var opts = $.extend({}, $.fn.uiSelect.defaults, options);

    var parent = $(this);

    var toggle = parent.children(opts.toggle);

    var dropdown = parent.children(opts.dropdown);

    var init = function() {

        toggle.on('click touchstart', function(e) {

            dropdown.toggle();

            e.preventDefault();

        });

        // $('body').click(function(e) {

        //     console.log(e);

        //     if($(e.target).hasClass('dropdown')) {
        //         return;
        //     }

        //     dropdown.hide();

        // });

        $('body').not($('.dropdown')).on('click touchstart', function(e) {

            console.log(this);
            console.log(opts.dropdown);

            dropdown.hide();
            e.preventDefault();

        });

    }

    dropdown.children().click(function() {

        var dataValue = $(this).attr("data-value");
        
        toggle.children().text($(this).text());
        toggle.children().attr("data-value", dataValue);

        if (typeof(opts.callback) == "function") {

            opts.callback.call(this, dataValue);

        }

    });


    init();

};

$.fn.uiSelect.defaults = {
    toggle: '.dropdown-toggle',
    dropdown: '.dropdown-list',
    callback: function() {}
};