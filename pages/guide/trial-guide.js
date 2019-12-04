import Typography from "@material-ui/core/Typography";

import React from "react";

import ExpansionTitles from "../../data/expansion-titles";
import SiteInfo from "../../data/site-info";
import DutyList from "../../src/components/guide/duty-list";
import PageComponent from "../../src/components/page-component";

const pageData = {
  title: "토벌전 가이드",
  description: "파이널 판타지 14 토벌전 가이드",
  expansions: [
    {
      name: ExpansionTitles.sb,
      patches: [
        {
          name: "4.5",
          items: [
            {
              name: "진 요우진보 토벌전",
              level: 70,
              itemLevel: 365,
              thumbnailSrc:
                SiteInfo.assetsUrl + "/trial-guide/kugane-ohashi.png",
              href: "/guide/trial-guide/4-5/kugane-ohashi"
            }
          ]
        }
      ]
    }
  ]
};

class TrialGuide extends PageComponent {
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

export default TrialGuide;
