"use client";
import { Toaster as ToasterCore } from "react-hot-toast";

export function Toaster() {
  return (
    <ToasterCore
      toastOptions={{
        className: "dark:bg-background-400 dark:text-current",
        duration: 5000,
        style: {
          width: "100%",
          maxWidth: "500px",
        },
      }}
    />
  );
}
