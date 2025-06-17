import React from "react";
import { CardContent } from "./ui/card";

export function GastosLista({ gastos }) {
  const total = gastos.reduce((acc, curr) => acc + curr.custo, 0).toFixed(2);

  return (
    <CardContent className="pt-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span role="img" aria-label="raio">⚡</span> Gastos Registrados
      </h2>
      {gastos.length === 0 ? (
        <p className="text-gray-500">Nenhum gasto registrado.</p>
      ) : (
        <ul className="space-y-2">
          {gastos.map((g, index) => (
            <li key={index} className="flex justify-between">
              <span>{g.descricao} ({g.consumo} kWh)</span>
              <span>R$ {g.custo.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-bold text-right">Total: R$ {total}</div>
    </CardContent>
  );
}
