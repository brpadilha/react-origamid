import React, { useState } from "react";

// import { Container } from './styles';
import Input from "./components/Input";
import Select from "./components/Select";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";

function App() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("");
  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <>
      <form action="">
        <h2>Frutas</h2>
        <Checkbox
          options={["Uva", "Laranja", "Limão"]}
          value={fruta}
          setValue={setFruta}
        />
        <Checkbox
          options={["Termos e Condições"]}
          value={termos}
          setValue={setTermos}
        />
        <h2>Cores</h2>
        <Radio
          options={["azul", "verde", "amarelo"]}
          value={cor}
          setValue={setCor}
        />

        <Select
          options={["Notebook", "Smartphone", "Tablet"]}
          value={produto}
          setValue={setProduto}
        />

        <Input id="nome" label="Nome" value={nome} setValue={setNome} />
        <Input
          id="email"
          label="Email"
          value={email}
          setValue={setEmail}
          type="email"
          required
        />
        <Input
          id="nome"
          label="Senha"
          type="password"
          value={senha}
          setValue={setSenha}
        />
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
