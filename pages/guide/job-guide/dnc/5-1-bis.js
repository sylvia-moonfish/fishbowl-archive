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
  title: "무도가 가이드 - 5.1 BiS",
  description: "파이널 판타지 14 무도가 가이드 - 5.1 BiS"
};

const gearSets = [
  {
    description: "글쿨 2.5초 석판 반지 세트. 음유/기공과 공유 가능.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0
    },
    dps: 11772.03,
    gcd: 0,
    foodId: "robeLettuceSalad",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '석판 반지를 착용해 기시를 버리고 직격을 챙긴 장비 세트입니다. 반지와 무기만 바꾸면 음유시인이나 기공사와도 공유가 가능합니다. 기본 글로벌 쿨다운 2.5초 세트이기 때문에 로테이션이 약간 빡빡할 수 있습니다. "기교 무도"가 글로벌 쿨다운과 정확히 맞물리지 않으므로 1글쿨을 버리지 않으면 "기교 무도"가 다른 시너지 버프들과 어긋나게 될 수 있으니 유의해주세요. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceTathlums",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceHelmOfAiming",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceMailOfAiming",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowGlovesOfAiming",
          materiaIds: ["dh", "dh"]
        },
        {
          itemId: "augmentedDeepshadowTassetsOfAiming",
          materiaIds: ["det", "det"]
        },
        {
          itemId: "augmentedDeepshadowBreechesOfAiming",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceGreavesOfAiming",
          materiaIds: ["ch", "dh"]
        },
        {
          itemId: "edengraceEarringOfAiming",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfAiming",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceBraceletOfAiming",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "augmentedDeepshadowRingOfAiming",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "deepshadowRingOfAiming",
          materiaIds: ["ch", "ch"]
        }
      ]
    }
  },
  {
    description: "글쿨 2.44초 2분 시너지 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0
    },
    dps: 11715.6,
    gcd: 0,
    foodId: "robeLettuceSalad",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        '기시속을 약간 높여 좀 더 편안하게 로테이션을 돌릴 수 있도록 글로벌 쿨다운을 2.44초로 맞춘 장비 세트입니다. "기교 무도"가 다른 2분 시너지들과 글쿨 로스 없이 정확히 맞아들어가므로 다른 시너지 버프 직업들이 파티에 있다면 2.5초 장비 세트보다 좀 더 효율적입니다. 템렙에 따른 활력 때문에 절렉산더에서도 유용합니다. 음식은 "요술양배추 샐러드"를 섭취합니다.',
      gears: [
        {
          itemId: "edengraceTathlums",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceHelmOfAiming",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceMailOfAiming",
          materiaIds: ["det", "det"]
        },
        {
          itemId: "edengraceGauntletsOfAiming",
          materiaIds: ["det", "det"]
        },
        {
          itemId: "augmentedDeepshadowTassetsOfAiming",
          materiaIds: ["det", "det"]
        },
        {
          itemId: "augmentedDeepshadowBreechesOfAiming",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceGreavesOfAiming",
          materiaIds: ["ch", "dh"]
        },
        {
          itemId: "edengraceEarringOfAiming",
          materiaIds: ["ch", "ch"]
        },
        {
          itemId: "edengraceChokerOfAiming",
          materiaIds: ["ch", "det"]
        },
        {
          itemId: "augmentedDeepshadowBraceletOfAiming",
          materiaIds: ["det", "det"]
        },
        {
          itemId: "edengraceRingOfAiming",
          materiaIds: ["ch", "det"]
        },
        {
          itemId: "augmentedDeepshadowRingOfAiming",
          materiaIds: ["ch", "ch"]
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
        Math.floor((Calculations.level.main * Calculations.dnc.dex) / 100) +
          Calculations.clan.dex +
          Calculations.trait
      );
      gearSet.attributes.ch = Calculations.level.sub;
      gearSet.attributes.dh = Calculations.level.sub;
      gearSet.attributes.det = Calculations.level.main;
      gearSet.attributes.sks = Calculations.level.sub;

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
      /*
            const attackPotency = 800;
            const trait = 0;
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

            gearSet.dps = Math.floor((damage / gearSet.gcd) * 100) / 100;*/
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
                        src={SiteInfo.assetsUrl + "/job-guide/dnc.png"}
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
                    패치 5.1 기준 무도가의 Best-In-Slot 장비 세트 목록입니다.
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
                            <TableCell align="center">민첩성</TableCell>
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
