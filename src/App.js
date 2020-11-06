import React, { useState } from "react";

// import { Container } from './styles';

function App() {
  const [validate, setValidate] = useState(true);
  function handleClick() {
    setValidate(!validate);

    const teste = "Bruno";

    return;
  }
  return (
    <>
      <button onClick={handleClick}>clique aqui</button>
      <h1>{validate ? "Verdadeiro" : "Falso"}</h1>
    </>
  );
}

export default App;
