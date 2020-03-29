import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = ({ state, dispatch }) => {
  const {
    dialogsPageData,
    profilePageData,
  } = state;

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='content_wrapper'>
        <Switch>
          <Route 
          exact path='/profile' 
          render={() => <Profile state={profilePageData} dispatch={dispatch} />} />
          <Route 
          exact path='/dialogs' 
          render={() => <Dialogs state={dialogsPageData} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
