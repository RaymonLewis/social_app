import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { StoreContext } from './StoreContext';

const App = (props) => {
  debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='content_wrapper'>
        <Switch>
          <Route 
          exact path='/profile' 
          render={() => <Profile store={store} />} />
          <Route 
          exact path='/dialogs' 
          render={() => <DialogsContainer store={store} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
