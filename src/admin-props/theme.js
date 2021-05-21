import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    direction: "rtl",
    type: "light", // Switching the dark mode on is a single property value change.
  },
});
