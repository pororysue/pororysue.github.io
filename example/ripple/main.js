$(".col").on("click", function (e) {
    var x = e.pageX;
    var y = e.pageY;
    var clickY = y - $(this).offset().top;
    var clickX = x - $(this).offset().left;
    var box = this;
    var setX = parseInt(clickX);
    var setY = parseInt(clickY);
    $(this).find("svg").remove();
    $(this).append('<svg><circle cx="' + setX + '" cy="' + setY + '" r="' + 0 + '"></circle></svg>');

    var c = $(box).find("circle");
    c.animate(
        {
            "r": $(box).outerWidth()
        },
        {
            easing: "easeOutQuad",
            duration: 500,
            complete: function () {
                $(this).fadeOut(500, function () {
                    $(this).remove();
                });
            },
            step: function (val) {
                c.attr("r", val);
            }
        }
    );
});
