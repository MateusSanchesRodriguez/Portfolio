gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

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
    projects.forEach((otherProjects, otherIndex, e) => {
      if (window.event.target.className !== "siteLinks" && window.event.target.className !== "githubLinks" && window.event.target.className !== "imgProject") {
        otherProjects.classList.remove("active");
      }
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
