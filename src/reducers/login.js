function login(state = {}, action) {
    switch (action.type) {
        case 'SET_REDIRECT_URL':
            return {
                ...state,
                redirectUrl: action.url
            };
        default:
            return state;
    }
}

export default login;