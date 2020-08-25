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
  title: "5.1 건브레이커 BiS 가이드",
  description: "파이널 판타지 14 패치 5.1 건브레이커 BiS 가이드.",
};

const gearSets = [
  {
    description: "글쿨 2.42초 세트. 글쿨이 느린 숙련자용 세트.",
    dps: 8923.85,
    gcd: 2.42,
    foodId: "popotoSalad",
    dh: 12,
    ch: 24.7,
    ten: 1.5,
    dialog: {
      intro:
        '시뮬레이션 상 DPS가 가장 높은 글로벌 쿨다운 2.42초 장비 세트입니다. 실전에서 "무자비" 지속 시간 내에 9개의 무기 기술을 사용하지 못하는 상황이 자주 발생할 경우 2.4초 세트나 2.38초 세트를 사용하실 것을 추천드립니다. 음식은 "포포토 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceManatrigger",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowCuirassOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfFending",
          materiaIds: ["ch", "dh"],
        },
        {
          itemId: "edengraceChokerOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "dh"],
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch", "ch"],
        },
      ],
    },
  },
  {
    description: "글쿨 2.4초 세트. 무난하게 사용 가능한 추천 세트.",
    dps: 8886.21,
    gcd: 2.4,
    foodId: "robeLettuceSalad",
    dh: 14,
    ch: 24.5,
    ten: 2,
    dialog: {
      intro:
        '글로벌 쿨다운을 2.4초로 맞춰 기믹 처리를 좀 더 여유롭게 할 수 있도록 최적화한 추천 세트입니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceManatrigger",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceMailOfFending",
          materiaIds: ["ch", "det"],
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfFending",
          materiaIds: ["ch", "dh"],
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "dh"],
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
      "글쿨 2.38초 세트. 인터넷 핑이 안 좋거나 빠른 기시를 선호할 경우 추천.",
    dps: 8821.79,
    gcd: 2.38,
    foodId: "robeLettuceSalad",
    dh: 12,
    ch: 24.4,
    ten: 1.5,
    dialog: {
      intro:
        '글로벌 쿨다운을 2.38초로 맞춘 장비 세트입니다. 인터넷 환경이 좋지 않거나 좀 더 빠른 기시를 선호하시는 분께 추천드립니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceManatrigger",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceMailOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfFending",
          materiaIds: ["ch", "dh"],
        },
        {
          itemId: "edengraceChokerOfFending",
          materiaIds: ["ch", "ch"],
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["dh", "dh"],
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "dh"],
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch", "ch"],
        },
      ],
    },
  },
  {
    description: "글쿨 2.4초 불굴 세트. 절 알렉산더 용.",
    dps: 8778.42,
    gcd: 2.4,
    foodId: "robeLettuceSalad",
    dh: 2,
    ch: 22.3,
    ten: 4.9,
    dialog: {
      intro:
        '글로벌 쿨다운 2.4초 세트에서 직격을 불굴로 대체한 절 알렉산더 트라이용 장비 세트입니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceManatrigger",
          materiaIds: ["ten", "ten"],
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["det", "det"],
        },
        {
          itemId: "edengraceMailOfFending",
          materiaIds: ["ten", "ten"],
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["ten", "ten"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["ten", "ten"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ten", "ten"],
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["ten", "ten"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfFending",
          materiaIds: ["ten", "ten"],
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfFending",
          materiaIds: ["dh", "det"],
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["ten", "ten"],
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "dh"],
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch", "ch"],
        },
      ],
    },
  },
];

class Gnb extends PageComponent {
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
                        src="/icons/job-crystals/gnb.png"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.1 기준 건브레이커의 Best-in-Slot 장비 세트
                    목록입니다. 아래 표에서 열람하고자 하는 세트 목록을
                    클릭해주세요.
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

export default withStyles(styles)(withRouter(Gnb));
