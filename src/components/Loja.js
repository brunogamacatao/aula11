import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import { history } from '../stores/index';

class Loja extends React.Component {
  componentDidUpdate(prevProps) {
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      history.push(this.props.redirectUrl);
    } else if (isLoggingOut) {
      this.props.setRedirectUrl('/');
      history.replace('/login');
    }
  }

  render() {
    return React.cloneElement(this.props.children, this.props);
  }
}

function mapStateToProps(state) {
  return {
    produtos: state.produtos,
    isLoggedIn: state.login.loggedIn,
    redirectUrl: state.login.redirectUrl
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Loja);