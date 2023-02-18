gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");


// addEventListener("scroll", function () {
//   var menu = document.querySelector("nav");
//   if (scrollY >= 100) {
//     menu.classList.add("fixed-top");
//   } else {
//     menu.classList.remove("fixed-top");
//   }
// });

links.forEach((link) => {
  link.addEventListener("click", () => {
    const state = Flip.getState(activeNav);

    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
    });
  });
});

const projects = document.querySelectorAll(".project");

projects.forEach((project, index) => {
  project.addEventListener("click", () => {
    const state = Flip.getState(projects);

    const isProjectActive = project.classList.contains("active");
    projects.forEach((otherProjects, otherIndex) => {
      otherProjects.classList.remove("active");
      otherProjects.classList.remove("is-inactive");
      if (!isProjectActive && index !== otherIndex) {
        otherProjects.classList.add("is-inactive");
      }
    });

    if (!isProjectActive) project.classList.add("active");

    Flip.from(state, {
      duration: 1,
      ease: "expo.out",
      absoluteOnLeave: true,
    });
  });
});
