var shareIcon = document.getElementById("share-icon");
var active = document.getElementById("active");


shareIcon.addEventListener("click", function(e){
  if (active.style.display === "none") {
    active.style.display = "flex";
  } else {
    active.style.display = "none";
  }
})