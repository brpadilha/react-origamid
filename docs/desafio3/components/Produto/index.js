import React from "react";

export default function Produto({ nome, propriedades }) {
  return (
    <div style={{ border: "solid 1px", margin: "1rem 0", padding: "1rem" }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
}
