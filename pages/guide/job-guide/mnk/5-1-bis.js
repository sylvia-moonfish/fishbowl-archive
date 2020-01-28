import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
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

import React from "react";

import Calculations from "../../../../data/5-1-bis-calculations";
import Items from "../../../../data/5-1-bis-items";
import SiteInfo from "../../../../data/site-info";
import PageComponent from "../../../../src/components/page-component";

const transition = React.forwardRef((props, ref) => {
  return <Grow {...props} ref={ref} />;
});

const pageData = {
  title: "몽크 가이드 - 5.1 BiS",
  description: "파이널 판타지 14 몽크 가이드 - 5.1 BiS"
};

const gearSets = [
  {
    description: "질풍글쿨 1.94초 극대 추천 세트.",
    attributes: {
      main: 4220,
      wd: 122,
      ch: 3522,
      dh: 2161,
      det: 2082,
      sks: 1021
    },
    dps: 15196.47,
    gcd: 0,
    glGcd: 1.94,
    foodId: "popotoSalad",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '질풍번개 4중첩 시 글로벌 쿨다운을 1.94초에 맞추고 극대를 높인 장비 세트입니다. 음식은 "포포토 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceKnuckles",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowHalfmaskOfStriking",
          materiaIds: ["dh", "sks"]
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfStriking",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceArmletsOfStriking",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowTassetsOfStriking",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengracePantaloonsOfStriking",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowGreavesOfStriking",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowEarringOfSlaying",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceChokerOfSlaying",
          materiaIds: ["dh", "sks"]
        },
        {
          itemId: "augmentedDeepshadowBraceletOfSlaying",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceRingOfSlaying",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowRingOfSlaying",
          materiaIds: ["ch", "det"]
        }
      ]
    }
  },
  {
    description:
      "질풍글쿨 1.96초 직격 세트. 인터넷 환경이 좋지 않을 경우 추천.",
    attributes: {
      main: 4220,
      wd: 122,
      ch: 3393,
      dh: 2401,
      det: 2200,
      sks: 767
    },
    dps: 15190.44,
    gcd: 0,
    glGcd: 1.96,
    foodId: "popotoSalad",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '질풍번개 4중첩 시 글로벌 쿨다운을 1.96초에 맞춘 장비 세트입니다. 인터넷 환경이 좋지 않아 글쿨 1.94초 로테이션을 돌리기 힘든 경우 추천합니다. 음식은 "포포토 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceKnuckles",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowHalfmaskOfStriking",
          materiaIds: ["dh", "sks"]
        },
        {
          itemId: "edengraceRobeOfStriking",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceArmletsOfStriking",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceTassetsOfStriking",
          materiaIds: ["ch", "sks"]
        },
        {
          itemId: "edengracePantaloonsOfStriking",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowGreavesOfStriking",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowEarringOfSlaying",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceChokerOfSlaying",
          materiaIds: ["dh", "sks"]
        },
        {
          itemId: "augmentedDeepshadowBraceletOfSlaying",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceRingOfSlaying",
          materiaIds: ["dh", "det"]
        },
        {
          itemId: "augmentedDeepshadowRingOfSlaying",
          materiaIds: ["ch", "det"]
        }
      ]
    }
  }
];

