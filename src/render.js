import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          addPost={addPost}
          // state={state}
          posts={state.profilePage.posts}
          dialogs={state.dialogsPage.dialogs}
          messages={state.dialogsPage.messages}
          friends={state.sideBarPage.friends}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
}
