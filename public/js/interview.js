$(function () {
  // モーダルのボタンをクリックした時
  $(".modal_btn_2021total_interview_21").on("click", function () {
    var btnIndex_2021total_interview_21 = $(this).index(); // 何番目のモーダルボタンかを取得
    $(".modal_area .box_2021total_interview_21").eq(btnIndex_2021total_interview_21).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });
  $(".modal_btn_look_interview_21").on("click", function () {
    var btnIndex_look_interview_21 = $(this).index(); // 何番目のモーダルボタンかを取得
    $(".modal_area .box_look_interview_21").eq(btnIndex_look_interview_21).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });
  $(".modal_btn_interview_20").on("click", function () {
    var btnIndex_interview_20 = $(this).index(); // 何番目のモーダルボタンかを取得
    $(".modal_area .box_interview_20").eq(btnIndex_interview_20).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });

  // ×やモーダルの背景をクリックした時
  $(".modal_close , .modal_bg").click(function () {
    $(".modal_box").fadeOut(); // モーダルを非表示にする
  });
});
