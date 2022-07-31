$(document).ready(function () {
  $(window).scroll(function () {
    var value = $(this).scrollTop();
    if (value < 100) {
      document.body.querySelector(".align").innerHTML = "Hi There!";
    }
    if (value > 400) {
      $(".section-1 .head-text").css("animation", "slideInUp 2s");
      $(".section-1 .hero-side").css("animation", "fadeInLeft 4s");
      $(".hello").css("animation", "fadeIn 10s");
      $(".section-1 .text").css("animation", "fadeIn 6s");
      document.body.querySelector(".align").innerHTML = "Our Mission";
    }
    if (value > 1000) {
      $(".section-2 .head-text").css("animation", "slideInUp 2s");
      $(".section-2 .text").css("animation", "fadeIn 6s");
      $(".section-2 .hero-side").css("animation", "slideInRight 6s");
    }
    if (value < 1000) {
      $(".section-2 .head-text").css("animation", "slideOutDown 2s");
      $(".section-2 .text").css("animation", "fadeOut 2s");
      $(".section-2 .hero-side").css("animation", "slideOutRight 2s");
    }
    if (value > 1400) {
      document.body.querySelector(".align").innerHTML = "The Idea";
    }
    if (value < 100) {
      $(".section-1 .head-text").css("animation", "slideOutDown 2s"); // Scroll State
      $(".section-1 .hero-side").css("animation", "fadeOutLeft 4s");
      $(".hello").css("animation", "fadeOut 2s");
      $(".section-1 .text").css("animation", "fadeOut 2s");
    }
    if (value > 1600) {
      $(".section-3 .head-text").css("animation", "slideInUp 2s");
    }
    if (value < 1600) {
      $(".section-3 .head-text").css("animation", "slideOutDown 2s");
    }
    if (value > 1700) {
      $(".section-3 .hero-side").css("animation", "fadeIn 4s");
      $(".section-3 .subhead-text").css("animation", "fadeIn 4s");
      document.body.querySelector(".align").innerHTML = "Our Work";
      $(".section-3 .text").css("animation", "slideInLeft 3s");
    }
    if (value < 1700) {
      $(".section-3 .subhead-text").css("animation", "fadeOut 1s");
      $(".section-3 .hero-side").css("animation", "fadeOutLeft 2s");
      $(".section-3 .text").css("animation", "fadeOut 1s");
    }

    if (value > 2400) {
      $(".section-3 .hero-side2").css("animation", "fadeInLeft 4s");
      $(".section-3 .text2").css("animation", "slideInRight 3s");
    }
    if (value < 2400) {
      $(".section-3 .hero-side2").css("animation", "fadeOutLeft 2s");
      $(".section-3 .text2").css("animation", "fadeOut 1s");
    }
    if (value > 3200) {
      $(".section-3 .hero-side3").css("animation", "slideInRight 4s");
      $(".section-3 .text3").css("animation", "slideInLeft 3s");
    }
    if (value < 3200) {
      $(".section-3 .hero-side3").css("animation", "slideOutLeft 2s");
      $(".section-3 .text3").css("animation", "fadeOut 1s");
    }
    if (value > 3800) {
      $(".section-4 .head-text").css("animation", "fadeIn 4s");
    }
    if (value < 3800) {
      $(".section-4 .head-text").css("animation", "fadeOut 2s");
    }
    if (value > 4200) {
      $(".section-4 .subhead-text").css("animation", "slideInUp 3s");
      document.body.querySelector(".align").innerHTML = "Pricing";
    }
    if (value < 4000) {
      $(".section-4 .subhead-text").css("animation", "slideOutDown 1s");
    }
  });
});

var text = {
  strings: ["Write It Up!"],
  typeSpeed: 125,
};

var Typed = new Typed(".auto-type-1", text);
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
const toastTrigger1 = document.getElementById("liveToastBtn1");
const toastLiveExample1 = document.getElementById("liveToast1");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
