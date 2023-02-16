import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {

    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={store.getState()}
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText}
                    dispatch={store.dispatch.bind(store)}

                    dialogs={store.getState().dialogsPage.dialogs}
                    newMessageText={store.getState().dialogsPage.newMessageText}
                    messages={store.getState().dialogsPage.messages}


                    friends={store.getState().sideBarPage.friends}

                />
            </React.StrictMode>
        </BrowserRouter>
    );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
