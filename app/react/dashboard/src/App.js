import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoggedLayout } from './layout/LoggedLayout';
import { LoginPage } from './routes/LoginPage';
import { RegisterPage } from './routes/RegisterPage';
import { NotFound404 } from './routes/NotFound404';

import SettingsContextProvider from './store/Provider';

import './App.css';

const App = () => {
  return (
    <div className='App tw-bg-black-dark'>
      <SettingsContextProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            {/* TODO: Register Page */}
            <Route path='/404' element={<NotFound404 />} />
            <Route path='*' element={<LoggedLayout />} />
          </Routes>
        </Router>
      </SettingsContextProvider>
    </div>
  );
};

export default App;
