import React, { useState } from "react";
import { CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function GastosForm({ onAdd }) {
  const [descricao, setDescricao] = useState("");
  const [kwh, setKwh] = useState("");
  const preco = 0.90;

  const adicionarGasto = () => {
    if (descricao && kwh) {
      const consumo = parseFloat(kwh);
      const custo = consumo * preco;
      onAdd({ descricao, consumo, custo });
      setDescricao("");
      setKwh("");
    }
  };

  return (
    <CardContent className="space-y-4 pt-6">
      <Input
        placeholder="Descrição (ex: Geladeira)"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <Input
        placeholder="Consumo em kWh"
        type="number"
        value={kwh}
        onChange={(e) => setKwh(e.target.value)}
      />
      <Button onClick={adicionarGasto}>Adicionar Gasto</Button>
    </CardContent>
  );
}