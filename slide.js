/* JAVA DO SLIDER */

var radio = document.querySelector(".manual-btn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 3000);

function proximaImg() {
  cont++;

  if (cont > 3) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}

/* JAVA DO SLIDER */

var produtosSelecionados = [];
var total = 0;

function adicionarProduto(id) {
  produtosSelecionados.push(id);
  switch (id) {
    case 1:
      total += 628.22;
      break;
    case 2:
      total += 589.0;
      break;
    case 3:
      total += 919.99;
      break;
    case 4:
      total += 799.99;
      break;
    case 5:
      total += 588.99;
      break;
    case 6:
      total += 129.99;
      break;
    case 7:
      total += 259.99;
      break;
    case 8:
      total += 899.99;
      break;
    case 9:
      total += 1705.99;
      break;
    case 10:
      total += 679.99;
      break;
    default:
      total += 5;
  }

  // Atualizar o balão com o total
  document.getElementById("total").innerText = "total: R$" + total.toFixed(2);

  // Atualizar o link para o carrinho com os parâmetros atualizados
  var linkCarrinho = document.getElementById("linkCarrinho");
  linkCarrinho.href =
    "carrinho.html?produtosSelecionados=" +
    encodeURIComponent(JSON.stringify(produtosSelecionados)) +
    "&total=" +
    total;
}
var produtosSelecionados = [];
var total = 0;

// Mapeamento dos produtos
var produtos = {
  1: { nome: "Processador AMD Ryzen 5 4600G", preco: 628.22, img: "ryzen.jpg" },
  2: { nome: "Processador AMD Ryzen 5 3600G", preco: 589.0, img: "Ryzen.2.jpg" },
  3: { nome: "Processador AMD Ryzen 5 5600G", preco: 919.99, img: "ryzen.jpg" },
  4: { nome: "Processador Intel Core i3-12100", preco: 799.99, img: "intel 2.jpeg" },
  5: { nome: "Processador Intel Core i3-12100F", preco: 588.99, img: "intel.jpeg" },
  6: { nome: "Mouse Gamer Pichau Hive P1", preco: 129.99, img: "mouse.jpg" },
  7: { nome: "Teclado Mecanico Gamer Redragon Daksa", preco: 259.99, img: "teclado.jpg" },
  8: { nome: "Monitor Gamer Asus Tuf", preco: 899.99, img: "monitor.jpg" },
  9: { nome: "Cadeira Gamer Pichau Omega S", preco: 1705.99, img: "cadeira.jpg" },
  10: { nome: "Gabinete Cooler Master Masterbox MB530P", preco: 679.99, img: "gabinete 5.jpg" }
};

function adicionarProduto(id) {
  var produto = produtos[id];
  produtosSelecionados.push(produto);
  total += produto.preco;

  // Atualizar o balão com o total
  document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);

  atualizarResumoCarrinho();
}

function atualizarResumoCarrinho() {
  var listaProdutos = document.getElementById("listaProdutos");
  listaProdutos.innerHTML = "";

  var produtosAgrupados = produtosSelecionados.reduce((acc, produto) => {
    if (!acc[produto.nome]) {
      acc[produto.nome] = { ...produto, quantidade: 0 };
    }
    acc[produto.nome].quantidade++;
    return acc;
  }, {});

  for (var key in produtosAgrupados) {
    var produto = produtosAgrupados[key];
    var li = document.createElement("li");
    li.innerHTML = `
      <img src="${produto.img}" alt="${produto.nome}">
      <span>${produto.nome}</span>
      <span>Qtd: ${produto.quantidade}</span>
      <span>R$ ${(produto.preco * produto.quantidade).toFixed(2)}</span>
    `;
    listaProdutos.appendChild(li);
  }

  document.getElementById("totalCarrinho").innerText = "Total: R$ " + total.toFixed(2);
}

document.getElementById("linkCarrinho").addEventListener("click", function(event) {
  event.preventDefault();
  var resumoCarrinho = document.getElementById("resumoCarrinho");
  resumoCarrinho.style.display = resumoCarrinho.style.display === "none" ? "block" : "none";
});

document.addEventListener("click", function(event) {
  var resumoCarrinho = document.getElementById("resumoCarrinho");
  if (!resumoCarrinho.contains(event.target) && event.target.id !== "linkCarrinho") {
    resumoCarrinho.style.display = "none";
  }
});

document.getElementById("irPagamento").addEventListener("click", function() {
  window.location.href = "pagamento.html";
});
