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
        },
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/war.png",
          name: "전사 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/war/5-1-bis"
            }
          ]
        },
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/drk.png",
          name: "암흑기사 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/drk/5-1-bis"
            }
          ]
        },
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/gnb.png",
          name: "건브레이커 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/gnb/5-1-bis"
            }
          ]
        },
        "divider",
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/whm.png",
          name: "백마도사 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/whm/5-1-bis"
            }
          ]
        },
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/sch.png",
          name: "학자 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/sch/5-1-bis"
            }
          ]
        },
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/ast.png",
          name: "점성술사 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/ast/5-1-bis"
            }
          ]
        },
        "divider",
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/mnk.png",
          name: "몽크 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/mnk/5-1-bis"
            }
          ]
        },
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/drg.png",
          name: "용기사 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/drg/5-1-bis"
            }
          ]
        },
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/nin.png",
          name: "닌자 가이드",
          patches: [
            {
              name: "5.08 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.0.png",
              href: "/guide/job-guide/nin/5-1-bis"
            }
          ]
        },
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/sam.png",
          name: "사무라이 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/sam/5-1-bis"
            }
          ]
        },
        "divider",
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/brd.png",
          name: "음유시인 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/brd/5-1-bis"
            }
          ]
        },
        {
          iconSrc: SiteInfo.assetsUrl + "/job-guide/mch.png",
          name: "기공사 가이드",
          patches: [
            {
              name: "5.1 BiS",
              thumbnailSrc: SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png",
              href: "/guide/job-guide/mch/5-1-bis"
            }
          ]
        }
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
