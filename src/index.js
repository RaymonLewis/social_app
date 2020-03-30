import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';
import store from './redux/redux_store';

import './index.css';
import * as serviceWorker from './serviceWorker';

const state = store.getState();
const dispatch = store.dispatch.bind(store);

const AppContainer = (state, dispatch) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} dispatch={dispatch} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
//Initial render
AppContainer(state,dispatch);
//Function to be called when the state is changed. We may provide a select function to watch for the particular
// part of the store
const observeStore = () => {
  const state = store.getState();
  AppContainer(state, dispatch);
}
//Subscribe component for updates from the store. It will be notified when the state is changed
store.subscribe(observeStore);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
