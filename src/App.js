import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Trending from './components/Trending';
import Profile from './components/Profile';
import Auth from './components/Auth';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
);

export default App;
