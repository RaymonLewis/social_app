let renderEntireTree;

let dialogsData = [
  {id: 1, name: 'Andrey'}, 
  {id: 2, name: 'Peter'}, 
  {id: 3, name: 'Lane'}, 
];

let messagesData = [
  {id: 1, message: 'How are you?'}, 
  {id: 2, message: 'Hello, i am here'}, 
  {id: 3, message: 'Do you like me?'}
]; 

let postsData = [
  {id: 1, message: 'How are you?', likesCount: 3}, 
  {id: 2, message: 'Hello, i am here', likesCount: 3}, 
  {id: 3, message: 'Do you like me?', likesCount: 1}
];

let state = {
  dialogsPageData: {
    dialogsData: dialogsData,
    messagesData: messagesData,
  },
  profilePageData: {
    postsData: postsData
  },
};

const addPost = (text) => {
  const newPost = {
    id: postsData.length + 1,
    message: text,
    likesCount: 0
  };
  postsData.push(newPost);
  renderEntireTree(state);
}

const subscribe = observer => {
  renderEntireTree = observer;
}

export { state, addPost, subscribe };