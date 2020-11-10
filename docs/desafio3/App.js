import React from "react";

import Header from "./components/Header";
import Produtos from "./components/Produtos";
import Home from "./components/Home";
const App = () => {
  const { pathname } = window.location;
  return (
    <>
      <Header />
      {pathname === "/produtos" ? <Produtos /> : <Home />}
    </>
  );
};
export default App;
