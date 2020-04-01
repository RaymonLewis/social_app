import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';
import { Provider } from './StoreContext';
import store from './redux/redux_store';

import './index.css'



const AppContainer = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Provider>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

//Initial Render
AppContainer();

//Function to be called when the state is changed. We may provide a select function to watch for the particular
// part of the store

//Subscribe component for updates from the store. It will be notified when the state is changed
store.subscribe(AppContainer);