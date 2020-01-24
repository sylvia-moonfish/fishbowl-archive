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

import Items from "../../../../data/5-1-bis-items";
import SiteInfo from "../../../../data/site-info";
import PageComponent from "../../../../src/components/page-component";

const transition = React.forwardRef((props, ref) => {
  return <Grow {...props} ref={ref} />;
});

const pageData = {
  title: "암흑기사 가이드 - 5.1 BiS",
  description: "파이널 판타지 14 암흑기사 가이드 - 5.1 BiS"
};

const gearSets = [
  {
    description: "글쿨 2.43초 세트. 글쿨이 많이 느리니 사용 시 주의 요망.",
    dps: 8980.34,
    gcd: 2.43,
    foodId: "robeLettuceSalad",
    dh: 14,
    ch: 25,
    ten: 2,
    dialog: {
      intro:
        '"피의 칼날" 효과가 적용되는 동안 총 5번의 무기 기술을 쓸 수 있는 최소 기시만을 맞춘 장비 세트입니다. 인터넷 핑이 좋지 않아 논글쿨 사용 시 글쿨이 밀린다거나 기믹 처리 등의 이유로 "피의 칼날" 지속 시간 동안 5번의 무기 기술을 사용하지 못하는 상황이 자주 발생한다면 글쿨 2.41초 세트 등의 좀 더 여유로운 장비 세트를 사용하실 것을 권장합니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceGreatsword",
          materiaIds: ["sks", "sks"]
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowCuirassOfFending",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowEarringOfFending",
          materiaIds: ["ch", "dh"]
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "dh"]
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch", "ch"]
        }
      ]
    }
  },
  {
    description: "글쿨 2.41초 세트. 무난하게 사용 가능한 추천 세트.",
    dps: 8965.71,
    gcd: 2.41,
    foodId: "popotoSalad",
    dh: 18,
    ch: 25,
    ten: 2.4,
    dialog: {
      intro:
        '글로벌 쿨다운을 2.41초로 맞춰 "피의 칼날" 5글쿨을 좀 더 여유롭게 맞출 수 있도록 최적화한 장비 세트입니다. 기믹 처리 등을 좀 더 편하게 할 수 있으므로 개인적으로 이 장비 세트를 가장 추천합니다. 기시를 맞추기 위해 음식은 "포포토 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceGreatsword",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceMailOfFending",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceEarringOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "dh"]
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch", "dh"]
        }
      ]
    }
  },
  {
    description: "글쿨 2.38초 세트. 빠른 기시속을 선호할 경우 추천.",
    dps: 8924.65,
    gcd: 2.38,
    foodId: "popotoSalad",
    dh: 14,
    ch: 25.3,
    ten: 2,
    dialog: {
      intro:
        '글로벌 쿨다운을 2.38초로 맞춘 장비 세트입니다. 2.43초/2.41초 세트보다 DPS 효율은 살짝 떨어지지만 빠른 글쿨을 선호하시는 분들께 추천드립니다. 음식은 "포포토 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceGreatsword",
          materiaIds: ["sks", "sks"]
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceMailOfFending",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowEarringOfFending",
          materiaIds: ["ch", "dh"]
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch", "dh"]
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch", "ch"]
        }
      ]
    }
  },
  {
    description: "글쿨 2.4초 불굴 세트. 절 알렉산더용.",
    dps: 8709.64,
    gcd: 2.4,
    foodId: "rareRoastBeef",
    dh: 10,
    ch: 15.2,
    ten: 8.3,
    dialog: {
      intro:
        '글로벌 쿨다운 2.4초 절 난이도 트라이에 대비한 불굴 장비 세트입니다. 비주류 의지 불굴 음식인 "고급 소고기 구이"를 섭취하므로 음식 조달이 어려울 수도 있겠네요.',
      gears: [
        {
          itemId: "edengraceGreatsword",
          materiaIds: ["ten", "ten"]
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["dh", "ten"]
        },
        {
          itemId: "edengraceMailOfFending",
          materiaIds: ["ten", "ten"]
        },
        {
          itemId: "augmentedDeepshadowGauntletsOfFending",
          materiaIds: ["dh", "ten"]
        },
        {
          itemId: "edengraceTassetsOfFending",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceTrousersOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowSolleretsOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceEarringOfFending",
          materiaIds: ["sks", "ten"]
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfFending",
          materiaIds: ["sks", "ten"]
        },
        {
          itemId: "augmentedDeepshadowBraceletOfFending",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["dh", "det"]
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["dh", "ten"]
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
                        src={SiteInfo.assetsUrl + "/job-guide/drk.png"}
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
                    패치 5.1 기준 암흑기사의 Best-In-Slot 장비 세트 목록입니다.
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
                        <TableCell>{Items[gearSet.foodId].name}</TableCell>
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
