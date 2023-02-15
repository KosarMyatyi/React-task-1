import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state'
import {addMessage} from './redux/state'
import {updateNewMessageText} from './redux/state'



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
          addPost={addPost}
          updateNewPostText={updateNewPostText}

          dialogs={state.dialogsPage.dialogs}
          newMessageText={state.dialogsPage.newMessageText}
          messages={state.dialogsPage.messages}
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}

          
          friends={state.sideBarPage.friends}
          
        />
      </React.StrictMode>
    </BrowserRouter>
  );
}
