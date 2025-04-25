const headline = document.getElementsByTagName("h1");
console.log(headline[4].innerText = "หยุดพักไปนอน");

const getByClass = document.getElementsByClassName("font-thai");
console.log(getByClass);
const c = window.confirm('ดู User onLine หรือไม่?');
if (c) {
    window.alert("User agent" + navigator.onLine);
}
