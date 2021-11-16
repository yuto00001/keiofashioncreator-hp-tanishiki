$(function () {
  // モーダルのボタンをクリックした時
  $('.modal_btn20').on('click', function() {
    var btnIndex20 = $(this).index(); // 何番目のモーダルボタンかを取得
    $('.modal_area .box20').eq(btnIndex20).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });

  $('.modal_btn19').on('click', function() {
    var btnIndex19 = $(this).index(); // 何番目のモーダルボタンかを取得
    $('.modal_area .box19').eq(btnIndex19).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });

  // ×やモーダルの背景をクリックした時
  $('.modal_close , .modal_bg').click(function(){
    $('.modal_box').fadeOut(); // モーダルを非表示にする
  });
});
