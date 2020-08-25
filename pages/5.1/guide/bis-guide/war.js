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
  title: "5.1 전사 BiS 가이드",
  description: "파이널 판타지 14 패치 5.1 전사 BiS 가이드.",
};

const gearSets = [
  {
    description: "글쿨 2.38초 세트. 스킬 로테이션이 조금 빡빡한 편.",
    dps: 8831.62,
    gcd: 2.38,
    foodId: "robeLettuceSalad",
    dh: 0,
    ch: 25,
    ten: 2,
    dialog: {
      intro:
        '칠흑 전사 스킬 로테이션이 요구하는 최소 기시인 글로벌 쿨다운 2.38초를 맞추고 극대를 최대화한 장비 세트입니다. 인터넷 핑이 좋지 않거나 딜로스가 잦은 전투에서는 높은 DPS를 유지하기 어려울 수도 있습니다. 음식은 "요술양배추 샐러드"를 섭취해줍니다.',
      gears: [
        {
          itemId: "edengraceBattleaxe",
          materiaIds: ["sks", "sks"],
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "augmentedDeepshadowCuirassOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["det", "sks"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfFending",
          materiaIds: ["ch", "det"],
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["sks", "sks"],
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "det"],
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch", "ch"],
        },
      ],
    },
  },
  {
    description: "글쿨 2.37초 세트. 널널해서 기믹 처리하기 편함.",
    dps: 8787.79,
    gcd: 2.37,
    foodId: "popotoSalad",
    dh: 0,
    ch: 24.9,
    ten: 1.5,
    dialog: {
      intro:
        '글로벌 쿨다운을 여유있게 2.37초로 맞춰 어떤 상황에서든 무난하게 사용 가능한 장비 세트입니다. 음식은 "포포토 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceBattleaxe",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "augmentedDeepshadowCuirassOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["det", "sks"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfFending",
          materiaIds: ["ch", "det"],
        },
        {
          itemId: "edengraceChokerOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["det", "sks"],
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "det"],
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch", "ch"],
        },
      ],
    },
  },
  {
    description:
      "글쿨 2.36초 세트. 인터넷 핑이 안 좋거나 빠른 기시를 선호할 경우 추천.",
    dps: 8760.72,
    gcd: 2.36,
    foodId: "robeLettuceSalad",
    dh: 0,
    ch: 24.1,
    ten: 1.4,
    dialog: {
      intro:
        '극대 대신 기시를 좀 더 챙겨 글로벌 쿨다운을 2.36초로 맞춘 장비 세트입니다. 빠른 기시를 선호하거나 좀 더 여유롭게 전투하고 싶을 경우 추천드립니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceBattleaxe",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "edengraceArmetOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowCuirassOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["sks", "sks"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfFending",
          materiaIds: ["ch", "det"],
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["sks", "sks"],
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "det"],
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch", "ch"],
        },
      ],
    },
  },
  {
    description: "글쿨 2.36초 불굴 세트. 절 알렉산더용.",
    dps: 8563.31,
    gcd: 2.36,
    foodId: "robeLettuceSalad",
    dh: 0,
    ch: 19.4,
    ten: 7.7,
    dialog: {
      intro:
        '글로벌 쿨다운 2.36초 세트에서 불굴을 높여 절 난이도 트라이에 대비한 장비 세트입니다. 기존 장비 세트에서 사용하지 않았던 방어구들을 많이 사용하므로 낱장이나 석판이 추가로 많이 소요됩니다. "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceBattleaxe",
          materiaIds: ["ten", "ten"],
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["sks", "ten"],
        },
        {
          itemId: "edengraceMailOfFending",
          materiaIds: ["ten", "ten"],
        },
        {
          itemId: "augmentedDeepshadowGauntletsOfFending",
          materiaIds: ["ch", "ten"],
        },
        {
          itemId: "edengraceTassetsOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceTrousersOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowSolleretsOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceEarringOfFending",
          materiaIds: ["sks", "ten"],
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfFending",
          materiaIds: ["sks", "ten"],
        },
        {
          itemId: "augmentedDeepshadowBraceletOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "sks"],
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch", "ch"],
        },
      ],
    },
  },
];

class War extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedDialog: -1,
    };
  }

  render() {
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
                        src="/icons/job-crystals/war.png"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.1 기준 전사의 Best-in-Slot 장비 세트 목록입니다. 아래
                    표에서 열람하고자 하는 세트 목록을 클릭해주세요.
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
                    <TableCell>불굴 추가 방어력</TableCell>
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
                        <TableCell>{gearSet.ten} %</TableCell>
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

export default withStyles(styles)(withRouter(War));
