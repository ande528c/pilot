var button_1 = document.querySelector(".button1");
var button_2 = document.querySelector(".button2");
var article = document.querySelector("article");
var div = document.querySelector("div");

button_1.addEventListener("click", function () {
  article.classList.toggle("youtube");
});

button_2.addEventListener("click", function () {
  div.classList.toggle("embed");
});
