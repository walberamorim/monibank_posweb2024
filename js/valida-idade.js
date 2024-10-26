export default function ehMaiorIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if(campo.value == null || campo.value == ''){
        console.log("Campo de nascimento não preenchido.")
        return false;
    }
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    // Ajusta a idade se a data de aniversário ainda não ocorreu este ano
    if (
        mesAtual < dataNascimento.getMonth() ||
        (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())
    ) {
        idade--;
    }
    
    if(idade < 18){
        console.log("É de menor de idade. "+idade+" Ano(s).");
    }
    return idade >= 18;
}