import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FA0068"
    },
    secondary: {
      main: "#FD350D"
    },
    error: {
      main: "#E30BD1"
    },
    background: {
      default: "#3B0018"
    }
  }
});

export default responsiveFontSizes(theme);
