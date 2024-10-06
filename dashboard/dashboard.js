// This code snippet gets all "buttons" i.e. themeTitlesContainer, and all their relevant content that should be displayed when clicked. Then when a "button" is clicked, changes its style, then finds out which relevant content to display based on the index of the array of the "button". If the 2nd button is clicked, then the 2nd content must be displayed. It also resets all styling, and visibility on each click.

const themeTitlesContainer = Array.from(
  document.querySelectorAll(".theme-title-container")
);
const themeTextsContainer = Array.from(
  document.querySelectorAll(".theme-text-container")
);

themeTitlesContainer.forEach((themeTitleContainer, index) => {
  themeTitleContainer.addEventListener("click", (e) => {
    themeTextsContainer.forEach((themeTextContainer, i) => {
      i == index
        ? themeTextContainer.classList.remove("hidden")
        : themeTextContainer.classList.add("hidden");
      i == index
        ? themeTitlesContainer[i].classList.add("active")
        : themeTitlesContainer[i].classList.remove("active");
    });
  });
});

// This code snippet expands themes menu upon clicking the caret btn.

const mostActiveThemesContainer = document.querySelector(
  "section.popular-themes-container > div.most-active-themes"
);
const newestThemesContainer = document.querySelector(
  "section.popular-themes-container > div.newest-themes"
);
const activeThemesExpandBtn = document.querySelector(
  "div.most-active-themes-expandable div.fa-angle-down-container"
);
const newestThemesExpandBtn = document.querySelector(
  "div.newest-themes-expandable div.fa-angle-down-container"
);

// event.currentTarget selects the element to which the event listener is attached, even if the elem that triggered the event is the child.
// In this case the event that has the listener is a div container that contains an icon. Even when the user clicks the icon(child of the elem that has the listener), the event bubbles to the parent. So if the user clicks the icon the event.target is the icon but the event.currentTarget is the parent(i.e. the elem that has the listener).

// This function checks which btn was clicked adds/removes the class "expand" which expands/hiddes the contents of the side menu and also the class "fa-rotate-180" which rotates the btn.
const getTarget = (event) => {    
  event.target.classList.toggle("fa-rotate-180");
  if (event.currentTarget == activeThemesExpandBtn) {
    mostActiveThemesContainer.classList.toggle("expand");
    newestThemesExpandBtn.children[0].classList.remove("fa-rotate-180");
    newestThemesContainer.classList.remove("expand");
    return;
  }
  if (event.currentTarget == newestThemesExpandBtn) {
    newestThemesContainer.classList.toggle("expand");
    activeThemesExpandBtn.children[0].classList.remove("fa-rotate-180");
    mostActiveThemesContainer.classList.remove("expand");
    return;
  }
};

activeThemesExpandBtn.addEventListener("click", getTarget);
newestThemesExpandBtn.addEventListener("click", getTarget);
