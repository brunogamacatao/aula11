import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

class Loja extends React.Component {
  componentDidUpdate(prevProps) {
    const { dispatch, redirectUrl } = this.props;

    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      dispatch(this.navigateTo(redirectUrl));
    } else if (isLoggingOut) {
      // Limpa tudo
    }
  }

  navigateToPage(url) {
    console.log('OIOIOI - navigateToPage(' + url + ')');
    this.context.router.push(url);
  }  

  render() {
    return (
      <div>
        <h1>Loja</h1>
        <hr/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
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