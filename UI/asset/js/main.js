// Get the checkout div

const openDiv = document.getElementsByClassName("section-c--ord")[0];

// Get the offset position of the openDiv for the proceed to checkout div
const sticky = openDiv.offsetTop;

// Add the sticky class to the openDiv when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    openDiv.classList.add("sticky");
  } else {
    openDiv.classList.remove("sticky");
  }
}

window.onscroll = function () {
  myFunction()
};