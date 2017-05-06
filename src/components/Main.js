import React from 'react';

import App from './App';

import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import produtosStore, { history } from '../stores/produtos';

class Main extends React.Component {
    render() {
        return (
            <Provider store={produtosStore}>
                <Router history={history}>
                <Route path="/" component={App}></Route>
                </Router>
            </Provider>            
        );
    }
}

export default Main;