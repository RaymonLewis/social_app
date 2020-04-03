import React from 'react';
import { StoreContext } from './StoreContext';

export const Connect = (WrappedComponent) => {
  return(
    <StoreContext.Consumer>
      {store => (
        <WrappedComponent store={store} />
      )}
    </StoreContext.Consumer>
  )
}
