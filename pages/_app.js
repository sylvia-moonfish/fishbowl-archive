import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

import Head from "next/head";
import { useRouter } from "next/router";

import PropTypes from 'prop-types';

import React, { useEffect, useState } from "react";

import { HrefArray } from "data/main-menu";
import SiteInfo from "data/site-info";
import AppBarImpl from "src/components/layout/app-bar-impl";
import DrawerImpl from "src/components/layout/drawer-impl";
import { DarkTheme, LightTheme } from "src/theme";

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width: "100%",
    },
    root: {
        display: "flex",
    },
}));

const App =  props => {
    const classes = useStyles();
    const router = useRouter();

    const [currentTheme, setCurrentTheme] = useState('dark');
    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            setCurrentTheme('light');
        } else {
            setCurrentTheme('dark');
        }
    };
    const [isMobileOpen, setMobileOpen] = useState(false);
    const toggleMobileOpen = () => {
        setMobileOpen(!isMobileOpen);
    };
    const [currentMenu, setCurrentMenu] = useState('');

    const determineCurrentMenu = () => {
        if (router.pathname === "/") {
            setCurrentMenu('');
        } else {
            let targetHref = "";

            HrefArray.forEach((href) => {
                if (router.pathname.indexOf(href) !== -1) {
                    targetHref = href;
                }
            });

            setCurrentMenu(targetHref);
        }
    };

    useEffect(() => {
        if (document) {
            const jssStyles = document.querySelector('#jss-server-side');

            if (jssStyles) {
                jssStyles.parentElement.removeChild(jssStyles);
            }
        }

        if (typeof window !== "undefined" && window.localStorage.getItem("theme")) {
            setCurrentTheme(window.localStorage.getItem('theme'));
        }

        if (typeof window !== "undefined") {
            window.gtag("config", SiteInfo.gtmId, {
                page_location: router.pathname,
            });

            router.events.on("routeChangeComplete", (url) => {
                determineCurrentMenu();
                window.gtag("config", SiteInfo.gtmId, {
                    page_location: url,
                });
            });
        }
    });

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
                theme={currentTheme === "dark" ? DarkTheme : LightTheme}
            >
                <CssBaseline />
                <main className={classes.root}>
                    <AppBarImpl
                        isMobileOpen={isMobileOpen}
                        toggleMobileOpen={toggleMobileOpen}
                        toggleTheme={toggleTheme}
                    />
                    <DrawerImpl
                        currentMenu={currentMenu}
                        currentTheme={currentTheme}
                        isMobileOpen={isMobileOpen}
                        setMobileOpen={setMobileOpen}
                        toggleMobileOpen={toggleMobileOpen}
                    />
                    <Container className={classes.content}>
                        <Toolbar />
                        <props.Component
                            {...props.pageProps}
                            currentTheme={currentTheme}
                        />
                    </Container>
                </main>
            </ThemeProvider>
        </React.Fragment>
    );
};

App.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired
};

export default App;