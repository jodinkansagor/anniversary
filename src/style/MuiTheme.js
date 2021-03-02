import { createMuiTheme } from "@material-ui/core/styles";

const SPACING_BASE = 8;
const spacing = (factor) => `${SPACING_BASE * factor}px`;

const theme = createMuiTheme({
  spacing,
  typography: {
    fontFamily:
      "Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, " +
      "Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    htmlFontSize: 14,
  },
});

export default theme;
