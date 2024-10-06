const body = document.querySelector("body");
const main = document.querySelector("main");

const heightHandler = function () {
  // console.log(main.clientHeight + 50, window.innerHeight);
  if (main.clientHeight + 50 > window.innerHeight) {
    body.style.height = "max-content";
    main.style.margin = "30px auto";
  } else {
    body.style.height = "100vh";
  }
};

// What this handler does is not allow main element's content overflow screen size, plus adds top/bottom margin.
// In detail:
// First gets the main's and window's screen height and compares them, plus some buffer so that the main size doesn't come close to the edges.
// If main's height is greater than body's then changes body's css height to "max-content" so than it is at least as big as its content
// Else resets to take all available screen size.

window.addEventListener("load", heightHandler);
window.addEventListener("resize", heightHandler);

const checkbox = document.querySelector("i");
const continueBtn = document.querySelector("#nextPage");

checkbox.addEventListener("click", function () {
  const isPressed = this.getAttribute("aria-pressed") === "true";
  this.setAttribute("aria-pressed", String(!isPressed));

  if (this.getAttribute("aria-pressed")) {
    continueBtn.classList.toggle("disabled");
    !continueBtn.classList.contains("disabled")
      ? continueBtn.setAttribute("tabIndex", 0)
      : continueBtn.setAttribute("tabIndex", -1);
  }
});
// "this" refers to the checkbox element i.e. the current variable inside the listener(local scope).
// The aria attr usage is two-fold, helps with screen readers & its state is used to modify properties of this element.
// String constructor is set to the opposite of the isPressed variable's value.
// Nested if handles the functionality of the "Continue" btn. When the acknowledge checkbox is not pressed, this button is disabled(by having a disabled class). It's not clickable nor accessible by tab key.
