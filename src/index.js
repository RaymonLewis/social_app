import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';
import store from './redux/redux_store';

import './index.css'

//const state = store.getState();
//const dispatch = store.dispatch.bind(store);

const AppContainer = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App store={store}/>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
//Initial render
AppContainer(store);
//Function to be called when the state is changed. We may provide a select function to watch for the particular
// part of the store
const observeStore = () => {
  AppContainer(store);
}
//Subscribe component for updates from the store. It will be notified when the state is changed
store.subscribe(observeStore);