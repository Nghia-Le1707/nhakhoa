$('.banner-section1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  });
  $('.container-section4').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });
  $('.section3-bs').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
  $('.gap-s7').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
          centerMode: true,
          dots: false,
        }
      }
    ]
  });
  $('.partner-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });
  $('.slide-bot-content').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
  });
  $('.slide-top-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
  });
  var video = document.getElementById('video-ytb');
  var imghiden = document.getElementById('right-banner-section3');
  

document.getElementById('btn-menu').onclick = function(){
  document.getElementById('list-btn-menu').style.display = 'block';
  document.getElementById('btn-close').style.display = 'block';

}

document.getElementById('btn-close').onclick = function() {
    document.getElementById('btn-close').style.display = 'none';
    document.getElementById('list-btn-menu').style.display = 'none';
}

  

  const videos = document.getElementsByClassName('back-groundvideo');
        const playButtons = document.getElementsByClassName('btn-video-gue');
        const closeButtons = document.getElementsByClassName('close-video-gue');

        // Kiểm tra xem có ít nhất một phần tử với lớp 'back-groundvideo' không
        if (videos.length > 0 && playButtons.length > 0 && closeButtons.length > 0) {
            // Lấy phần tử video đầu tiên từ HTMLCollection
            const video = videos[0];
            const playButton = playButtons[0];
            const closeButton = closeButtons[0];
            playButton.onclick = function() {
                video.style.display = 'block';
            }

            closeButton.onclick = function() {
                video.style.display = 'none';
            };
        }