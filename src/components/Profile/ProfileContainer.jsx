import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getProfile } from '../../redux/thunks/thunks';


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
    this.props.getProfile(userID);
  }

  render() {
    const profile = this.props.profile
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
  getProfile
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
);
