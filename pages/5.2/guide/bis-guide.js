import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { withRouter } from "next/router";

import React from "react";

import SiteInfo from "../../../data/site-info";
import ListPageComponent from "../../../src/components/bis-guide/list-page-component";

const styles = (theme) => ({
  banner: {
    maxWidth: 440,
    width: "100%",
  },
});

class BisGuide extends ListPageComponent {
  constructor(props) {
      super(props);

      this.pageData = {
          title: "5.2 BiS 가이드",
          description: "파이널 판타지 14 패치 5.2 BiS 가이드.",
          bannerSrc: '/patch-banners/shb/5.2.png'
      };

      this.jobs = {
          tanks: [
              {
                  name: "나이트",
                  initial: "pld",
              },
              {
                  name: "전사",
                  initial: "war",
              },
              {
                  name: "암흑기사",
                  initial: "drk",
              },
              {
                  name: "건브레이커",
                  initial: "gnb",
              },
          ],
          healers: [
              {
                  name: "백마도사",
                  initial: "whm",
              },
              {
                  name: "학자",
                  initial: "sch",
              },
              {
                  name: "점성술사",
                  initial: "ast",
              },
          ],
          melees: [
              {
                  name: "몽크",
                  initial: "mnk",
              },
              {
                  name: "용기사",
                  initial: "drg",
              },
              {
                  name: "닌자",
                  initial: "nin",
              },
              {
                  name: "사무라이",
                  initial: "sam",
              },
          ],
          physicalRanged: [
              {
                  name: "음유시인",
                  initial: "brd",
              },
              {
                  name: "기공사",
                  initial: "mch",
              },
              {
                  name: "무도가",
                  initial: "dnc",
              },
          ],
          magicalRanged: [
              {
                  name: "흑마도사",
                  initial: "blm",
              },
              {
                  name: "소환사",
                  initial: "smn",
              },
              {
                  name: "적마도사",
                  initial: "rdm",
              },
          ],
      };
    }
}

export default withStyles(styles)(withRouter(BisGuide));
