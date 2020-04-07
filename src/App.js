import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
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
          path='/profile/:userID?' 
          render={() => <ProfileContainer />} />
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
