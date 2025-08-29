let isPlain = false;
export function router() {
  const frames = document.querySelector(".frames");
  const dateTime = document.querySelector(".datetime");
  const hash = window.location.hash;

  if (hash === "#/plain") {
    frames.classList.add("hide");
    dateTime.classList.add("hide");
    // isPlain = true;
  } else if (hash === "#/tempquote") {
  } else {
    frames.classList.remove("hide");
    dateTime.classList.remove("hide");
    // isPlain = false;
  }
}
