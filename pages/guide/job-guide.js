import Typography from "@material-ui/core/Typography";

import React from "react";

import ExpansionTitles from "../../data/expansion-titles";
import SiteInfo from "../../data/site-info";
import ExpansionList from "../../src/components/guide/expansion-list";
import PageComponent from "../../src/components/page-component";

const pageData = {
  title: "직업별 가이드",
  description: "파이널 판타지 14 전투직업 가이드",
  expansions: [
    {
      name: ExpansionTitles.shb,
      items: [
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/pld.png",
          name: "나이트 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/pld/5-1-bis"
            }
          ]
        }
        /*{
          iconSrc: SiteInfo.assetsUrl + "/job-guide/war.png",
          name: "전사 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/war/5-1-bis"
            }
          ]
        }*/
      ]
    }
  ]
};

class JobGuide extends PageComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.generateHead(
          pageData.title + " | " + SiteInfo.siteTitle,
          pageData.description
        )}
        <Typography variant="h6">{pageData.title}</Typography>
        <ExpansionList expansions={pageData.expansions} />
      </React.Fragment>
    );
  }
}

export default JobGuide;
