import React from "react";

export function Card({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`mt-2 ${className}`}>
      {children}
    </div>
  );
}