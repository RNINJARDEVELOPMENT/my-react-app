import React from "react";

import "./App.css";

import Nav from "./components/Nav";
import Employees from "./components/Employees";
import Employee from "./components/Employee";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav /> 
        <Switch>
          <Route exact path="/">
            <Employees />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/employee/:id" component={Employee}></Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch> 
    </BrowserRouter>
  );
}

export default App;
