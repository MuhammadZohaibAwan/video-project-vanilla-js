const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else if (btn.classList.contains("slide")) {
    btn.classList.remove("slide");
    video.play();
  }
});

const preloder = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloder.classList.add("hide-preloader");
});
