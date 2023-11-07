// -------------Youtube-https://www.youtube.com/watch?v=8GTB2ge0-ZM&t=1443s ----------------

// https://stackoverflow.com/questions/6302930/how-to-use-window-scroll-to-automatically-scroll-on-pageload
function ScrollUp() {
  window.scrollTo(0, 0);
}
window.onload = ScrollUp;
// https://stackoverflow.com/questions/6302930/how-to-use-window-scroll-to-automatically-scroll-on-pageload

// https://stackoverflow.com/questions/54080391/remove-hash-from-url-without-refreshing
function removehash() {
  setTimeout(function () {
    history.replaceState("", document.title, window.location.pathname);
  }, 1);
}
// https://stackoverflow.com/questions/54080391/remove-hash-from-url-without-refreshing

/* scrolltop------------ https://www.youtube.com/watch?v=SJVCvnKM_lI */
const toTop = document.querySelector(".up-arrow");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
/* scrolltop------------ https://www.youtube.com/watch?v=SJVCvnKM_lI */
