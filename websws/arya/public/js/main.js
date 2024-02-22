// intersection observer
// const chngClr = (entries) => {
//     entries.forEach((entry) => {
//       const intersecting = entry.isIntersecting;
//       if (intersecting) {
//         document.getElementById("navbar_top").className += " white_top ";
//       } else {
//         document.getElementById("navbar_top").classList.remove("white_top");
//       }
//     });
//   };
//   const observer = new IntersectionObserver(chngClr, { threshold: 0.75 });
//   const observer2 = new IntersectionObserver(chngClr, { threshold: 0.75 });
//   const observer3 = new IntersectionObserver(chngClr, { threshold: 0.75 });
//   observer.observe(document.getElementById("products"));
//   observer2.observe(document.getElementById("intro"));
//   observer3.observe(document.getElementById("prod_desc"));






  // sticky header 

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });


    // aos Animation

    AOS.init({
      duration: 1200,
    })