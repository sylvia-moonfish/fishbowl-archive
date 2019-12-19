import Typography from "@material-ui/core/Typography";

import React from "react";

import ExpansionTitles from "../../data/expansion-titles";
import SiteInfo from "../../data/site-info";
import DutyList from "../../src/components/guide/duty-list";
import PageComponent from "../../src/components/page-component";

const pageData = {
  title: "레이드 가이드",
  description: "파이널 판타지 14 레이드 가이드",
  expansions: [
    {
      name: ExpansionTitles.shb,
      patches: [
        {
          name: "5.0",
          items: [
            {
              name: "희망의 낙원 에덴: 각성편 4",
              level: 80,
              itemLevel: 425,
              thumbnailSrc:
                SiteInfo.assetsUrl + "/raid-guide/edens-gate-sepulture.png",
              href: "/guide/raid-guide/5-0/edens-gate-sepulture"
            },
            {
              name: "희망의 낙원 에덴 영웅: 각성편 4",
              level: 80,
              itemLevel: 450,
              thumbnailSrc:
                SiteInfo.assetsUrl +
                "/raid-guide/edens-gate-sepulture-savage.png",
              href: "/guide/raid-guide/5-0/edens-gate-sepulture-savage"
            }
          ]
        }
      ]
    }
  ]
};

class RaidGuide extends PageComponent {
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
        <DutyList expansions={pageData.expansions} />
      </React.Fragment>
    );
  }
}

export default RaidGuide;
