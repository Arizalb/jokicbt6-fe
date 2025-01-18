// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#5e7cff",
      main: "#3f51b5",
      dark: "#2a3eb1",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#7986cb",
      main: "#5c6bc0",
      dark: "#3f51b5",
      contrastText: "#ffffff",
    },
    error: {
      light: "#ff5252",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#ffffff",
    },
    success: {
      light: "#4caf50",
      main: "#2e7d32",
      dark: "#1b5e20",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          padding: "5px 10px",
        },
        containedPrimary: {
          boxShadow: "0 4px 12px rgba(63, 81, 181, 0.4)",
        },
        containedSecondary: {
          boxShadow: "0 4px 12px rgba(92, 107, 192, 0.4)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
});

export default theme;
