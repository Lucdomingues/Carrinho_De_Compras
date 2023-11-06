window.onload = () => {
    limpar();
  };

const produto = document.getElementById('produto');
const quantidade = document.getElementById('quantidade');
const valorTotal = document.getElementById('valor-total');
const carrinho = document.getElementsByClassName('carrinho__produtos__produto')[0];

let valor;
let produtoNome;
let quant = 0;
let total = 0;

const addCarrinho = () => {
    if(quantidade.value === ''){
        quant = 1;
    } else {
        quant = quantidade.value;
    }
    const arrProdutoValor = produto.value.split(' - R$');
    valor = parseInt(arrProdutoValor[1]);
    produtoNome = arrProdutoValor[0];
    carrinho.innerHTML = carrinho.innerHTML + `<br/> <span class="texto-azul">${quant}X</span> ${produtoNome} <span class="texto-azul">R$${valor}</span>`
    calculoTotal();
};

const calculoTotal = () => {
    let valorAtual = parseInt(valorTotal.innerHTML.split('R$')[1]);
    total = valorAtual + (valor * quant);
    valorTotal.innerHTML = `R$${total}`;
};

const adicionar = () => {
    addCarrinho();    
};

const limpar = () => {
    carrinho.innerHTML = '';
    valorTotal.innerHTML = 'R$0';
};