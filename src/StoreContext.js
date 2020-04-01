import React from 'react';
import store from './redux/redux_store';

export const StoreContext = React.createContext();

export const Provider = (props) => {
  return(
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};



