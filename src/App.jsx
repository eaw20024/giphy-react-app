import React from "react";
import Giphy from "./components/Giphy";
import {BrowserRouter, Route, Switch}  from "react-router-dom";
import Favorites from "./components/Favorites"
import "./App.css";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path='/favorites' component={Favorites}/>
        <Route path="/"  component={Giphy} />
       </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;