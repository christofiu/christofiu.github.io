let nomeAtualParaEditar;
let idadeAtualParaEditar;

function converteParaFarenheit() {
    const temperaturaCelsius = parseFloat(document.getElementById(tempCelsius).value);
    const convercaofarenheit = (temperaturaCelsius * 9) / 5 + 32;
    document.getElementById("tempfarenheit").value = convercaofarenheit.tofixed(2) + "ºF"
}

function mostrarCartaoAltera(nome, idade) {
    document.getElementById("nome-alteraçao").value = nome;
    nomeAtualParaEditar = nome;
    document.getElementById("idade-alteraçao").value = idade;
    idadeAtualParaEditar = parseInt(idade);
}
