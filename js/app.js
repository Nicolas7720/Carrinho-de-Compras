let totalGeral = 0;
function adicionar() {
  const produtos = document.querySelector(".produto-input").value;
  const nomeProduto = produtos.split("-")[0];
  const valorUnitario = produtos.split("R$")[1];
  const quantidade = document.querySelector("#quantidade").value;
  if (quantidade === "" || quantidade == 0) {
    alert("Preencha o campo quantidade");
  } else {
    const preco = quantidade * valorUnitario;

    const carrinhos = document.querySelector(".carrinho__produtos");

    carrinhos.innerHTML += `
    <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
    </section>`;

    totalGeral += preco;
    const total = document.querySelector("#valor-total");
    total.textContent = `R$ ${totalGeral}`;
    document.querySelector("#quantidade").value = 0;
  }
}
function limpar() {
  const produtos = document.querySelector(".produto-input");
  const quantidade = (document.querySelector(".quantidade-input").value = "");
  const carrinhos = (document.querySelector(".carrinho__produtos").innerHTML =
    "");
  const total = (document.querySelector("#valor-total").textContent = "R$ 0");
}
