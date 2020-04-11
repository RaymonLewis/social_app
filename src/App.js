import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Login as LoginPage } from './components/Login/Login';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
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
          <Route 
          exact path='/login' 
          render={() => <LoginPage />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
