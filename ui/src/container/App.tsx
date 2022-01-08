import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from '../layout/Navbar/Navbar';
import User from '../components/User/User';
import Home from '../container/Home/Home';
import About from '../container/About/About';
import NotFound from '../container/NotFound/NotFound';

import GithubState from '../context/GithubContext/GithubState';
import AlertState from '../context/AlertContext/AlertState';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

const App: React.FC = (): JSX.Element => {
  return (
    <GithubState>
      <AlertState>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:login' element={<User />} />
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
      </AlertState>
    </GithubState>
  );
};

export default App;