class FiveOneBis extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedDialog: -1
    };
  }

  render() {
    gearSets.forEach(gearSet => {
      gearSet.gcd =
        Math.floor(
          (Math.floor(
            2000 -
              Math.floor(
                ((gearSet.attributes.sks - Calculations.level.sub) * 130) /
                  Calculations.level.div +
                  1000
              )
          ) *
            2500) /
            1000 /
            10
        ) / 100;
      gearSet.ch =
        Math.floor(
          ((gearSet.attributes.ch - Calculations.level.sub) * 200) /
            Calculations.level.div +
            50
        ) / 10;
      gearSet.dh =
        Math.floor(
          ((gearSet.attributes.dh - Calculations.level.sub) * 550) /
            Calculations.level.div
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
            <Container maxWidth="md">
              <Grid container direction="column" spacing={5}>
                <Grid item>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    justify="center"
                    spacing={5}
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
                    spacing={5}
                  >
                    <Grid item>
                      <img
                        src={SiteInfo.assetsUrl + "/job-guide/mnk.png"}
                        style={{
                          maxWidth: 128,
                          width: "100%"
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.1 기준 몽크의 Best-In-Slot 장비 세트 목록입니다. 아래
                    표에서 열람하고자 하는 세트 목록을 클릭해주세요.
                  </Typography>
                  <br />
                  <li>
                    DPS 계산 자료 출처:{" "}
                    <Chip
                      color="secondary"
                      component="span"
                      icon={<LaunchIcon />}
                      label="Allagan Studies"
                      onClick={() => {
                        window && window.open("https://discord.gg/rkDkxQW");
                      }}
                      size="small"
                      variant="outlined"
                    />
                  </li>
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
                    <TableCell>기본 글쿨</TableCell>
                    <TableCell>질풍 글쿨</TableCell>
                    <TableCell>음식</TableCell>
                    <TableCell>직격 확률</TableCell>
                    <TableCell>극대 확률</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gearSets.map((gearSet, gearSetIndex) => {
                    return (
                      <TableRow
                        hover
                        key={gearSetIndex}
                        onClick={() => {
                          this.state.openedDialog = gearSetIndex;
                          this.setState(this.state);
                        }}
                        style={{
                          cursor: "pointer"
                        }}
                      >
                        <Hidden mdDown>
                          <TableCell>{gearSet.description}</TableCell>
                        </Hidden>
                        <TableCell>{gearSet.dps}</TableCell>
                        <TableCell>{gearSet.gcd} 초</TableCell>
                        <TableCell>{gearSet.glGcd} 초</TableCell>
                        <TableCell>{Items[gearSet.foodId].name}</TableCell>
                        <TableCell>{gearSet.dh} %</TableCell>
                        <TableCell>{gearSet.ch} %</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        {gearSets.map((gearSet, gearSetIndex) => {
          return (
            <Dialog
              fullWidth={true}
              key={gearSetIndex}
              maxWidth="md"
              onClose={() => {
                this.state.openedDialog = -1;
                this.setState(this.state);
              }}
              open={this.state.openedDialog === gearSetIndex}
              scroll="paper"
              TransitionComponent={transition}
            >
              <AppBar position="static">
                <Toolbar variant="dense">
                  <div
                    style={{
                      flexGrow: 1
                    }}
                  >
                    <Typography variant="body1">
                      {gearSet.description}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => {
                      this.state.openedDialog = -1;
                      this.setState(this.state);
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
                            <TableCell align="center">힘</TableCell>
                            <TableCell align="center">극대</TableCell>
                            <TableCell align="center">직격</TableCell>
                            <TableCell align="center">의지</TableCell>
                            <TableCell align="center">기시</TableCell>
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
                              {gearSet.attributes.sks}
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
                          {gearSet.dialog.gears.map((gear, gearId) => {
                            const item = Items[gear.itemId];

                            if (!item)
                              return <div key={gearId}>{gear.itemId}</div>;

                            return (
                              <TableRow
                                key={gearId}
                                selected={item.from === "영웅 레이드"}
                              >
                                <TableCell>{item.type}</TableCell>
                                <TableCell>
                                  <Avatar
                                    src={SiteInfo.assetsUrl + item.iconSrc}
                                  />
                                </TableCell>
                                <TableCell>{item.from}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                {gear.materiaIds.length === 2 ? (
                                  gear.materiaIds.map(
                                    (materiaId, materiaIdIndex) => {
                                      if (!Items[materiaId])
                                        return (
                                          <div key={materiaIdIndex}>
                                            {materiaId}
                                          </div>
                                        );

                                      return (
                                        <TableCell key={materiaIdIndex}>
                                          {Items[materiaId].name}
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
                                          key={strIndex}
                                          style={{
                                            margin: 0
                                          }}
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

export default FiveOneBis;
