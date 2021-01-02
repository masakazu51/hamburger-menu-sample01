$(function () {
  // ハンバーガーアイコンをクリックしたとき、グローバルナビを開閉する
  $(".js-hamburger").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".js-overlay, .js-ly-global-nav").removeClass("open");
    } else {
      $(this).addClass("active");
      $(".js-overlay, .js-ly-global-nav").addClass("open");
    }
  });

  // overlayをクリックしたとき、global-navを閉じる
  $(".js-overlay").on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".js-hamburger").removeClass("active");
      $(".js-ly-global-nav").removeClass("open");
    }
  });

  // サブメニューの開閉
  $(".js-global-nav-item-link").each(function () {
    $(this).on("click", function () {
      $("+.js-sub-menu", this).slideToggle();
      $(this).toggleClass("open", 200);
      return false;
    });
  });
});
