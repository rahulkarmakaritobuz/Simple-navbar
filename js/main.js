const navigation = document.getElementById("navigation");
const menuBar = document.getElementById("menuBar");
const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", (e) => {
  menuBar.classList.toggle("ul-dropdown-animation");
  menuBar.classList.toggle("menu-bar");
  navigation.classList.toggle("menu-bg-toggle");
});
