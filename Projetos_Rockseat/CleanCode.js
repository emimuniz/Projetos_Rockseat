//SOLID - PRINCIPIO OCP

type EstrategiaDesconto = (preco: number, valorDesconto: number) => number;

function descontoFixo(preco: number, valorDesconto: number): number {
    return preco - valorDesconto;
}

function descontoPercentual(preco: number, valorDesconto: number): number {
    return preco * (1 - valorDesconto / 100);
}

function descontoProgressivo(preco: number, valorDesconto: number): number {
    if (preco > 100) {
        return preco - valorDesconto * 2; // Desconto progressivo para preços acima de 100
    }
    return preco - valorDesconto;
}

function calcularPrecoFinal(preco: number, estrategiaDesconto: EstrategiaDesconto, valorDesconto: number): number {
    return estrategiaDesconto(preco, valorDesconto);
}

type Produto = {
    nome: string;
    preco: number;
    estrategiaDesconto: EstrategiaDesconto;
    valorDesconto: number;
};

type CarrinhoDeCompras = {
    produtos: Produto[];
};

function adicionarProdutoAoCarrinho(carrinho: CarrinhoDeCompras, produto: Produto): void {
    carrinho.produtos.push(produto);
}

function calcularTotalDoCarrinho(carrinho: CarrinhoDeCompras): number {
    return carrinho.produtos.reduce((total, produto) => {
        const precoFinal = calcularPrecoFinal(produto.preco, produto.estrategiaDesconto, produto.valorDesconto);
        return total + precoFinal;
    }, 0);
}

// Uso
const carrinho: CarrinhoDeCompras = { produtos: [] };

adicionarProdutoAoCarrinho(carrinho, {
    nome: "Camiseta",
    preco: 50,
    estrategiaDesconto: descontoFixo,
    valorDesconto: 5,
});

adicionarProdutoAoCarrinho(carrinho, {
    nome: "Calça Jeans",
    preco: 120,
    estrategiaDesconto: descontoPercentual,
    valorDesconto: 10,
});

adicionarProdutoAoCarrinho(carrinho, {
    nome: "Tênis",
    preco: 200,
    estrategiaDesconto: descontoProgressivo,
    valorDesconto: 15,
});

const totalDoCarrinho = calcularTotalDoCarrinho(carrinho);
console.log(`Total do Carrinho: R$ ${totalDoCarrinho.toFixed(2)}`);
