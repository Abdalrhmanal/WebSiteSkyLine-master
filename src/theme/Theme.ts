import { createTheme } from "@mui/material/styles";

const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#041742",
      },
      secondary: {
        main: "#08b1d6",
      },
      text: {
        primary: mode === "light" ? "#121212" : "#eaeaea",
        secondary: mode === "light" ? "#eaeaea" : "#ebebeb",
      },
      background: {
        default: mode === "light" ? "#eaeaea" : "#121212",
        paper: mode === "light" ? "#aeaeae" : "#212121",
      },
      error: {
        main: "#f54646",
        light: "#fddada",
        dark: "#9a0007",
        contrastText: "#eaeaea",
      },
      success: {
        main: "#34c759",
        light: "#c9ffd6",
        dark: "#2E7D32",
      },
    },
  });

export default getTheme;
