import { ADD_POST, ADD_MESSAGE } from "./action_types";

/**
 Action creators aren't a mandatory. They are small helpers to create the action object that will be later sent to the 
 store via the dispatch method. We can manualy create action object\, but this composition allows us to build
 more modular and maintainable code
 */

const addPostActionCreator = (data) => {
  const action = {
    type: ADD_POST,
    data: data
  };
  return action;
};

const addMessageActionCreator = (data) => {
  const action = {
    type: ADD_MESSAGE,
    data: data
  }
  return action;
};

export {
  addPostActionCreator,
  addMessageActionCreator
};