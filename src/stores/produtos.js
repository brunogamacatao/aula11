import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// importa o root reducer
import rootReducer from '../reducers/index';

// create o estado padrão
const defaultState = {
  produtos: [
      {id: 0, nome: 'BACON FATIADO SEARA 250G', preco: 5.99, foto: 'http://www.paodeacucar.com/img/uploads/1/897/532897.png'},
      {id: 1, nome: 'MARGARINA EXTRA CREMOSA COM SAL DORIANA POTE 250G', preco: 1.99, foto: 'http://www.paodeacucar.com/img/uploads/1/829/509829.jpg'},
      {id: 2, nome: 'FONDUE SUÍÇO DE QUEIJO CLASSIC EMMI 400G', preco: 49.90, foto: 'http://www.paodeacucar.com/img/uploads/1/782/519782.jpg'}
  ]
};

const produtosStore = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, produtosStore);

export default produtosStore;