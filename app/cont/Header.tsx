import React, { useContext } from "react";
import { AppBar, makeStyles, Button } from "@material-ui/core";
import { UserContext, googlePopupSignIn } from "../util/firebase";

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(7),
    display: "flex",
    flexFlow: "row-reverse nowrap",
    backgroundColor: "#00000000",
    borderRadius: 8,
    width: "fit-content"
  }
}));

const Header = () => {
  const user = useContext(UserContext);
  const styles = useStyles();
  console.log(user);
  return (
    <AppBar className={styles.root} position="fixed" elevation={0}>
      <Button onClick={googlePopupSignIn} variant="outlined">
        Get Started
      </Button>
    </AppBar>
  );
};

export default Header;
