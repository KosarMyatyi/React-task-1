import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Sidebar from './components/Navbar/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>

          <Route path="/profile/:userId?" element={<ProfileContainer />} />

          <Route path="/dialogs/" element={<DialogsContainer />} />

          <Route path="/users/" element={<UsersContainer />} />

          <Route path="/friends/" element={<Sidebar friends={props.friends} />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
