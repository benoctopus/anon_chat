import React, { memo } from "react";
import classnames from "classnames";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(),
    borderRadius: 12,
    height: `90%`,
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(),
      height: "unset !important"
    }
  }
}));

const BannerBox = (props: any) => {
  const styles = useStyles(0);

  return (
    <Paper
      {...props}
      className={classnames(props.className, styles.root)}
      elevation={7}
    />
  );
};

export default memo(BannerBox);
