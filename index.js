document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menuItems = document.querySelector(".hbox1");
  const menuItems2 = document.querySelector(".hbox2");

  hamburger.addEventListener("click", function () {
    menuItems.classList.toggle("show");
    menuItems2.classList.toggle("show");
  });
});
