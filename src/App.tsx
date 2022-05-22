import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Contact } from "./pages/Contact/Contact";
import { MilkBox } from "./pages/Tips/TipDetails/MilkBox";
import { Tips } from "./pages/Tips/Tips";
import { Maps } from "./pages/Maps/Maps";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/tips" exact component={Tips} />
          <Route path="/tips/milk" component={MilkBox} />
          <Route path="/maps" component={Maps} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
