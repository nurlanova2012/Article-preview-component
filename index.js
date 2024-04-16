var shareIcon = document.getElementById("share-icon");
var active = document.getElementById("active");
var profile = document.getElementById("profile");

shareIcon.addEventListener("click", function (e) {
  if (active.style.display === "none" || active.style.display === "") {
    active.style.display = "flex";
  } else {
    active.style.display = "none";
  }
});

var x = window.matchMedia("(max-width:410px)");

function handleViewportChange(x) {
  if (x.matches) {
    shareIcon.classList.add("social-mobile");
    active.classList.add("active-mobile");
  } else {
    shareIcon.classList.remove("social-mobile");
    active.classList.remove("active-mobile");
  }
}
handleViewportChange(x);
x.addEventListener(handleViewportChange);
