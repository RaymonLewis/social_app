import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';
import { store } from './redux/store';


import './index.css';
import * as serviceWorker from './serviceWorker';

const state = store.getState();
const dispatch = store.dispatch.bind(store);

const AppContainer = {
  render: function(state) {
    ReactDOM.render(
      <React.StrictMode>
        <Router>
          <App state={state} dispatch={dispatch} />
        </Router>
      </React.StrictMode>,
      document.getElementById('root')
    );
  },
  update: function() {
    this.render(state)
  }
};

//Initial render
AppContainer.render(state);

//Subscribe component for updates from the store. It will be notified when the state is changed
store.subscribe(AppContainer);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
