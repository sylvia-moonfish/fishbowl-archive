import { purple } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

export const DarkTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "Noto Sans KR",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    type: "dark",
    primary: {
      main: purple[900],
    },
    secondary: {
      main: purple[100],
    },
  },
});
export const LightTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "Noto Sans KR",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    type: "light",
    primary: {
      main: purple[100],
    },
    secondary: {
      main: purple[900],
    },
  },
});
