const button = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent")
button.addEventListener("click", function() {
  cover.style.display = "none";
  mainContent.style.display = "block";
});

const targetDate = new Date("September 18 ,2026 00:00:00").getTime();
setInterval (function(){
  const now = new Date().getTime();
  const distance = tagetData-now;
  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor(distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floow(distance % (1000*60*60)) / (1000*60));
  conts seconds = Math.floow(distance % (1000*60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = Hours;
  document.getElementById("minutes").innerHTML = minutes;
  documnet.getElementById("seconds").innerHTML = Seconds;
},1000);						
