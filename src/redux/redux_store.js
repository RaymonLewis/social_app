import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from './dialogs_reducer';
import profileReducer from './profile_reducer';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  dialogsPageData: dialogsReducer, 
  profilePageData: profileReducer,
  usersPageData: usersReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;

export default store;
