$(function () {
  // モーダルのボタンをクリックした時
  $(".modal_btn_topNews").on("click", function () {
    var btnIndex_topNews = $(this).index(); // 何番目のモーダルボタンかを取得
    $(".modal_area .box_topNews").eq(btnIndex_topNews).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });

  // ×やモーダルの背景をクリックした時
  $(".modal_close , .modal_bg").click(function () {
    $(".modal_box").fadeOut(); // モーダルを非表示にする
  });
});
