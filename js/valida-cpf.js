export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g, "");
    campo.value = cpf;
    console.log(cpf);

    if(cpf.length !== 11){
        console.log("Esse cpf não possui 11 digitos.");
        return false;
    }

    if(acharNumerosRepetidos(cpf)){
        console.log("Esse cpf possui apenas uma repeticao de numeros.");
        return false;
    }

    if(erroPrimeiroDigito(cpf) || erroSegundoDigito(cpf)){
        console.log("Esse cpf está inválido");
        return false;
    }

    return true;
}

function acharNumerosRepetidos(cpf){
    let lista = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ]

    return lista.includes(cpf);
}

function erroPrimeiroDigito(cpf){
    let soma= 0;
    let multiplicador = 10;
    for (let index = 0; index < 9; index++) {
        soma+= cpf[index]*multiplicador;
        multiplicador--;
        
    }
    soma= (soma *10) % 11;

    if(soma ==10 || soma == 11){
        soma = 0;
    }
    return soma != cpf[9];
}

function erroSegundoDigito(cpf){
    let soma= 0;
    let multiplicador = 11;
    for (let index = 0; index < 10; index++) {
        soma+= cpf[index]*multiplicador;
        multiplicador--;
        
    }
    soma= (soma *10) % 11;

    if(soma ==10 || soma == 11){
        soma = 0;
    }
    return soma != cpf[10];
}