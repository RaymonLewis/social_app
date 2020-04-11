import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthData } from '../../redux/thunks/thunks';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthData();
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
};

const mapStateToProps = state => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
  getAuthData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
