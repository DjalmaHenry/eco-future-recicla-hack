import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Tips } from "./pages/Tips/Tips";
import { MilkBox } from "./pages/Tips/TipDetails/MilkBox";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/tips" exact component={Tips} />
        <Route path="/tips/milk" component={MilkBox} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
