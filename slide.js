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
