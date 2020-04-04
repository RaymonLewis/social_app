import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

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
          render={() => <UsersContainer />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
