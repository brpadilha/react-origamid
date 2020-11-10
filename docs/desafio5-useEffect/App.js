import React, { useState, useEffect } from "react";
import Product from "./Product";

const App = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = localStorage.getItem("produto");

    if (produtoLocal) setProduto(produtoLocal);
  }, [produto]);

  function handleClick({ target }) {
    localStorage.setItem("produto", target.innerText);

    setProduto(target.innerText);
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button style={{ margin: "1px" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: "1px" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "1px" }} onClick={handleClick}>
        tablet
      </button>

      <Product produto={produto} />
    </>
  );
};
export default App;
