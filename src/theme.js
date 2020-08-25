import purple from "@material-ui/core/colors/purple";
import { createMuiTheme } from "@material-ui/core/styles";

export const DarkTheme = createMuiTheme({
  typography: {
    fontFamily: "Noto Sans KR",
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
    fontFamily: "Noto Sans KR",
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
