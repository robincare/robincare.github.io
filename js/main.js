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
          var cost = "68M"
          var savings = "11.9M"
          var swatch = "50,000"
          switch (ui.value) {
            case 0:
              cost = "0M"
              savings = "0M"
              swatch = "0"
            break;
            case 5000:
              cost = "6.8M"
              savings = "1.19M"
              swatch = "5,000"
            break;
            case 10000:
              cost = "12.6M"
              savings = "2.38M"
              swatch = "10,000"
            break;
            case 20000:
              cost = "27.2M"
              savings = "4.76M"
              swatch = "20,000"
            break;
            case 50000:
              cost = "68M"
              savings = "11.9M"
              swatch = "50,000"
            break;
            case 100000:
              cost = "136M"
              savings = "23.8M"
              swatch = "100,000"
            break;
          }
          $("#cost-num-icon").text(cost);
          $("#savings-num-icon").text(savings);
          $("#swatch").text(swatch);
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
  if(window.location.hash == "#form-complete") {
    $('.form-submit-msg-container').slideDown();
    setTimeout(function(){
      $('.form-submit-msg-container').slideUp();
    }, 5000);
  }

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

  $('.logo-container').on('click', function(){
    window.location.href = "/";
  });

  $("#checkbox").change(function() {
      if(this.checked) {
        $("#checkbox").val(true);
      } else {
        $("#checkbox").val(false);
      }
  })

  //Overriding default jquery email validator to catch tld
  $.validator.addMethod(
      'email',
      function(value, element){
          return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(value);
  },
      'Please enter a valid email address.'
  );

  $("#contact-form").validate({
    rules: {
      Name: "required",
      Email: "required email",
      Message: "required"
        },
    messages: {
      Name: "Enter your Full Name",
      Email: {
        required: "Enter your Email",
        email: "Please enter a valid email address."
      },
      Message: "Please enter a message"
    }
  });
});