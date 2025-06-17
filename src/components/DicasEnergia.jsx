import React from "react";
import { CardContent } from "./ui/card";

const dicas = [
  "Desligue aparelhos da tomada quando não estiver usando.",
  "Aproveite a luz natural durante o dia.",
  "Use lâmpadas de LED, que são mais econômicas.",
  "Evite abrir a geladeira muitas vezes.",
  "Regule o chuveiro para o modo verão sempre que possível."
];

export function DicasEnergia() {
  return (
    <CardContent className="pt-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span role="img" aria-label="lightbulb">💡</span> Dicas para Economizar Energia
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        {dicas.map((dica, index) => (
          <li key={index}>{dica}</li>
        ))}
      </ul>
    </CardContent>
  );
}
