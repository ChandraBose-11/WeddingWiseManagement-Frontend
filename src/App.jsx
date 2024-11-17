import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import About from "./Pages/About";
import FooterComp from "./Components/FooterComp";
import Header from "./Components/Header";
import PageNotFound from "./Pages/PageNotFound";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import HomesPages from "./Pages/HomePages";
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute";
import Resort from "./Pages/Resort";
import EditResort from "./Pages/EditResort";
import Catering from "./Pages/Catering";
import Photography from "./Pages/Photography";
import Makeup from "./Pages/Makeup";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepages" element={<HomesPages />} />
        <Route path="*" element={<PageNotFound />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          {/* <Route path="/create-resort" element={<CreateResort />} /> */}
          {/* <Route path="/create-catering" element={<CreateCatering/>}/>
          <Route path="/create-photo" element={<CreatePhotography/>}/>
          <Route path="/create-decoration" element={<CreateDecoration/>}/> */}
        </Route>
        <Route path="/resort" element={<Resort />} />
        <Route path="/resort/edit/:id" element={<EditResort />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/photo" element={<Photography />} />
        <Route path="/makeup" element={<Makeup/>}/>
      
      </Routes>

      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
