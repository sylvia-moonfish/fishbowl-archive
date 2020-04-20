import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import App from "next/app";
import Head from "next/head";

import React from "react";

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
  toolbar: {
    minHeight: 48,
  },
});

class FishbowlApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      currentTheme: "dark",
      darkTheme: DarkTheme,
      isMobileOpen: false,
      lightTheme: LightTheme,
      setMobileOpen: (value) => {
        this.state.isMobileOpen = value;
        this.setState(this.state);
      },
      toggleMobileOpen: () => {
        this.state.isMobileOpen = !this.state.isMobileOpen;
        this.setState(this.state);
      },
      toggleTheme: () => {
        this.state.currentTheme =
          this.state.currentTheme === "dark" ? "light" : "dark";
        this.setState(this.state);
      },
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined" && window.localStorage.getItem("theme")) {
      this.state.currentTheme = window.localStorage.getItem("theme");
      this.setState(this.state);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <meta
            content="initial-scale=1.0, width=device-width"
            name="viewport"
          />
          <meta content="website" property="og:type" />
          <meta content="summary" name="twitter:card" />
          <meta content={SiteInfo.author} name="twitter:creator" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
            rel="stylesheet"
          />
          <link href={SiteInfo.profilePicLink} rel="icon" type="image/png" />
          <script
            async
            src={
              "https://www.googletagmanager.com/gtag/js?id=" + SiteInfo.gtmId
            }
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer = window.dataLayer || []; function gtag() {dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '" +
                SiteInfo.gtmId +
                "');",
            }}
          />
        </Head>
        <ThemeProvider
          theme={
            this.state.currentTheme === "dark"
              ? this.state.darkTheme
              : this.state.lightTheme
          }
        >
          <CssBaseline />
          <main className={this.props.classes.root}>
            <AppBarImpl
              isMobileOpen={this.state.isMobileOpen}
              toggleMobileOpen={this.state.toggleMobileOpen}
              toggleTheme={this.state.toggleTheme}
            />
            <DrawerImpl
              currentTheme={this.state.currentTheme}
              isMobileOpen={this.state.isMobileOpen}
              setMobileOpen={this.state.setMobileOpen}
              toggleMobileOpen={this.state.toggleMobileOpen}
            />
            <div className={this.props.classes.content}>
              <div className={this.props.classes.toolbar} />
              <this.props.Component
                {...this.props.pageProps}
                currentTheme={this.state.currentTheme}
              />
            </div>
          </main>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FishbowlApp);
