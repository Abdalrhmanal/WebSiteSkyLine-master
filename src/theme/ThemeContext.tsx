import React, { createContext, useContext, useEffect, useState } from "react";
import { PaletteMode, ThemeProvider, CssBaseline } from "@mui/material";
import getTheme from "./Theme";

const ThemeContext = createContext<{
  mode: PaletteMode;
  toggleDarkMode: () => void;
} | null>(null);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>("light");

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode") as PaletteMode | null;
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", mode);
  }, [mode]);

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeContextProvider");
  }
  return context;
}
