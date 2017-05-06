import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import produtos from './produtos';

const rootReducer = combineReducers({produtos, routing: routerReducer});

export default rootReducer;