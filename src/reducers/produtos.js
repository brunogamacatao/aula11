function produtos(state = [], action) {
    switch (action.type) {
        case 'CADASTRAR_PRODUTO':
            return [
                ...state,
                {
                    ...action.produto,
                    id: state.length
                }
            ];
        case 'EXCLUIR_PRODUTO':
            return [
                ...state.slice(0, action.produtoId),
                ...state.slice(action.produtoId + 1)
            ];
        default:
            return state;
    }
}

export default produtos;