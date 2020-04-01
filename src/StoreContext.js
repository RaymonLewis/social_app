import React from 'react';
import store from './redux/redux_store';

export const StoreContext = React.createContext();

export const Provider = (props) => {
  return(
    <StoreContext.Provider value={store}>
      {/* We do not know what will be inside this component so we are using the placeholder */}
      {props.children}
    </StoreContext.Provider>
  );
};



