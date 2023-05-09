import { createTheme } from "@mui/material"
import { typography } from "constants/typography"

export const themeOverrides = {
  palette: {
    background: {
      default: "#bce4f7",
    },
  },
  typography,
  spacing: (factor: number) => [0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 80, 120, 160][factor],
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          background: "#012530",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::after, *::before": {
          boxSizing: "border-box",
        },
      },
    },
  },
}

export type CustomTheme = typeof theme
export type ThemeOverrides = typeof themeOverrides

export const theme = createTheme(themeOverrides, {})
