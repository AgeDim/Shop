import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";

const App = () => {
  return(
      <BrowserRouter>
          <NavBar/>
          <AppRouter/>
          <FooterBar/>
      </BrowserRouter>
  );

};

export default App;
