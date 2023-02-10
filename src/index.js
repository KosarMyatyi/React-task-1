import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 22 },
  { id: 2, message: "It's my first post", likesCount: 47 },
  { id: 3, message: "blabla", likesCount: 100 },
  { id: 4, message: "Amazing", likesCount: 15993 }
];

let dialogs = [
  { id: 1, name: 'Marya' },
  { id: 2, name: 'Viktorya' },
  { id: 3, name: 'Lyudmila' },
  { id: 4, name: 'D.Dima' },
  { id: 5, name: 'Dimas' },
  { id: 6, name: 'Sasha' },
  { id: 7, name: 'Roma' }
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your day?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
  { id: 6, message: 'Yo' },
  { id: 7, message: 'Yo' }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
