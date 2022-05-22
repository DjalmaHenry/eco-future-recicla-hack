import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
