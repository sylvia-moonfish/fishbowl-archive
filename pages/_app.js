import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

import App from "next/app";
import Head from "next/head";
import { withRouter } from "next/router";

import React from "react";

import { HrefArray } from "../data/main-menu";
import SiteInfo from "../data/site-info";
import AppBarImpl from "../src/components/layout/app-bar-impl";
import DrawerImpl from "../src/components/layout/drawer-impl";
import { DarkTheme, LightTheme } from "../src/theme";

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "100%",
  },
  root: {
    display: "flex",
  },
});

class FishbowlApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      currentTheme: "dark",
      toggleTheme: () => {
        this.setState({
          ...this.state,
          currentTheme: this.state.currentTheme === "dark" ? "light" : "dark",
        });
      },

      isMobileOpen: false,
      setMobileOpen: (value) => {
        this.setState({
          ...this.state,
          isMobileOpen: value,
        });
      },
      toggleMobileOpen: () => {
        this.setState({
          ...this.state,
          isMobileOpen: !this.state.isMobileOpen,
        });
      },

      currentMenu: "",
    };
  }

  componentDidMount() {
    if (document) {
      const jssStyles = document.querySelector("#jss-server-side");

      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }

    if (typeof window !== "undefined" && window.localStorage.getItem("theme")) {
      this.setState({
        ...this.state,
        currentTheme: window.localStorage.getItem("theme"),
      });
    }

    if (typeof window !== "undefined") {
      window.gtag("config", SiteInfo.gtmId, {
        page_location: this.props.router.pathname,
      });

      this.props.router.events.on("routeChangeComplete", (url) => {
        this.determineCurrentMenu();

        window.gtag("config", SiteInfo.gtmId, {
          page_location: url,
        });
      });
    }
  }

  determineCurrentMenu() {
    if (this.props.router.pathname === "/") {
      this.setState({
        ...this.state,
        currentMenu: "",
      });
    } else {
      let targetHref = "";

      HrefArray.forEach((href) => {
        if (this.props.router.pathname.indexOf(href) !== -1) {
          targetHref = href;
        }
      });

      this.setState({
        ...this.state,
        currentMenu: targetHref,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <meta
            content="minimum-scale=1, initial-scale=1, width=device-width"
            name="viewport"
          />

          <meta content="#4a148c" name="theme-color" />
          <link href="/manifest.json" rel="manifest" />

          <link href="/192.png" rel="icon" type="image/png" />
          <link href="/192.png" rel="apple-touch-icon" />

          <meta content="website" property="og:type" />
          <meta content="/512.png" property="og:image" />

          <meta content="summary" name="twitter:card" />
          <meta content={"@" + SiteInfo.twitterUsername} name="twitter:site" />
          <meta content="/512.png" name="twitter:image" />

          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
            rel="stylesheet"
          />

          <script
            async
            src={
              "https://www.googletagmanager.com/gtag/js?id=" + SiteInfo.gtmId
            }
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag() {
dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', '${SiteInfo.gtmId}');`,
            }}
          />
        </Head>
        <ThemeProvider
          theme={this.state.currentTheme === "dark" ? DarkTheme : LightTheme}
        >
          <CssBaseline />
          <main className={this.props.classes.root}>
            <AppBarImpl
              isMobileOpen={this.state.isMobileOpen}
              toggleMobileOpen={this.state.toggleMobileOpen}
              toggleTheme={this.state.toggleTheme}
            />
            <DrawerImpl
              currentMenu={this.state.currentMenu}
              currentTheme={this.state.currentTheme}
              isMobileOpen={this.state.isMobileOpen}
              setMobileOpen={this.state.setMobileOpen}
              toggleMobileOpen={this.state.toggleMobileOpen}
            />
            <Container className={this.props.classes.content}>
              <Toolbar />
              <this.props.Component
                {...this.props.pageProps}
                currentTheme={this.state.currentTheme}
              />
            </Container>
          </main>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(FishbowlApp));
