import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import About from './Pages/About';
import FooterComp from './Components/FooterComp';
import Header from './Components/Header';
import PageNotFound from './Pages/PageNotFound';
import PrivateRoute from './Components/PrivateRoute';
import Dashboard from './Pages/Dashboard';
import HomesPages from './Pages/HomePages';

const App = () => {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/signin" element={<Signin/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/homepages" element={<HomesPages/>} />
  <Route path="*" element={<PageNotFound/>} />
  <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
  </Routes>
  <FooterComp/>
  </BrowserRouter>
  );
};

export default App;