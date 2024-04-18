function menuMobile() {
  var dotsButton = document.querySelector(".dots");
  var menuMobile = document.querySelector(".menu-mobile");
  var closeIcon = document.querySelector(".icon-tabler-x");
  var links = document.querySelectorAll(".menu-mobile__links a");

  dotsButton.addEventListener("click", function () {
    menuMobile.style.display = "block";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    menuMobile.style.display = "none";
    closeIcon.style.display = "none";
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menuMobile.style.display = "none";
      closeIcon.style.display = "none";
    });
  });
}

menuMobile();
