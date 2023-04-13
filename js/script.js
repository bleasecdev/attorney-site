$(window).scroll(function() {
    $(".services-container img").each(function() {
      var position = $(this).offset().top;
      var windowTop = $(window).scrollTop() + $(window).height() * 0.8;
      if (position < windowTop) {
        $(this).addClass("active");
      }
    });
  });
  