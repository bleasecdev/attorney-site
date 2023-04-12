$(window).scroll(function() {
    $('.scroll-slide-left').each(function() {
      var slideLeftPos = $(this).offset().left + $(this).outerWidth();
      var windowPos = $(window).scrollLeft() + $(window).width();
      if (windowPos > slideLeftPos) {
        $(this).addClass('slide-in-left');
      }
    });
    $('.scroll-slide-right').each(function() {
      var slideRightPos = $(this).offset().left;
      var windowPos = $(window).scrollLeft();
      if (windowPos < slideRightPos) {
        $(this).addClass('slide-in-right');
      }
    });
  });
  