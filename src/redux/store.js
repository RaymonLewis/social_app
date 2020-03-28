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
  setState: function(type, data) {
    switch (type) {
      case 'ADD_NEW_POST':
        const newPost = data;
        const posts = this._state.profilePageData.postsData;
        const newPostsList = [...posts, newPost];
        this._state.profilePageData.postsData = newPostsList;
        console.log('New Post Was Added to the state. We need to notify subscribers');
        //Send notification to all observers after the state changed.
        this.notify(this._state);
        break;
      default:
        break;
    };
  },
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
  }
};

const addPost = (text) => {
  const newPost = {
    id: 1212121,
    message: text,
    likesCount: 0
  };
  store.setState('ADD_NEW_POST', newPost);
};

export { store, addPost };