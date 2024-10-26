import ehUmCPF from "./valida-cpf.js";
import ehMaiorIdade from "./valida-idade.js";

const camposDoFormularios = document.querySelectorAll("[required]");

camposDoFormularios.forEach(campo => {
    campo.addEventListener('blur', () => {
        verificarCampo(campo);
    });

});

function verificarCampo(campo) {
    switch (campo.name) {
        case "cpf":
            ehUmCPF(campo);
            break;
        case "aniversario":
            ehMaiorIdade(campo);
            break;
    }
}