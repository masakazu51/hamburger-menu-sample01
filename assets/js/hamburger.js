$(function () {
  // ハンバーガーアイコンをクリックしたとき、グローバルナビを開閉する
  $(".js-hamburger").on("click", function () {
    $(this).toggleClass("active");
    $(".js-overlay, .js-ly-global-nav").toggleClass("open");
  });

  // overlayをクリックしたとき、global-navを閉じる
  $(".js-overlay").on("click", function () {
    $(this).toggleClass("open");
    $(".js-hamburger").removeClass("active");
    $(".js-ly-global-nav").removeClass("open");
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
