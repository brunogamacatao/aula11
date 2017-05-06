import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import produtos from './produtos';
import login from './login';

const rootReducer = combineReducers({produtos, login, routing: routerReducer});

export default rootReducer;