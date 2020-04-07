import React from 'react'
import Profile from './Profile';
import axios from 'axios';
import { setUserProfile } from '../../redux/action_creators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  constructor(props){
    super(props);
    this.userID = this.props.match.params.userID;
  }

  componentDidMount() {
    if(!this.userID) {
      this.fetchProfile(2);
    }
    this.fetchProfile(this.userID);
  };

  fetchProfile(userID) {
    const url = `https://social-network.samuraijs.com/api/1.0/profile/${userID}`;
    axios.get(url)
      .then(response => {
        const profileData = response.data; 
        console.log(profileData);
        this.props.setUserProfile(profileData);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { profile } = this.props;
    return (
      <div>
        <Profile profile={profile} />
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  profile: state.profilePageData.profile
});

const mapDispatchToProps = {
  setUserProfile
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
);
