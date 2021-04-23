import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
    fontWeightLight: "200",
  },
  palette: {
    primary: {
      main: "#9FBC95",
      light: "#edf2eb",
    },
    secondary: {
      main: "#515151",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
