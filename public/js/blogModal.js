// 作業メモ：JSの操作は年度毎に分割して行われている。新しい年度を作るときは、以下で繰り返されている記述をコピペして、クラス名を年度に合わせる。

$(function () {
  // モーダルのボタンをクリックした時
  $(".modal_btn22").on("click", function () {
    var btnIndex22 = $(this).index(); // 何番目のモーダルボタンかを取得
    $(".modal_area .box22").eq(btnIndex22).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });
  $(".modal_btn21").on("click", function () {
    var btnIndex21 = $(this).index(); // 何番目のモーダルボタンかを取得
    $(".modal_area .box21").eq(btnIndex21).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });
  $(".modal_btn20").on("click", function () {
    var btnIndex20 = $(this).index(); // 何番目のモーダルボタンかを取得
    $(".modal_area .box20").eq(btnIndex20).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });
  $(".modal_btn19").on("click", function () {
    var btnIndex19 = $(this).index(); // 何番目のモーダルボタンかを取得
    $(".modal_area .box19").eq(btnIndex19).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });
  $(".modal_btn18").on("click", function () {
    var btnIndex18 = $(this).index(); // 何番目のモーダルボタンかを取得
    $(".modal_area .box18").eq(btnIndex18).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });

  // ×やモーダルの背景をクリックした時
  $(".modal_close , .modal_bg").click(function () {
    $(".modal_box").fadeOut(); // モーダルを非表示にする
  });
  $(".modal_bg").click(function () {
    $(".movie-wrap_topmovie").fadeOut(); //動画を再生停止にする
  });
  $(".kfcLogo .kfc_footer_logo").click(function () {
    $(".modal_box_top").fadeIn(); // モーダルを表示する
  });

  (function(){
    var CloseTrigger = function(el){
    var $video = $('.video-stream');
    $(el).on('click', function() {
    videoControl("pauseVideo");
    });
    function videoControl(action){
    var $playerWindow = $('#popup-YouTube-player')[0].contentWindow;
    $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
    };
    var closeBtnClick = new CloseTrigger('.modal_bg');
    })();
});
