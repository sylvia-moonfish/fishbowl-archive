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
    description: "글쿨 2.43초 신앙 1408 직격 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0
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
        '직격에 투자해 DPS를 높인 장비 세트입니다. 신앙이 낮은 편이므로 MP 관리에 유의해주세요. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengracePlainsphere",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceTempleChainOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceArmletsOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceTassetsOfHealing",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengracePantaloonsOfHealing",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceSandalsOfHealing",
          materiaIds: ["ch", "dh"]
        },
        {
          itemId: "augmentedDeepshadowEarringOfHealing",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfHealing",
          materiaIds: ["ch", "dh"]
        },
        {
          itemId: "edengraceBraceletOfHealing",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowRingOfHealing",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "deepshadowRingOfHealing",
          materiaIds: ["dh", "dh"]
        }
      ]
    }
  },
  {
    description: "글쿨 2.41초 신앙 1395 힐러 공용 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0
    },
    dps: 0,
    hps: 0,
    mpRegen: 0,
    gcd: 0,
    foodId: "pixieberryTea",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '백마 및 학자와 공유할 수 있는 장비 세트입니다. 다만 점성술사가 사용하기에는 신앙이 낮은 편이므로 MP 관리에 주의를 요합니다. 음식은 점성술사일 경우 "픽시딸기 차"를, 학자나 백마도사일 경우 "쿠쿠루 러스크"를 섭취합니다.',
      gears: [
        {
          itemId: "edengracePlainsphere",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceTempleChainOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceArmletsOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceTassetsOfHealing",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengracePantaloonsOfHealing",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceSandalsOfHealing",
          materiaIds: ["ch", "dh"]
        },
        {
          itemId: "augmentedDeepshadowEarringOfHealing",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "edengraceChokerOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowBraceletOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceRingOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowRingOfHealing",
          materiaIds: ["dh", "dh"]
        }
      ]
    }
  },
  {
    description: "글쿨 2.45초 신앙 1791 절 트라이용 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0
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
        '직격을 낮추고 신앙을 높인 장비 세트입니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengracePlainsphere",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceTempleChainOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowArmguardsOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceTassetsOfHealing",
          materiaIds: ["det", "sps"]
        },
        {
          itemId: "edengracePantaloonsOfHealing",
          materiaIds: ["det", "det"]
        },
        {
          itemId: "edengraceSandalsOfHealing",
          materiaIds: ["ch", "det"]
        },
        {
          itemId: "augmentedDeepshadowEarringOfHealing",
          materiaIds: ["det", "sps"]
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfHealing",
          materiaIds: ["ch", "det"]
        },
        {
          itemId: "edengraceBraceletOfHealing",
          materiaIds: ["det", "det"]
        },
        {
          itemId: "edengraceRingOfHealing",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowRingOfHealing",
          materiaIds: ["dh", "det"]
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
      gearSet.attributes.main = Math.floor(
        Math.floor((Calculations.level.main * Calculations.whm.mnd) / 100) +
          Calculations.clan.mnd +
          Calculations.trait
      );
      gearSet.attributes.ch = Calculations.level.sub;
      gearSet.attributes.dh = Calculations.level.sub;
      gearSet.attributes.det = Calculations.level.main;
      gearSet.attributes.sps = Calculations.level.sub;
      gearSet.attributes.pie = Calculations.level.main;

      gearSet.dialog.gears.forEach(gear => {
        if (!Calculations[gear.itemId]) {
          console.log(gear.itemId);
          return;
        }

        if (Calculations[gear.itemId]["wd"]) {
          gearSet.attributes.wd = Calculations[gear.itemId].wd;
        }

        const attributes = Object.keys(Calculations[gear.itemId])
          .filter(key => {
            return key !== "wd";
          })
          .map(key => {
            return {
              key: key,
              value: Calculations[gear.itemId][key]
            };
          });

        attributes.sort((a, b) => {
          return b.value - a.value;
        });

        const subAttrMax = attributes[1].value;

        const attributeObj = {};

        attributes.forEach(attr => {
          attributeObj[attr.key] = attr.value;
        });

        gear.materiaIds.forEach(materiaId => {
          if (!Calculations[materiaId]) {
            console.log(materiaId);
            return;
          }

          if (!attributeObj[materiaId]) {
            attributeObj[materiaId] = Calculations[materiaId];
          } else {
            attributeObj[materiaId] += Calculations[materiaId];

            if (attributeObj[materiaId] > subAttrMax)
              attributeObj[materiaId] = subAttrMax;
          }
        });

        Object.keys(attributeObj).forEach(key => {
          if (!gearSet.attributes[key]) {
            gearSet.attributes[key] = attributeObj[key];
          } else {
            gearSet.attributes[key] += attributeObj[key];
          }
        });
      });

      if (!Calculations[gearSet.foodId]) {
        console.log(gearSet.foodId);
        return;
      }

      Object.keys(Calculations[gearSet.foodId]).forEach(key => {
        if (!gearSet.attributes[key]) return;

        let value = Math.floor(
          (gearSet.attributes[key] * Calculations[gearSet.foodId][key].value) /
            100
        );
        if (value > Calculations[gearSet.foodId][key].max)
          value = Calculations[gearSet.foodId][key].max;

        gearSet.attributes[key] += value;
      });

      gearSet.gcd =
        Math.floor(
          (Math.floor(
            2000 -
              Math.floor(
                ((gearSet.attributes.sps - Calculations.level.sub) * 130) /
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
      gearSet.mpRegen =
        Math.floor(
          ((gearSet.attributes.pie - Calculations.level.main) * 150) /
            Calculations.level.div
        ) + 200;

      const attackPotency = 250;
      const trait = 30;
      const fAttack =
        Math.floor(((gearSet.attributes.main - 340) * 165) / 340) + 100;
      const fDet = Math.floor(
        ((gearSet.attributes.det - Calculations.level.main) * 130) /
          Calculations.level.div +
          1000
      );
      const fWd = Math.floor(
        (Calculations.level.main * Calculations.whm.mnd) / 1000 +
          gearSet.attributes.wd
      );
      const fCrit = Math.floor(
        ((gearSet.attributes.ch - Calculations.level.sub) * 200) /
          Calculations.level.div +
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
                        <TableCell>{gearSet.hps}</TableCell>
                        <TableCell>{gearSet.mpRegen}</TableCell>
                        <TableCell>{gearSet.gcd} 초</TableCell>
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
