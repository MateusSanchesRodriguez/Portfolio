gsap.registerPlugin(Flip);

const projects = document.querySelectorAll(".project");

projects.forEach((project, index) => {
  project.addEventListener("click", () => {
    const state = Flip.getState(projects);

    const isProjectActive = project.classList.contains("active");
    projects.forEach((otherProjects, otherIndex, e) => {
      if (
        window.event.target.className !== "siteLinks" &&
        window.event.target.className !== "githubLinks" &&
        window.event.target.className !== "imgProject"
      ) {
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

window.addEventListener("DOMContentLoaded", (event) => {
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  navbarShrink();

  document.addEventListener("scroll", navbarShrink);

  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
if (screen.availWidth > 1024) {
  const divPai = document.getElementsByClassName('footer-conteiner')[0]
  const divMain = document.createElement('div')
  const divGif = document.createElement('div')
  const script = document.createElement("script");
  
  script.defer = true;
  script.src = "Js/dontOpen.js";
  document.head.appendChild(script);

  divMain.setAttribute('id', 'img')
  divMain.setAttribute('data-dis-type', 'simultaneous')
  divMain.setAttribute('class', 'icons')
  divPai.appendChild(divMain);

  divGif.setAttribute('class', 'gifFooter')
  divMain.appendChild(divGif)
  divGif.innerHTML = '<img src="Arquivos/pepe-hack-hack.gif"alt="pepe"class="pepe"/>';
}





console.log(
  "Caso voce esteja mexendo na responsividade vai precisar dar um F5 para ele mudar, esse comportamento acontece por eu utilizar o canvas"
);


