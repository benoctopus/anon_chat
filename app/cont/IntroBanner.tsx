import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  useTheme,
  Zoom,
  Fade,
  useMediaQuery
} from "@material-ui/core";
import BannerBox from "../comp/BannerBox";

const useStyles = makeStyles(theme => ({
  root: {
    height: `calc(100% - ${theme.spacing(7)}px)`,
    display: "flex",
    flexFlow: "Column nowrap",
    padding: theme.spacing(1),
    width: "100vw",
    maxWidth: 1300
  },
  titleBox: {
    height: "fit-content",
    padding: theme.spacing(),
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "between"
  },
  boxes: {
    display: "flex",
    alignItems: "center",
    flexGrow: 8,
    flexFlow: "column nowrap",
    [theme.breakpoints.up("md")]: {
      flexFlow: "row nowrap"
    }
  },
  bigBox: {
    width: "100%"
  }
}));

const IntroBanner = () => {
  const styles = useStyles();
  const theme = useTheme();

  const mdup = useMediaQuery(theme.breakpoints.up("md"));
  const [boxIn, setBoxIn] = useState(false);

  useEffect(() => {
    if (process.browser) setBoxIn(true);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.titleBox}>
        <Fade in={boxIn}>
          <Typography
            variant="h1"
            style={{
              color: "white",
              width: "fit-content",
              flexGrow: 1,
              whiteSpace: "nowrap",
              padding: theme.spacing()
            }}
          >
            Chat... <br /> With {!mdup && <br />} Strangers?
          </Typography>
        </Fade>
        <Zoom in={boxIn} timeout={2650}>
          <BannerBox
            className={!mdup && styles.bigBox}
            style={{
              flexGrow: 2,
              backgroundColor: theme.palette.primary.light
            }}
          />
        </Zoom>
        {mdup && (
          <Zoom in={boxIn} timeout={1000}>
            <BannerBox
              className={!mdup && styles.bigBox}
              style={{
                flexGrow: 3,
                backgroundColor: theme.palette.secondary.light
              }}
            />
          </Zoom>
        )}
      </div>
      <div className={styles.boxes}>
        <Zoom in={boxIn} timeout={1200}>
          <BannerBox
            className={!mdup && styles.bigBox}
            style={{
              flexGrow: 6,
              backgroundColor: theme.palette.secondary.light
            }}
          />
        </Zoom>
        <Zoom in={boxIn} timeout={1500}>
          <BannerBox
            className={!mdup && styles.bigBox}
            style={{ flexGrow: 2, backgroundColor: theme.palette.error.light }}
          />
        </Zoom>
        <Zoom in={boxIn} timeout={2000}>
          <BannerBox
            className={!mdup && styles.bigBox}
            style={{
              flexGrow: 1,
              backgroundColor: theme.palette.primary.light
            }}
          />
        </Zoom>
      </div>
    </div>
  );
};

export default IntroBanner;
