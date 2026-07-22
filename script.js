const button = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent")
button.addEventListener("click", function() {
  cover.style.display = "none";
  mainContent.style.display = "block";
});
