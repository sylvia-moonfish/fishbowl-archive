import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";
import LaunchIcon from "@material-ui/icons/Launch";

import { withRouter } from "next/router";

import React from "react";

import BisCalculations from "../../../../data/5.1/bis-calculations";
import BisItems from "../../../../data/5.1/bis-items";
import SiteInfo from "../../../../data/site-info";
import PageComponent from "../../../../src/components/page-component";

const transition = React.forwardRef((props, ref) => {
  return <Grow {...props} ref={ref} />;
});

const styles = (theme) => ({
  banner: {
    maxWidth: 128,
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: "inherit",
    cursor: "pointer",
    textDecoration: "none",
  },
  noMargin: {
    margin: 0,
  },
});

const pageData = {
  title: "5.1 백마도사 BiS 가이드",
  description: "파이널 판타지 14 패치 5.1 백마도사 BiS 가이드.",
};

const gearSets = [
  {
    description: "글쿨 2.41초 신앙 743 극대 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0,
    },
    dps: 0,
    hps: 0,
    mpRegen: 0,
    gcd: 0,
    foodId: "robeLettuceSalad",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '극대에 올인한 장비 세트입니다. 높은 DPS를 뽑아낼 수 있으나 글쿨이 느리고 신앙이 낮은 편이라 전투에 숙련된 힐러분들께 추천드립니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "augmentedDeepshadowSignum",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceTempleChainOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceArmletsOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceTassetsOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengracePantaloonsOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceSandalsOfHealing",
          materiaIds: ["ch", "dh"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceChokerOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceBraceletOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowRingOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "deepshadowRingOfHealing",
          materiaIds: ["dh", "det"],
        },
      ],
    },
  },
  {
    description: "글쿨 2.39초 신앙 931 직격 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0,
    },
    dps: 0,
    hps: 0,
    mpRegen: 0,
    gcd: 0,
    foodId: "robeLettuceSalad",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '신앙을 낮추고 직격을 챙겨 DPS를 강화한 장비 세트입니다. 높은 DPS를 뽑아낼 수 있으나 MP 소모가 심하고 신앙이 낮은 편이라 전투에 숙련된 힐러분들께 추천드립니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceCane",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceTempleChainOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceArmletsOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceTassetsOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengracePantaloonsOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceSandalsOfHealing",
          materiaIds: ["ch", "dh"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfHealing",
          materiaIds: ["dh", "sps"],
        },
        {
          itemId: "edengraceChokerOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowBraceletOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowRingOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "deepshadowRingOfHealing",
          materiaIds: ["dh", "dh"],
        },
      ],
    },
  },
  {
    description: "글쿨 2.39초 신앙 1129 무난하게 사용 가능한 추천 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0,
    },
    dps: 0,
    hps: 0,
    mpRegen: 0,
    gcd: 0,
    foodId: "kukuruRusk",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '응급 상황에도 편하게 대처할 수 있도록 신앙을 약간 높힌 장비 세트입니다. 어느 전투에서든 무난하게 사용 가능합니다. 마법 시전 속도를 맞추기 위해 음식은 "쿠쿠루 러스크"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceCane",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceTempleChainOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceArmletsOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceTassetsOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengracePantaloonsOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceSandalsOfHealing",
          materiaIds: ["ch", "sps"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfHealing",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceChokerOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowBraceletOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceRingOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowRingOfHealing",
          materiaIds: ["dh", "dh"],
        },
      ],
    },
  },
  {
    description: "글쿨 2.34초 신앙 1129 빠른 마시 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0,
    },
    dps: 0,
    hps: 0,
    mpRegen: 0,
    gcd: 0,
    foodId: "robeLettuceSalad",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '빠른 마법 시전 속도를 선호하시는 분들을 위한 장비 세트입니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceCane",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceTempleChainOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceArmletsOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceTassetsOfHealing",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "edengracePantaloonsOfHealing",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "augmentedDeepshadowGreavesOfHealing",
          materiaIds: ["ch", "sps"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfHealing",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "edengraceChokerOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowBraceletOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceRingOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowRingOfHealing",
          materiaIds: ["dh", "sps"],
        },
      ],
    },
  },
  {
    description: "글쿨 2.48초 신앙 1915 절 알렉산더 용.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0,
    },
    dps: 0,
    hps: 0,
    mpRegen: 0,
    gcd: 0,
    foodId: "robeLettuceSalad",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '글쿨을 낮추고 신앙을 최대한 높여 잦은 부활 및 힐 스킬 사용으로 인해 소모되는 MP를 최대한 커버하는 절 트라이용 장비 세트입니다. 전투에 익숙해지고 나면 2.39/1129 세트나 2.41/743 세트로 교체하시는 것을 추천드려요. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceCane",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowHoodOfHealing",
          materiaIds: ["ch", "det"],
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowArmguardsOfHealing",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceTassetsOfHealing",
          materiaIds: ["dh", "det"],
        },
        {
          itemId: "edengracePantaloonsOfHealing",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "edengraceSandalsOfHealing",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfHealing",
          materiaIds: ["dh", "det"],
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfHealing",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "edengraceBraceletOfHealing",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "edengraceRingOfHealing",
          materiaIds: ["ch", "det"],
        },
        {
          itemId: "augmentedDeepshadowRingOfHealing",
          materiaIds: ["det", "det"],
        },
      ],
    },
  },
];

