export default function ehMaiorIdade(campo) {
    let mensagem = '';
    const dataNascimento = new Date(campo.value);
    if (campo.value == null || campo.value == '') {
        mensagem = "Campo de data de nascimento não preenchido.";
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

    if (idade < 18) {
        mensagem = "É de menor de idade. " + idade + " Ano(s).";
    }
    return mensagem;
}