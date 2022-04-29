import React, { Fragment } from "react";
//Components
import Header from "./components/Header";
import Home from "./components/Home";

//Styles
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
