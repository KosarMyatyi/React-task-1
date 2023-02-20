import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Navbar/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile/*" element={<Profile store={props.store} />} />

          <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />

          <Route path="/friends/*" element={<Sidebar friends={props.friends} />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
