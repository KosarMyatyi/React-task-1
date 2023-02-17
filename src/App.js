import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Navbar/Sidebar/Sidebar';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile/*" element={<Profile 
          posts={props.posts} 
          dispatch={props.dispatch} 
          newPostText={props.newPostText} 
          />} />

          <Route path="/dialogs/*" element={<Dialogs 
          messages={props.messages} 
          dialogs={props.dialogs} 
          dispatch={props.dispatch} 
          newMessageBody={props.newMessageBody} 
          />} />

          <Route path="/friends/*" element={<Sidebar 
          friends={props.friends} />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
