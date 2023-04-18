let temporizador;
let sequenciaDeClicks = 0;

disintegrate.init();

document.onclick = (e) => {
  if (e.target.className === "pepe") {
    sequenciaDeClicks++;
    switch (sequenciaDeClicks) {
      case 1:
        Swal.fire({
          title: "Pare"
        });
        break;
      case 2:
        Swal.fire("Deixa eu codar");
        break;
      case 3:
        Swal.fire({
          title: "Se eu fosse voce nao faria isso!!!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#b293f9",
          cancelButtonColor: "#d33",
          confirmButtonText: "Não ligo",
          cancelButtonText: "Desculpe"
        }).then((result) => {
          if (result.isConfirmed) {
            disintegrate.init();

            const explode = document.querySelector(
              '[data-dis-type="simultaneous"]'
            );

            const disObj = disintegrate.getDisObj(explode);

            disintegrate.createSimultaneousParticles(disObj);
            explode.remove();

            setTimeout(function () {
              Swal.fire({
                title: "So estava brincando XD",
                showConfirmButton: false,
                showCancelButton: false,
              });
              setTimeout(function () {
                location.reload();
              }, 1500);
            }, 3000);
          } else {
            sequenciaDeClicks = 2;
          }
        });

        break;
    }
  }
};