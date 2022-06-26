'use strict';

{
  const targets = document.querySelectorAll('.animation_intersection');

  // こちらの処理が実行されるタイミングですが、監視が始まったときと、デフォルトだと target が root に 0% 交差したときに実行されます。
  // この entries は複数の要素をもつ配列で、監視開始時点ではすべての target が、そして target が交差したときは、交差した target だけが要素として入ってくる
  function callback(entries, obs) {
    console.log(entries[0]);

  // では、交差した要素を entry として、次の処理をしてねと書いていきましょう。
  // isIntersectingはターゲット要素が交差している場合に True になります。つまり下記の場合、「true だったら appear クラスを付け、交差が終わるときは早期returnをしてアニメーションをしないようにする」となる。
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      // entry = rootと交差したtarget に対してクラスを付与する
      entry.target.classList.add('appear');
      // targetの監視を最初だけ行う。２回目以降は監視を止めたい。 = unobserve
      obs.unobserve(entry.target);
    });
  }

  // targetが交差するタイミングを指定した変数。
  const options = {
    threshold: 1,
    rootMargin: '0px 0px -100px',
  };

  // IntersectionObserver クラスはあらかじめブラウザが用意してくれているクラス
  // オブジェクトと表示領域の 重なりを監視するために必要なデータや処理をまとめたクラス
  // 条件に当てはまれば callback に指定した処理を実行
  const observer = new IntersectionObserver(callback, options);

  // observerによってtarget(img)を監視対象とする
  targets.forEach(target => {
    observer.observe(target);
  });
}
