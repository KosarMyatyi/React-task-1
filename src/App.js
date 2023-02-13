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
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/*" element={<Profile posts={props.posts} />} />
            <Route path="/dialogs/*" element={<Dialogs messages={props.messages} dialogs={props.dialogs} />} />
            <Route path="/friends/*" element={<Sidebar friends={props.friends} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
