import React from 'react';
import { connect } from 'react-redux';

import { history } from '../stores/index';

class ContainerAutenticado extends React.Component {
    componentDidMount() {
        const { dispatch, currentURL, isLoggedIn, setRedirectUrl } = this.props;

        if (!isLoggedIn) {
            dispatch(setRedirectUrl(currentURL));
            history.replace("/login");
        }
    }

    render() {
        if (this.props.isLoggedIn) {
            return this.props.children;
        } else {
            return null;
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isLoggedIn: state.login.loggedIn,
        currentURL: ownProps.location.pathname
    };
}

export default connect(mapStateToProps)(ContainerAutenticado);