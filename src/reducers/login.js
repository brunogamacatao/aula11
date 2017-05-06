function login(state = {}, action) {
  switch (action.type) {
    case 'SET_REDIRECT_URL':
      return {
        ...state,
        redirectUrl: action.url
      };
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true
      };
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
}

export default login;