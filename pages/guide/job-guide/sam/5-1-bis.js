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
  title: "사무라이 가이드 - 5.1 BiS",
  description: "파이널 판타지 14 사무라이 가이드 - 5.1 BiS"
};

const gearSets = [
  {
    description: "28 글쿨 로테이션 2.14초 세트. 몽크와 공유 가능.",
    attributes: {
      main: 4226,
      wd: 122,
      ch: 2978,
      dh: 2952,
      det: 2172,
      sks: 685
    },
    dps: 15453.26,
    gcd: 0,
    shifuGcd: 0,
    rotation: 28,
    foodId: "robeLettuceSalad",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '사풍 글로벌 쿨다운을 2.14초로 맞추어 60초 루프 내에 총 28개의 무기 기술을 사용 가능하도록 디자인한 장비 세트입니다. 몽크와도 공유 가능하며 어떤 전투에서든 무난하게 사용할 수 있는 추천 세트입니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceBlade",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowHalfmaskOfStriking",
          materiaIds: ["dh", "sks"]
        },
        {
          itemId: "edengraceRobeOfStriking",
          materiaIds: ["det", "det"]
        },
        {
          itemId: "augmentedDeepshadowGlovesOfStriking",
          materiaIds: ["ch", "ch"]
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
    description: "30 글쿨 로테이션 2초 세트. 빠른 기시를 선호할 경우 추천.",
    attributes: {
      main: 4226,
      wd: 122,
      ch: 2827,
      dh: 2366,
      det: 1282,
      sks: 2311
    },
    dps: 15395.23,
    gcd: 0,
    shifuGcd: 0,
    rotation: 30,
    foodId: "popotoSalad",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '사풍 글로벌 쿨다운을 2초로 맞추어 60초 루프 내에 총 30개의 무기 기술을 사용 가능하도록 디자인한 장비 세트입니다. 극대 위주 세트이기 때문에 극대 관련 시너지 효율이 좋습니다. 음식은 "포포토 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceBlade",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowHalfmaskOfStriking",
          materiaIds: ["sks", "sks"]
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfStriking",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowGlovesOfStriking",
          materiaIds: ["ch", "sks"]
        },
        {
          itemId: "augmentedDeepshadowTassetsOfStriking",
          materiaIds: ["sks", "sks"]
        },
        {
          itemId: "augmentedDeepshadowBottomsOfStriking",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceSandalsOfStriking",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowEarringOfSlaying",
          materiaIds: ["dh", "sks"]
        },
        {
          itemId: "edengraceChokerOfSlaying",
          materiaIds: ["dh", "sks"]
        },
        {
          itemId: "augmentedDeepshadowBraceletOfSlaying",
          materiaIds: ["sks", "sks"]
        },
        {
          itemId: "edengraceRingOfSlaying",
          materiaIds: ["det", "sks"]
        },
        {
          itemId: "augmentedDeepshadowRingOfSlaying",
          materiaIds: ["ch", "sks"]
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
      const gcd1 = Math.floor(
        ((2000 -
          Math.floor(
            ((gearSet.attributes.sks - Calculations.level.sub) * 130) /
              Calculations.level.div +
              1000
          )) *
          2500) /
          1000
      );
      gearSet.gcd = Math.floor(gcd1 / 10) / 100;

      const gcd2 = 100 - 13;
      const gcd4 = Math.floor((gcd1 * gcd2) / 100);
      gearSet.shifuGcd = Math.floor(gcd4 / 10) / 100;
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
                        src={SiteInfo.assetsUrl + "/job-guide/sam.png"}
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
                    패치 5.1 기준 사무라이의 Best-In-Slot 장비 세트 목록입니다.
                    아래 표에서 열람하고자 하는 세트 목록을 클릭해주세요.
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
                    <TableCell>사풍 글쿨</TableCell>
                    <TableCell>기술 로테이션 글쿨 수</TableCell>
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
                        <TableCell>{gearSet.shifuGcd} 초</TableCell>
                        <TableCell>{gearSet.rotation} 글쿨</TableCell>
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
