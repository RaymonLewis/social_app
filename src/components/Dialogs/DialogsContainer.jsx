import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../redux/action_creators';
import { connect } from 'react-redux';

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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
