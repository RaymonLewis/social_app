import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './Header';
import { setAuthUserData } from '../../redux/action_creators';

class HeaderContainer extends Component {
  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData() {
    const url = 'https://social-network.samuraijs.com/api/1.0/auth/me';
    axios.get(url, {withCredentials: true})
      .then(response => {
        const data = response.data;
        if(data.resultCode === 0) {
          const userData = data.data
          this.props.setAuthUserData(userData);
        }
      })
      .catch(error => {
        console.log(error);
      })
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
  setAuthUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
