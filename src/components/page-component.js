import Head from "next/head";
import Router from "next/router";

import React from "react";

import SiteInfo from "../../data/site-info";

class PageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      window.gtag("config", SiteInfo.gtmId, {
        page_location: url
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

  generatePostposition(word, postPosition) {
    const lastChar = word.charCodeAt(word.length - 1);

    if (lastChar < 0xac00 || lastChar > 0xd7a3) return postPosition;

    switch (postPosition) {
      case "을":
      case "를":
        return (lastChar - 0xac00) % 28 > 0 ? "을" : "를";
      case "이":
      case "가":
        return (lastChar - 0xac00) % 28 > 0 ? "이" : "가";
      case "은":
      case "는":
        return (lastChar - 0xac00) % 28 > 0 ? "은" : "는";
      case "과":
      case "와":
        return (lastChar - 0xac00) % 28 > 0 ? "과" : "와";
    }
  }
}

export default PageComponent;
