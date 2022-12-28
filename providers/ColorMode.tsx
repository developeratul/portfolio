"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
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
  const [mounted, setMounted] = React.useState(false);

  const toggleColorMode = (currentMode?: ColorModes) => {
    if (currentMode) {
      storage.set(STORAGE_KEY, currentMode);
      document.documentElement.classList.add(currentMode);
      document.documentElement.style.colorScheme = currentMode;
      setMode(currentMode);
    } else {
      setMode((prevMode) => {
        const newMode = prevMode === "light" ? "dark" : "light";
        storage.set(STORAGE_KEY, newMode);
        document.documentElement.classList.replace(prevMode, newMode);
        document.documentElement.style.colorScheme = newMode;
        return newMode;
      });
    }
  };

  const values = React.useMemo(() => ({ toggleColorMode, mode }), [mode]);

  React.useEffect(() => {
    setMounted(true);
    const currentMode = storage.get(STORAGE_KEY);
    toggleColorMode(currentMode ?? "dark");
  }, []);

  if (!mounted) return null;

  return <ColorModeContext.Provider value={values}>{children}</ColorModeContext.Provider>;
}

export const useColorModeContext = () => React.useContext(ColorModeContext);

export const ColorModeToggler = () => {
  const { mode, toggleColorMode } = useColorModeContext();
  return (
    <button aria-label="color-theme-toggler" onClick={() => toggleColorMode()}>
      {mode === "dark" ? <SunIcon width={20} height={20} /> : <MoonIcon width={20} height={20} />}
    </button>
  );
};
