import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
    fontWeightLight: "200",
  },
  palette: {
    primary: {
      main: "#9FBC95",
      light: "#eef3ec",
    },
    secondary: {
      main: "#000000",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
