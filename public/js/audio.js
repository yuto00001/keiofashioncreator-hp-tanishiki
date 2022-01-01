var audioBtn = $('.audio_button'),
movieStert = $('.iframe_top'),
audioWrap = $('.audio_wrap'),
audio = document.getElementById('audio');

$(function () {
  audioBtn.on('click', function () {
    if( audioWrap.hasClass('play') ) {
      audio.pause();
      audioWrap.removeClass('play');
    } else {
      audio.play();
      audioWrap.addClass('play');
    }
  });
});
$(function () {
  movieStert.on('click', function () {
    if( audioWrap.hasClass('play') ) {
      audio.pause();
      audioWrap.removeClass('play');
    }
  });
});

// audio = document.getElementById('audio');

// function enableMute() {
//   audio.muted = false;
// }
// function disableMute() {
//   audio.muted = true;
// }
$(function(){
  $('#Audio-Control button').click(function(){
    $('#Audio-Control button').toggleClass('active');
  });
});
