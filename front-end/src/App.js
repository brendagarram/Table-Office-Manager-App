import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Home from "./Layouts/Home/Home"
import Register from "./Components/Login/Register/Register";
import AlterUser from "./Components/alteruser/alteruser";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/registrarse" component={Register}></Route>
        <Route exact path="/alteruser" component={AlterUser}></Route>

        <Route exact path="/main" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
