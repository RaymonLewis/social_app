import store from './redux_store';

const observeStore = (select) => {
  const state = select(store.getState());
  return state;
};

export default observeStore;
