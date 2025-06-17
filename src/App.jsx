import React, { useState } from "react";
import { Card } from "./components/ui/card";
import { GastosForm } from "./components/GastosForm";
import { GastosLista } from "./components/GastosLista";
import { DicasEnergia } from "./components/DicasEnergia";

export default function App() {
  const [gastos, setGastos] = useState([]);

  const adicionarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Controle de Gastos de Energia</h1>
      <Card>
        <GastosForm onAdd={adicionarGasto} />
      </Card>
      <Card>
        <GastosLista gastos={gastos} />
      </Card>
      <Card>
        <DicasEnergia />
      </Card>
    </div>
  );
}