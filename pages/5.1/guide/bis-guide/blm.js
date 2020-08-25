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
  title: "5.1 흑마도사 BiS 가이드",
  description: "파이널 판타지 14 패치 5.1 흑마도사 BiS 가이드.",
};

const gearSets = [
  {
    description: "글쿨 2.23초 직격 세트. 흑마만 키울 경우 추천.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
    },
    dps: 16161.52,
    gcd: 0,
    foodId: "lemonCurdSachertorte",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '글로벌 쿨다운을 2.23초로 맞추고 직격을 끌어올린 장비 세트입니다. 파티 조합을 크게 따지지 않으며 마시도 넉넉하고 DPS도 높아 어느 전투에서든 무난하게 사용할 수 있습니다. 캐스터 직업 3개를 전부 육성 중일 경우 서로 공유되는 장비인 귀걸이, 팔찌와 반지의 마테리아를 공용으로 맞춘 글쿨 2.27초 세트 사용을 권장합니다. 음식은 "레몬 커드 자허토르테"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceRod",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowHoodOfCasting",
          materiaIds: ["dh", "sps"],
        },
        {
          itemId: "edengraceJacketOfCasting",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "augmentedDeepshadowArmguardsOfCasting",
          materiaIds: ["dh", "det"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfCasting",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfCasting",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceThighbootsOfCasting",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceEarringOfCasting",
          materiaIds: ["dh", "sps"],
        },
        {
          itemId: "edengraceChokerOfCasting",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowBraceletOfCasting",
          materiaIds: ["dh", "sps"],
        },
        {
          itemId: "edengraceRingOfCasting",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "augmentedDeepshadowRingOfCasting",
          materiaIds: ["dh", "sps"],
        },
      ],
    },
  },
  {
    description: "글쿨 2.27초 소환사/적마 호환 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
    },
    dps: 16083.08,
    gcd: 0,
    foodId: "creamySalmonPasta",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '소환사/적마도사용 글쿨 2.48초 세트와 마테리아가 호환되는 장비 세트입니다. 2.23초 세트와 마테리아만 다를 뿐 착용 장비는 같습니다. 음식은 "연어 크림 파스타"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceRod",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowHoodOfCasting",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "edengraceJacketOfCasting",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "augmentedDeepshadowArmguardsOfCasting",
          materiaIds: ["dh", "det"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfCasting",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfCasting",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceThighbootsOfCasting",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceEarringOfCasting",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceChokerOfCasting",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowBraceletOfCasting",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceRingOfCasting",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowRingOfCasting",
          materiaIds: ["dh", "det"],
        },
      ],
    },
  },
  {
    description: "글쿨 2.19초 마시 세트. 빠른 마시를 선호하는 경우 추천.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
    },
    dps: 16131.4,
    gcd: 0,
    foodId: "lemonCurdSachertorte",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '글로벌 쿨다운 2.19초 빠른 마시 장비 세트입니다. 음식은 "레몬 커드 자허토르테"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceRod",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceCircletOfCasting",
          materiaIds: ["dh", "sps"],
        },
        {
          itemId: "edengraceJacketOfCasting",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "augmentedDeepshadowArmguardsOfCasting",
          materiaIds: ["dh", "det"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfCasting",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfCasting",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceThighbootsOfCasting",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfCasting",
          materiaIds: ["dh", "sps"],
        },
        {
          itemId: "edengraceChokerOfCasting",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowBraceletOfCasting",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "edengraceRingOfCasting",
          materiaIds: ["sps", "sps"],
        },
        {
          itemId: "augmentedDeepshadowRingOfCasting",
          materiaIds: ["sps", "sps"],
        },
      ],
    },
  },
];

class Blm extends PageComponent {
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
          (BisCalculations.level.main * BisCalculations.blm.int) / 100
        ) +
          BisCalculations.clan.int +
          BisCalculations.trait
      );
      gearSet.attributes.ch = BisCalculations.level.sub;
      gearSet.attributes.dh = BisCalculations.level.sub;
      gearSet.attributes.det = BisCalculations.level.main;
      gearSet.attributes.sps = BisCalculations.level.sub;

      gearSet.dialog.gears.forEach((gear) => {
        if (!BisItems[gear.itemId]) {
          console.log(gear.itemId);
          return;
        }

        if (BisItems[gear.itemId].stats["wd"]) {
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
                        src="/icons/job-crystals/blm.png"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.1 기준 흑마도사의 Best-in-Slot 장비 세트 목록입니다.
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
                            <TableCell align="center">지능</TableCell>
                            <TableCell align="center">극대</TableCell>
                            <TableCell align="center">직격</TableCell>
                            <TableCell align="center">의지</TableCell>
                            <TableCell align="center">마시</TableCell>
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

export default withStyles(styles)(withRouter(Blm));
