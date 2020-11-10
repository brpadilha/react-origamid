import React, { useState, useEffect } from "react";

// import { Container } from './styles';

function Product({ produto }) {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [dados, produto]);

  if (!dados) return null;
  return (
    <div>
      <p>{dados.nome}</p>
      <p>R$ {dados.preco}</p>
    </div>
  );
}

export default Product;
