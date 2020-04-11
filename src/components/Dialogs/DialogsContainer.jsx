import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../redux/action_creators';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPageData.dialogsData,
    messagesData: state.dialogsPageData.messagesData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (messageText) => dispatch(addMessageActionCreator(messageText))
  }
};

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