class Whm extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedDialog: -1,
    };
  }

  render() {
    gearSets.forEach((gearSet) => {
      gearSet.attributes.main = Math.floor(
        Math.floor(
          (BisCalculations.level.main * BisCalculations.whm.mnd) / 100
        ) +
          BisCalculations.clan.mnd +
          BisCalculations.trait
      );
      gearSet.attributes.ch = BisCalculations.level.sub;
      gearSet.attributes.dh = BisCalculations.level.sub;
      gearSet.attributes.det = BisCalculations.level.main;
      gearSet.attributes.sps = BisCalculations.level.sub;
      gearSet.attributes.pie = BisCalculations.level.main;

      gearSet.dialog.gears.forEach((gear) => {
        if (!BisItems[gear.itemId]) {
          console.log(gear.itemId);
          return;
        }

        if (BisItems[gear.itemId].stats.wd) {
          gearSet.attributes.wd = BisItems[gear.itemId].stats.wd;
        }

        const attributes = Object.keys(BisItems[gear.itemId].stats)
          .filter((key) => {
            return key !== "wd";
          })
          .map((key) => {
            return {
              key: key,
              value: BisItems[gear.itemId].stats[key],
            };
          });

        attributes.sort((a, b) => {
          return b.value - a.value;
        });

        const subAttrMax = attributes[1].value;

        const attributeObj = {};

        attributes.forEach((attr) => {
          attributeObj[attr.key] = attr.value;
        });

        gear.materiaIds.forEach((materiaId) => {
          if (!BisItems[materiaId]) {
            console.log(materiaId);
            return;
          }

          if (!attributeObj[materiaId]) {
            attributeObj[materiaId] = BisItems[materiaId].value;
          } else {
            attributeObj[materiaId] += BisItems[materiaId].value;

            if (attributeObj[materiaId] > subAttrMax)
              attributeObj[materiaId] = subAttrMax;
          }
        });

        Object.keys(attributeObj).forEach((key) => {
          if (!gearSet.attributes[key]) {
            gearSet.attributes[key] = attributeObj[key];
          } else {
            gearSet.attributes[key] += attributeObj[key];
          }
        });
      });

      if (!BisItems[gearSet.foodId]) {
        console.log(gearSet.foodId);
        return;
      }

      Object.keys(BisItems[gearSet.foodId].stats).forEach((key) => {
        if (!gearSet.attributes[key]) return;

        let value = Math.floor(
          (gearSet.attributes[key] *
            BisItems[gearSet.foodId].stats[key].value) /
            100
        );
        if (value > BisItems[gearSet.foodId].stats[key].max)
          value = BisItems[gearSet.foodId].stats[key].max;

        gearSet.attributes[key] += value;
      });

      gearSet.gcd =
        Math.floor(
          (Math.floor(
            2000 -
              Math.floor(
                ((gearSet.attributes.sps - BisCalculations.level.sub) * 130) /
                  BisCalculations.level.div +
                  1000
              )
          ) *
            2500) /
            1000 /
            10
        ) / 100;
      gearSet.ch =
        Math.floor(
          ((gearSet.attributes.ch - BisCalculations.level.sub) * 200) /
            BisCalculations.level.div +
            50
        ) / 10;
      gearSet.dh =
        Math.floor(
          ((gearSet.attributes.dh - BisCalculations.level.sub) * 550) /
            BisCalculations.level.div
        ) / 10;
      gearSet.mpRegen =
        Math.floor(
          ((gearSet.attributes.pie - BisCalculations.level.main) * 150) /
            BisCalculations.level.div
        ) + 200;

      const attackPotency = 300;
      const trait = 30;
      const fAttack =
        Math.floor(((gearSet.attributes.main - 340) * 165) / 340) + 100;
      const fDet = Math.floor(
        ((gearSet.attributes.det - BisCalculations.level.main) * 130) /
          BisCalculations.level.div +
          1000
      );
      const fWd = Math.floor(
        (BisCalculations.level.main * BisCalculations.whm.mnd) / 1000 +
          gearSet.attributes.wd
      );
      const fCrit = Math.floor(
        ((gearSet.attributes.ch - BisCalculations.level.sub) * 200) /
          BisCalculations.level.div +
          1400
      );

      const d1 = Math.floor(
        Math.floor(Math.floor(attackPotency * fAttack * fDet) / 100) / 1000
      );
      const d2 = Math.floor(
        Math.floor(Math.floor(Math.floor(d1 * fWd) / 100) * (trait + 100)) / 100
      );
      const d3chdh = Math.floor(
        Math.floor(Math.floor(Math.floor(d2 * fCrit) / 1000) * 125) / 100
      );
      const d3ch = Math.floor(Math.floor(d2 * fCrit) / 1000);
      const d3dh = Math.floor(Math.floor(d2 * 125) / 100);

      const chdh = ((gearSet.ch / 100) * gearSet.dh) / 100;
      const ch = gearSet.ch / 100 - chdh;
      const dh = gearSet.dh / 100 - chdh;
      const none = 1 - chdh - ch - dh;
      const damage = d3chdh * chdh + d3ch * ch + d3dh * dh + d2 * none;

      gearSet.dps = Math.floor((damage / gearSet.gcd) * 100) / 100;

      const healingPotency = 700;
      const fHmp =
        Math.floor(((gearSet.attributes.main - 340) * 100) / 304) + 100;

      const h1 = Math.floor(
        Math.floor(Math.floor(healingPotency * fHmp * fDet) / 100) / 1000
      );
      const h2 = Math.floor(
        Math.floor(Math.floor(Math.floor(h1 * fWd) / 100) * (trait + 100)) / 100
      );
      const h3ch = Math.floor(Math.floor(h2 * fCrit) / 1000);
      const healing =
        (h3ch * gearSet.ch) / 100 + (h2 * (100 - gearSet.ch)) / 100;

      gearSet.hps = Math.floor((healing / gearSet.gcd) * 100) / 100;
    });

    return (
      <React.Fragment>
        {this.generateHead(
          pageData.title + " | " + SiteInfo.siteTitle,
          pageData.description
        )}
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <Breadcrumbs>
              <Link
                className={this.props.classes.link}
                color="inherit"
                onClick={() => {
                  this.props.router.push("/5.1/guide/bis-guide");
                }}
              >
                5.1 BiS 가이드
              </Link>
              <Typography color="textPrimary">{pageData.title}</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item>
            <Container maxWidth="md">
              <Grid container direction="column" spacing={5}>
                <Grid item>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    justify="center"
                  >
                    <Grid item>
                      <Typography variant="h5">{pageData.title}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    justify="center"
                  >
                    <Grid item>
                      <img
                        alt=""
                        className={this.props.classes.banner}
                        src="/icons/job-crystals/whm.png"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.1 기준 백마도사의 Best-in-Slot 장비 세트 목록입니다.
                    아래 표에서 열람하고자 하는 세트 목록을 클릭해주세요.
                  </Typography>
                  <br />
                  <ul>
                    <li>
                      DPS 시뮬레이션 자료 출처:{" "}
                      <a
                        className={this.props.classes.link}
                        href="https://discord.gg/rkDkxQW"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Chip
                          color="secondary"
                          icon={<LaunchIcon />}
                          label="Allagan Studies"
                          onClick={() => {}}
                          size="small"
                          variant="outlined"
                        />
                      </a>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <Hidden mdDown>
                      <TableCell />
                    </Hidden>
                    <TableCell>평균 DPS</TableCell>
                    <TableCell>평균 HPS</TableCell>
                    <TableCell>틱당 MP회복</TableCell>
                    <TableCell>글로벌 쿨다운</TableCell>
                    <TableCell>음식</TableCell>
                    <TableCell>직격 확률</TableCell>
                    <TableCell>극대 확률</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gearSets.map((gearSet, gearSetIndex) => {
                    return (
                      <TableRow
                        className={this.props.classes.link}
                        hover
                        key={gearSetIndex}
                        onClick={() => {
                          this.setState({
                            ...this.state,
                            openedDialog: gearSetIndex,
                          });
                        }}
                      >
                        <Hidden mdDown>
                          <TableCell>{gearSet.description}</TableCell>
                        </Hidden>
                        <TableCell>{gearSet.dps}</TableCell>
                        <TableCell>{gearSet.hps}</TableCell>
                        <TableCell>{gearSet.mpRegen}</TableCell>
                        <TableCell>{gearSet.gcd} 초</TableCell>
                        <TableCell>{BisItems[gearSet.foodId].name}</TableCell>
                        <TableCell>{gearSet.dh} %</TableCell>
                        <TableCell>{gearSet.ch} %</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>{this.generateFooter()}</Grid>
        </Grid>
        {gearSets.map((gearSet, gearSetIndex) => {
          return (
            <Dialog
              fullWidth
              key={gearSetIndex}
              maxWidth="md"
              onClose={() => {
                this.setState({
                  ...this.state,
                  openedDialog: -1,
                });
              }}
              open={this.state.openedDialog === gearSetIndex}
              scroll="paper"
              TransitionComponent={transition}
            >
              <AppBar position="static">
                <Toolbar variant="dense">
                  <div className={this.props.classes.grow}>
                    <Typography variant="body1">
                      {gearSet.description}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        openedDialog: -1,
                      });
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <DialogContent>
                <Grid container direction="column" spacing={5}>
                  <Grid item />
                  <Grid item>
                    <li>{gearSet.dialog.intro}</li>
                  </Grid>
                  <Grid item>
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">정신력</TableCell>
                            <TableCell align="center">극대</TableCell>
                            <TableCell align="center">직격</TableCell>
                            <TableCell align="center">의지</TableCell>
                            <TableCell align="center">마시</TableCell>
                            <TableCell align="center">신앙</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell align="center">
                              {gearSet.attributes.main}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.ch}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.dh}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.det}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.sps}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.pie}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item>
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell colSpan={2} />
                            <TableCell align="center">종류</TableCell>
                            <TableCell align="center">이름</TableCell>
                            <TableCell align="center" colSpan={2}>
                              마테리아
                            </TableCell>
                            <TableCell align="center">필요 재화</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>음식</TableCell>
                            <TableCell>
                              <Avatar
                                alt=""
                                src={BisItems[gearSet.foodId].iconSrc}
                                variant="square"
                              />
                            </TableCell>
                            <TableCell>제작</TableCell>
                            <TableCell>
                              {BisItems[gearSet.foodId].name}
                            </TableCell>
                            <TableCell colSpan={3} />
                          </TableRow>
                          {gearSet.dialog.gears.map((gear, gearId) => {
                            const item = BisItems[gear.itemId];

                            if (!item) {
                              return <div key={gearId}>{gear.itemId}</div>;
                            }

                            return (
                              <TableRow
                                key={gearId}
                                selected={item.from === "영웅 레이드"}
                              >
                                <TableCell>{item.type}</TableCell>
                                <TableCell>
                                  <Avatar
                                    alt=""
                                    src={item.iconSrc}
                                    variant="square"
                                  />
                                </TableCell>
                                <TableCell>{item.from}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                {gear.materiaIds.length === 2 ? (
                                  gear.materiaIds.map(
                                    (materiaId, materiaIdIndex) => {
                                      if (!BisItems[materiaId])
                                        return (
                                          <div key={materiaIdIndex}>
                                            {materiaId}
                                          </div>
                                        );

                                      return (
                                        <TableCell key={materiaIdIndex}>
                                          {BisItems[materiaId].name}
                                        </TableCell>
                                      );
                                    }
                                  )
                                ) : (
                                  <TableCell colSpan={2} />
                                )}
                                <TableCell>
                                  {item.required
                                    .split("\n")
                                    .map((str, strIndex) => {
                                      return (
                                        <p
                                          className={
                                            this.props.classes.noMargin
                                          }
                                          key={strIndex}
                                        >
                                          {str}
                                        </p>
                                      );
                                    })}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
          );
        })}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(Whm));
