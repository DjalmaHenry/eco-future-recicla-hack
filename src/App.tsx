import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
