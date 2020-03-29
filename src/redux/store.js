//Action types help avoiding typos when you provide the action name for action creator
const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';

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
      case ADD_POST:
        const newPost = {
          id: 1212121,
          message: action.data,
          likesCount: 0
        };
        this._state.profilePageData.postsData.push(newPost);
        //Send notification to all observers after the state changed.
        this.notify(this._state);
        break;
      case ADD_MESSAGE:
        console.log('Inside Add Message Action');
        console.log(action.data);
        //Create a new message object containing the message sent by the UI component via the action provided to dispatch function
        const newMessage = {
          id: 123,
          message: action.data
        };
        //Add newly created message to our messagesData array inside the private variable state
        this._state.dialogsPageData.messagesData.push(newMessage);
        //Send notificitation to all subscribers so they can change the interface accordingly to the new data
        this.notify(this._state);
        break;
      default:
        break;
    }
  }
};

//Action Creators
const addPostActionCreator = (data) => {
  const action = {
    type: ADD_POST,
    data: data
  };
  return action;
}

const addMessageActionCreator = (data) => {
  const action = {
    type: ADD_MESSAGE,
    data: data
  }
  return action;
}

export {
  store, 
  addPostActionCreator, 
  addMessageActionCreator
};