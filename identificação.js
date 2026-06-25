document.addEventListener("DOMContentLoaded", () => {

const tipoRequerente =
    document.getElementById("tipoRequerente");

const campoProcuracao =
    document.getElementById("campoProcuracao");

const procuracao =
    document.getElementById("procuracao");

tipoRequerente.addEventListener("change", () => {

    if (tipoRequerente.value === "procurador") {

        campoProcuracao.classList.remove("oculto");
        procuracao.required = true;

    } else {

        campoProcuracao.classList.add("oculto");
        procuracao.required = false;

    }

});

document.addEventListener("DOMContentLoaded", () => {

    const tipoRequerente =
        document.getElementById("tipoRequerente");

    const campoProcuracao =
        document.getElementById("campoProcuracao");

    const procuracao =
        document.getElementById("procuracao");

    tipoRequerente.addEventListener("change", () => {

        if (tipoRequerente.value === "procurador") {

            campoProcuracao.classList.remove("oculto");
            procuracao.required = true;

        } else {

            campoProcuracao.classList.add("oculto");
            procuracao.required = false;
            procuracao.value = "";

        }

    });

});

document
    .getElementById("formulario")
    .addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Parte 1 concluída com sucesso! Em breve iremos para os dados do veículo."
        );

    });


});
