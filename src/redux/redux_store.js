import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs_reducer';
import profileReducer from './profile_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  dialogsPageData: dialogsReducer, 
  profilePageData: profileReducer,
  usersPageData: usersReducer
});
const store = createStore(rootReducer);

window.store = store;

export default store;
