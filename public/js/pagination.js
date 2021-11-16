$(function () {
  var $items = $(".modal_btn20");
  console.log($items.length);

  var num = Math.ceil($items.length / 4);
  console.log(num);

  // ページネーション作成
  var $pn = $(".blogButton");
  for (var i = 1, l = num; i <= l; i++) {
    var li = "<li><a>" + i + "</a></li>";
    $pn.append(li);
  }

  // 5. 各記事のリンクが何ページ目の記事か区別出来るようにする
  for (var i = 0, l = $items.length; i < l; i++) {
    var page = Math.ceil((i + 1) / 4);
    $items.eq(i).addClass("page-" + page);
  }

  // 9. ボタンをクリックすると記事一覧の上部にスクロールして戻る
  var firstClick = false;

  // 4. 上で作成したボタンにクリックイベントを登録する
  $(".blogButton li").on("click", function () {
    console.log("clicked");
    // 9. ボタンをクリックすると記事一覧の上部にスクロールして戻る
    firstClick = true;
    // 7. 開いているページのボタンの見た目を変える
    $(".blogButton li.active").removeClass("active");
    $(this).addClass("active");
    // 6. ボタンをクリックするとそのページの記事リンクのみが表示されるようにする
    var page = $(".blogButton li").index(this);
    page += 1;
    $items.removeClass("active");
    $(".blog")
      .find(".page-" + page)
      .addClass("active");
    // 9. ボタンをクリックすると記事一覧の上部にスクロールして戻る
    if (firstClick === true) {
      // $(window).scrollTop(3421.5625);
    }
  });

  // 8. ページを開いた時に１ページ目の記事リンクのみ表示されるようにする
  $(".blogButton li:first-child").click();
});
