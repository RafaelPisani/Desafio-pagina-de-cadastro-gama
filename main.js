
function controleformproduto() {
    var form = document.getElementById("formproduct")

    form.style.display = "block";
}

function cadastrarProduto() {
    var produtoDescrição = document.getElementById("produtoDescrição");
    var produtoQuantidade = document.getElementById("produtoDescrição");

    var dados = Json.parse(localstorage.getItem("dadosProduto"));

    if (dados == null) {
        localStorage.setItem("dadosproduto", "[]")
        dados = [];
    }
    var auxRegistro = {
        nome: produtoDescrição.value,
        quantidade: produtoQuantidade.value
    }
    dados.push(auxRegistro);

    dados.setItem("dadosProduto", "[]");

    varpush(auxRegistro);

    localstorage.setItem("dadosProduto", Json.stringify(dados))
    alert("Registro incluído com sucesso!")

    produtoDescrição.value = "";
    produtoQuantidade.value = "";

}
