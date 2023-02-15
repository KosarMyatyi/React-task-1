import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state'
import { addMessage } from './redux/state'
import { updateNewMessageText } from './redux/state'



const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {

    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
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


rerenderEntireTree(state);

subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
