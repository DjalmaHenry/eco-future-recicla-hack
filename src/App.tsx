import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Contact } from "./pages/Contact/Contact";
import { Tips } from "./pages/Tips/Tips";
import { MilkBox } from "./pages/Tips/TipDetails/MilkBox/MilkBox";
import { CardboardBox } from "./pages/Tips/TipDetails/CardboardBox/CardboardBox";
import { FlorescentBulb } from "./pages/Tips/TipDetails/FlorescentBulb/FlorescentBulb";
import { MetalPackaging } from "./pages/Tips/TipDetails/MetalPackaging/MetalPackaging";
import { PetBottle } from "./pages/Tips/TipDetails/PetBottle/PetBottle";
import { Maps } from "./pages/Maps/Maps";
import { Score } from "./pages/Score/Score";

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
          <Route path="/tips/cardboard" component={CardboardBox} />
          <Route path="/tips/bulb" component={FlorescentBulb} />
          <Route path="/tips/metal" component={MetalPackaging} />
          <Route path="/tips/pet" component={PetBottle} />
          <Route path="/maps" component={Maps} />
          <Route path="/score" component={Score} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
