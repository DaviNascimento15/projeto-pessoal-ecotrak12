import React from "react";

export function Button({ children, ...props }) {
  return (
    <button
      className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 w-full"
      {...props}
    >
      {children}
    </button>
  );
}