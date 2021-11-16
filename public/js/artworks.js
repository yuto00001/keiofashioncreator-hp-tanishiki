"use strict";

p1_art.style.display = "none";
p2.style.display = "none";
p3.style.display = "none";
p4.style.display = "none";
p5.style.display = "none";
p6.style.display = "none";

$(function () {
  $(".1_1").on("click", function () {
    const p1_art = document.getElementById("p1_art");
    if (p1_art.style.display == "none") {
      // blockで表示
    $(p1_art).fadeIn();
      p1_art.style.display = "flex";
    } else {
      // noneで非表示
    $(p1_art).fadeOut();
      p1_art.style.display = "none";
    }
  });
});
$(function () {
  $(".2").on("click", function () {
    const p2 = document.getElementById("p2");
    if (p2.style.display == "none") {
      // blockで表示
    $(p2).fadeIn();
      p2.style.display = "flex";
    } else {
      // noneで非表示
    $(p2).fadeOut();
      p2.style.display = "none";
    }
  });
});
$(function () {
  $(".3").on("click", function () {
    const p3 = document.getElementById("p3");
    if (p3.style.display == "none") {
      // blockで表示
    $(p3).fadeIn();
      p3.style.display = "flex";
    } else {
      // noneで非表示
    $(p3).fadeOut();
      p3.style.display = "none";
    }
  });
});
$(function () {
  $(".4").on("click", function () {
    const p4 = document.getElementById("p4");
    if (p4.style.display == "none") {
      // blockで表示
    $(p4).fadeIn();
      p4.style.display = "flex";
    } else {
      // noneで非表示
    $(p4).fadeOut();
      p4.style.display = "none";
    }
  });
});
$(function () {
  $(".5").on("click", function () {
    const p5 = document.getElementById("p5");
    if (p5.style.display == "none") {
      // blockで表示
    $(p5).fadeIn();
      p5.style.display = "flex";
    } else {
      // noneで非表示
    $(p5).fadeOut();
      p5.style.display = "none";
    }
  });
});
$(function () {
  $(".6").on("click", function () {
    const p6 = document.getElementById("p6");
    if (p6.style.display == "none") {
      // blockで表示
    $(p6).fadeIn();
      p6.style.display = "flex";
    } else {
      // noneで非表示
    $(p6).fadeOut();
      p6.style.display = "none";
    }
  });
});
