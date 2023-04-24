import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  HashRouter,
  Router
} from "react-router-dom";

import {BrowserRouter} from "react-router-dom" 
import NotionHandler from './components/NotionHandler';
import HomePage from './components/Home';
function App() {


return(

  <BrowserRouter>
  <Routes>

      <Route exact path="notion" element={
          <>
          <NotionHandler />
          </>} 
          />

      <Route exact path="/" element={
        <>
        <HomePage />
        </>} 
        />
 
  </Routes>

  </BrowserRouter>

);


}

export default App;
