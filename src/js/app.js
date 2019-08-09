

$('.js_nav-toggle').on('click', function(){
  $('.js_nav-toggle').toggleClass('active');
  $('.nav-menu').slideToggle();
  $('body').toggleClass('shadow');
})
$('.main_gallery').slick({
  dots: false,
  });
  $('.products-list').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.catalog_content-bottom--btn-open').click(function() {
    $('.read-more-wrap').css("max-height", "999px",);
    $('.catalog_content-bottom--btn-open').hide();
    $('.catalog_content-bottom--btn-close').show();
  });

  $('.catalog_content-bottom--btn-close').click(function() {
    $('.read-more-wrap').css("max-height", "60px");
    $('.catalog_content-bottom--btn-open').show();
    $('.catalog_content-bottom--btn-close').hide();
  });
  $('.sizeTable-link').click(
    function(){
        $('.sizeTable-img').slideToggle(500);
    });
    
    $('.slider-box__slick').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
   
  $(document).ready(function() {
    $(".reviews-main__btn-click").click(function() {
        var $this = $(this);
        $(".reviews-main__comment-area").slideToggle(500);

        $this.toggleClass("expanded");

        if ($this.hasClass("expanded")) {
            $this.html("Скрыть отзыв");
        } else {
            $this.html("Оставить отзыв");
        }
    });
});
$(function(){

  $('.sli-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sli-bottom'
  });
  $('.sli-bottom').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.sli-top',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

});
