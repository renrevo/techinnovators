const header = document.querySelector("header");
// const sectionOne = document.querySelector(".hero");

// const sectionOneOptions = {
//   rootMargin: "-576px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("header__solid");
//     } else {
//       header.classList.remove("header__solid");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {

  if (document.body.scrollTop > 72 || document.documentElement.scrollTop > 72) {
    header.classList.add("header__solid");
  } else {
    header.classList.remove("header__solid");
  }

}