import Typography from "@material-ui/core/Typography";

import React from "react";

import ExpansionTitles from "../../data/expansion-titles";
import SiteInfo from "../../data/site-info";
import ExpansionList from "../../src/components/guide/expansion-list";
import PageComponent from "../../src/components/page-component";

const pageData = {
  title: "채집/제작 가이드",
  description: "파이널 판타지 14 채집직과 제작직을 위한 가이드",
  expansions: [
    {
      name: ExpansionTitles.shb,
      items: [
        {
          name: "제작직 가이드",
          patches: [
            {
              name: "5.0",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.0.png",
              href: "/guide/gather-craft-guide/5-0/craft-from-70",
            },
            {
              name: "5.1",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/gather-craft-guide/5-1/craft-guide",
            },
          ],
        },
      ],
    },
  ],
};

class GatherCraftGuide extends PageComponent {
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

export default GatherCraftGuide;
