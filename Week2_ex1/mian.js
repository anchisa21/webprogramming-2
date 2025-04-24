const userName = window.prompt("what is your name?");

if (userName !== null || userName !== "") {
}
document.getElementById("show-name").innerText = "สวัสดี " + userName;

function showUserInfo() {
  alert(navigator.userAgent);
}
function Refreshpage() {
  location.reload();
}
function openYoutube() {
  window.open("https://www.youtube.com/watch?v=1xTrYJh4G8U");
}

function setAlert() {
  let intervalId = 0;
  intervalId = setInterval(() => {
    alert("Hello " + userName);
  }, 5000);
  return intervalId;
}
