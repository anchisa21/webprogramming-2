const userName = window.prompt("what is your name?");

if (userName !== null || userName !== "") {
}
document.getElementById("show-name").innerText = "สวัสดี " + userName;

function showUserInfo() {
    alert (navigator.userAgent);
    }
function Refreshpage() {
    location.reload();
}
function openYoutube(){
    window.open("https://youtu.be/cTGkk1zNJLY?si=fDgjZO1xl8JizGc5");
}

function setAlert() {
    let intervalId = 0;
    intervalId = setInterval(() => {
        alert("Hello " + userName);
    }, 5000);
    return intervalId;
}