import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from '../stores/index';
import ContainerAutenticado from './ContainerAutenticado';
import Loja from './Loja';
import Login from './Login';
import Formulario from './Formulario';

class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Loja}>
                        <Route path="login" component={Login}/>

                        <Route component={ContainerAutenticado}>
                            <IndexRoute component={Formulario}></IndexRoute>
                        </Route>
                    </Route>
                </Router>
            </Provider>            
        );
    }
}

export default Main;