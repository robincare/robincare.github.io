$(function() {
    var values = [5000, 10000, 20000, 50000, 100000];
    var slider = $("#progress-bar").slider({
        value: 50000,
        range: "min",
        min: 0,
        max: 100000,
        slide: function(event, ui) {
            var includeLeft = event.keyCode != $.ui.keyCode.RIGHT;
            var includeRight = event.keyCode != $.ui.keyCode.LEFT;
            slider.slider('option', 'value', findNearest(includeLeft, includeRight, ui.value));
            return false;
        },
        change: function(event, ui) {
          $("#swatch").text(ui.value);
        }
    });
    function findNearest(includeLeft, includeRight, value) {
        var nearest = null;
        var diff = null;
        for (var i = 0; i < values.length; i++) {
            if ((includeLeft && values[i] <= value) || (includeRight && values[i] >= value)) {
                var newDiff = Math.abs(value - values[i]);
                if (diff == null || newDiff < diff) {
                    nearest = values[i];
                    diff = newDiff;
                }
            }
        }
        return nearest;
    }
});

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination',
    effect: 'fade',
    autoplay: 3000,
    paginationClickable: true,
  });
});