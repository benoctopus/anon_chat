import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import IntroBanner from "./IntroBanner";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: "linear-gradient(to top right, #000000B4, #00000000)",
    display: "flex",
    flexFlow: "column nowrap",
    height: "100vh",
    alignItems: "center",
    maxHeight: "100vh",
    borderRadius: 0,
    [theme.breakpoints.up("md")]: {
      height: "80vh",
      maxHeight: "80vh"
    },
    flexGrow: 1
  },
  spacer: {
    paddingTop: theme.spacing(7),
    display: "inline-block"
  }
}));

const LoginScreen = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.root} elevation={6}>
      <div className={styles.spacer} />
      <IntroBanner />
    </Paper>
  );
};

export default LoginScreen;
