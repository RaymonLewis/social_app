const ADD_POST = 'ADD_POST';

const store = {
  _state: {
    dialogsPageData: {
      dialogsData: [
        {id: 1, name: 'Andrey'}, 
        {id: 2, name: 'Peter'}, 
        {id: 3, name: 'Lane'}, 
      ],
      messagesData: [
        {id: 1, message: 'How are you?'}, 
        {id: 2, message: 'Hello, i am here'}, 
        {id: 3, message: 'Do you like me?'}
      ],
    },
    profilePageData: {
      postsData: [
        {id: 1, message: 'How are you?', likesCount: 3}, 
        {id: 2, message: 'Hello, i am here', likesCount: 3}, 
        {id: 3, message: 'Do you like me?', likesCount: 1}
      ]
    }
  },
  _observers: [],
  getState: function() {
    return this._state;
  },
  subscribe: function(observer) {
    this._observers.push(observer);
  },
  notify: function(data){
    if(this._observers.length < 0) {
      alert('No observers subscribed on update');
    }
    this._observers.forEach(observer => {
      observer.update(data);
      console.log('Observer was notified');
    });
  },
  dispatch: function(action) {
    switch (action.type) {
      case 'ADD_NEW_POST':
        const newPost = {
          id: 1212121,
          message: action.data,
          likesCount: 0
        };
        this._state.profilePageData.postsData.push(newPost);
        //Send notification to all observers after the state changed.
        this.notify(this._state);
        break;
      default:
        break;
    }
  }
};

const addPostActionCreator = (data) => {
  const action = {
    type: ADD_POST,
    data: data
  };
  return action;
}

export {store, addPostActionCreator};