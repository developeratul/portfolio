"use client";
import React from "react";

import type { AppProps } from "@/types";
import storage from "@/utils/storage";

const STORAGE_KEY = "color-mode";

export type ColorModes = "dark" | "light";

export const ColorModeContext = React.createContext<{
  mode: ColorModes;
  toggleColorMode: () => void;
}>({ mode: "dark", toggleColorMode: () => null });

export function ColorMode(props: AppProps) {
  const { children } = props;
  const [mode, setMode] = React.useState<ColorModes>("dark");

  const toggleColorMode = (currentMode?: ColorModes) => {
    if (currentMode) {
      storage.set(STORAGE_KEY, currentMode);
      document.documentElement.classList.add(currentMode);
      setMode(currentMode);
    } else {
      setMode((prevMode) => {
        const newMode = prevMode === "light" ? "dark" : "light";
        storage.set(STORAGE_KEY, newMode);
        document.documentElement.classList.replace(prevMode, newMode);
        return newMode;
      });
    }
  };

  const values = React.useMemo(() => ({ toggleColorMode, mode }), [mode]);

  React.useEffect(() => {
    const currentMode = storage.get(STORAGE_KEY);
    console.log(currentMode);
    toggleColorMode(currentMode ?? "dark");
  }, []);

  return <ColorModeContext.Provider value={values}>{children}</ColorModeContext.Provider>;
}

export const useColorModeContext = () => React.useContext(ColorModeContext);

export const ColorModeToggler = () => {
  const { mode, toggleColorMode } = useColorModeContext();
  return <button onClick={() => toggleColorMode()}>{mode === "light" ? "Dark" : "Light"}</button>;
};
