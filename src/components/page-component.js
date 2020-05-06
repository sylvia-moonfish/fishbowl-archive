import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Head from "next/head";
import Router from "next/router";

import React from "react";

import SiteInfo from "../../data/site-info";

class PageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Router.onRouteChangeComplete = (url) => {
      window.gtag("config", SiteInfo.gtmId, {
        page_location: url,
      });
    };
  }

  generateHead(title, description) {
    return (
      <Head>
        <title key="title">{title}</title>
        <meta content={description} key="description" name="description" />
        <meta content={title} key="og-title" property="og:title" />
        <meta
          content={description}
          key="og-description"
          property="og:description"
        />
        <meta content={title} key="twitter-title" name="twitter:title" />
        <meta
          content={description}
          key="twitter-description"
          name="twitter:description"
        />
      </Head>
    );
  }

  generateFooter() {
    return (
      <Grid container justify="center">
        <Typography
          align="center"
          paragraph
          style={{
            color: "grey",
          }}
          variant="caption"
        >
          {SiteInfo.siteTitle} ⓒ {SiteInfo.copyrightYear} {SiteInfo.author}
          <br />
          All Rights Reserved.
        </Typography>
      </Grid>
    );
  }
}

export default PageComponent;
