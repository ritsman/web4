document.addEventListener("DOMContentLoaded", function () {
  //alert("add");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      document.getElementById("navbar_top").classList.add("nav-trans");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document
        .getElementById("navbar_top")
        .classList.remove("fixed-top", "nav-trans");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
// intersection observer
const chngClr = (entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    // entry.target.style.backgroundColor = intersecting ? "blue" : "red";
    if (intersecting) {
      document.getElementById("navbar_top").className += " white_top ";
    } else {
      document.getElementById("navbar_top").classList.remove("white_top");
    }
  });
};
const observer = new IntersectionObserver(chngClr, { threshold: 0.75 });
const observer2 = new IntersectionObserver(chngClr, { threshold: 0.75 });
const observer3 = new IntersectionObserver(chngClr, { threshold: 0.75 });
observer.observe(document.getElementById("prod"));
observer2.observe(document.getElementById("intro"));
observer3.observe(document.getElementById("prod_desc"));
