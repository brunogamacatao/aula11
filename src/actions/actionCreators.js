export function cadastrarProduto(produto) {
    return {
        type: 'CADASTRAR_PRODUTO',
        produto
    };
}

export function excluirProduto(produtoId) {
    return {
        type: 'EXCLUIR_PRODUTO',
        produtoId
    };
}