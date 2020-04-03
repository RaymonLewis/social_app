import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='content_wrapper'>
        <Switch>
          <Route 
          exact path='/profile' 
          render={() => <Profile />} />
          <Route 
          exact path='/dialogs' 
          render={() => <DialogsContainer />} />
          <Route 
          exact path='/users' 
          render={() => <Users />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
