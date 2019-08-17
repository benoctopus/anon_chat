import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UserProvider, init } from "../util/firebase";
import theme from "../util/theme";

interface AppState {
  initialized: boolean;
}

class MyApp extends App {
  state: AppState = {
    initialized: false
  };

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }

    if (process.browser) {
      init();
      this.setState({ initialized: true });

      window.scroll({
        top: 2500,
        left: 0,
        behavior: "smooth"
      });

      window.scrollBy({
        top: 100,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const { initialized } = this.state;
    return (
      <Container>
        <Head>
          <title>Chat?</title>
        </Head>
        <ThemeProvider theme={theme}>
          <UserProvider initialized={initialized}>
            <CssBaseline />
            <Component {...pageProps} />
          </UserProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
