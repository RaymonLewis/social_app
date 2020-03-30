import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs_reducer';
import profileReducer from './profile_reducer';

const rootReducer = combineReducers({
  dialogsPageData: dialogsReducer, 
  profilePageData: profileReducer
});
const store = createStore(rootReducer);

export default store;
