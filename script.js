
window.addEventListener("load", () => {

    let carreras = document.getElementById('career'); //- ACA
    let carrera_hidden = document.querySelector('.carreras__hidden');
    let checkTutor = document.getElementById('tutor');
    let inputTutor = document.querySelectorAll('.input__tutor');
    let doc = document.getElementById('LEADCF22');
    let program = document.getElementById('LEADCF220');

    let modular = document.getElementById('LEADCF204');
    let err = document.getElementById('container__error');

    modular.addEventListener('change', (ev) => {

        const result = data.find(item => item.codigo_modular === modular.value);

        if (result !== undefined) {
            err.style.display = "none";
            inputCategoria.value = result.categoria;
            inputDistrito.value = result.distrito;
            // inputColegio.value = result.colegio;
            // inputTerm.value = result.categoria;

            inputDisabledColegio.value = result.colegio;
            inputDisabledDistritoColegio.value = result.distrito;

        } else {
            err.style.display = "block";
        }
    })

    let tutoresCt = document.querySelector(".tutores");
    checkTutor.addEventListener("change", () => {
        if (checkTutor.checked) {
            tutoresCt.style.display = "grid";
            inputTutor.forEach(input => {
                input.style.display = "block"
            })
        } else {
            tutoresCt.style.display = "none";
            inputTutor.forEach(input => {
                input.style.display = "none";
                input.value = "";
            })
        }
    })

})



