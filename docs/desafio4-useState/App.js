import React, { useState } from "react";
import Product from "../docs/desafio4-useState/Product";
const App = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );

    const json = await response.json();

    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button style={{ margin: "1px" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: "1px" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "1px" }} onClick={handleClick}>
        tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Product dados={dados} />}
    </>
  );
};
export default App;
