import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import React from "react";

import Actions from "../../../../data/5-1-craft-actions";
import Items from "../../../../data/5-1-craft-items";
import Materials from "../../../../data/5-1-craft-materials";
import SiteInfo from "../../../../data/site-info";
import CraftActionDisplay from "../../../../src/components/guide/craft-action-display";
import CraftGearDisplay from "../../../../src/components/guide/craft-gear-display";
import CraftGearStats from "../../../../src/components/guide/craft-gear-stats";
import CraftMaterialDisplay from "../../../../src/components/guide/craft-material-display";
import ExpansionPanels from "../../../../src/components/guide/expansion-panels";
import PanelDivider from "../../../../src/components/guide/panel-divider";
import PageComponent from "../../../../src/components/page-component";

const pageData = {
  title: "5.1 제작 가이드",
  description: "파이널 판타지 14 패치 5.1 제작 가이드.",
};

const gearSets = [
  {
    gears: [
      {
        itemId: "dwarvenMythrilSaw",
        materiaIds: [],
      },
      {
        itemId: "dwarvenCottonBeret",
        materiaIds: ["cp3", "cp3"],
      },
      {
        itemId: "dwarvenMythrilClawHammer",
        materiaIds: [],
      },
      {
        itemId: "dwarvenCottonJacket",
        materiaIds: [],
      },
      {
        itemId: "zelkovaEarrings",
        materiaIds: [],
      },
      {
        itemId: "swallowskinFingerlessGloves",
        materiaIds: [],
      },
      {
        itemId: "zelkovaNecklace",
        materiaIds: [],
      },
      {
        itemId: "swallowskinToolBelt",
        materiaIds: [],
      },
      {
        itemId: "zelkovaBracelets",
        materiaIds: [],
      },
      {
        itemId: "dwarvenCottonTrousers",
        materiaIds: [],
      },
      {
        itemId: "zelkovaRing",
        materiaIds: [],
      },
      {
        itemId: "swallowskinShoes",
        materiaIds: [],
      },
      {
        itemId: "zelkovaRing",
        materiaIds: [],
      },
    ],
  },
  {
    gears: [
      {
        itemId: "dwarvenMythrilSaw",
        materiaIds: [],
      },
      {
        itemId: "dwarvenCottonBeret",
        materiaIds: ["cp3", "cp3"],
      },
      {
        itemId: "dwarvenMythrilClawHammer",
        materiaIds: [],
      },
      {
        itemId: "dwarvenCottonJacket",
        materiaIds: [],
      },
      {
        itemId: "dwarvenMythrilEarCuffs",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "swallowskinFingerlessGloves",
        materiaIds: [],
      },
      {
        itemId: "dwarvenMythrilChoker",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "swallowskinToolBelt",
        materiaIds: [],
      },
      {
        itemId: "dwarvenMythrilBracelets",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "dwarvenCottonTrousers",
        materiaIds: [],
      },
      {
        itemId: "dwarvenMythrilRing",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "swallowskinShoes",
        materiaIds: [],
      },
      {
        itemId: "dwarvenMythrilRing",
        materiaIds: [],
        hq: true,
      },
    ],
  },
  {
    gears: [
      {
        itemId: "dwarvenMythrilSaw",
        materiaIds: [],
      },
      {
        itemId: "dwarvenCottonBeret",
        materiaIds: ["cp3", "cp3"],
      },
      {
        itemId: "dwarvenMythrilClawHammer",
        materiaIds: [],
      },
      {
        itemId: "dwarvenCottonJacket",
        materiaIds: [],
      },
      {
        itemId: "dwarvenMythrilEarCuffs",
        materiaIds: ["con8", "cp6", "con7", "con7", "cp4"],
        hq: true,
      },
      {
        itemId: "swallowskinFingerlessGloves",
        materiaIds: [],
      },
      {
        itemId: "dwarvenMythrilChoker",
        materiaIds: ["con8", "cp6", "con7", "con7", "cp4"],
        hq: true,
      },
      {
        itemId: "swallowskinToolBelt",
        materiaIds: [],
      },
      {
        itemId: "dwarvenMythrilBracelets",
        materiaIds: ["con8", "cp6", "con7", "con7", "cp4"],
        hq: true,
      },
      {
        itemId: "dwarvenCottonTrousers",
        materiaIds: [],
      },
      {
        itemId: "dwarvenMythrilRing",
        materiaIds: ["cra8", "cra7", "cra7", "con7", "cp5"],
        hq: true,
      },
      {
        itemId: "swallowskinShoes",
        materiaIds: [],
      },
      {
        itemId: "dwarvenMythrilRing",
        materiaIds: ["cra8", "cra7", "con7", "cp5", "con4"],
        hq: true,
      },
    ],
  },
  {
    gears: [
      {
        itemId: "dwarvenMythrilSaw",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "dwarvenCottonBeret",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilClawHammer",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "dwarvenCottonJacket",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilEarCuffs",
        materiaIds: ["con8", "cp6", "con7", "con7", "cp4"],
        hq: true,
      },
      {
        itemId: "swallowskinFingerlessGloves",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilChoker",
        materiaIds: ["con8", "cp6", "con7", "con7", "cp4"],
        hq: true,
      },
      {
        itemId: "swallowskinToolBelt",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilBracelets",
        materiaIds: ["con8", "cp6", "con7", "con7", "cp4"],
        hq: true,
      },
      {
        itemId: "dwarvenCottonTrousers",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilRing",
        materiaIds: ["cra8", "cra7", "cra7", "con7", "cp5"],
        hq: true,
      },
      {
        itemId: "swallowskinShoes",
        materiaIds: [],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilRing",
        materiaIds: ["cra8", "cra7", "con7", "cp5", "con4"],
        hq: true,
      },
    ],
  },
  {
    gears: [
      {
        itemId: "dwarvenMythrilSaw",
        materiaIds: ["cp5"],
        hq: true,
      },
      {
        itemId: "dwarvenCottonBeret",
        materiaIds: ["cra6", "cra6", "con4", "con4", "cp2"],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilClawHammer",
        materiaIds: ["cp5"],
        hq: true,
      },
      {
        itemId: "dwarvenCottonJacket",
        materiaIds: ["con6", "con6", "con4", "con4", "cp1"],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilEarCuffs",
        materiaIds: ["con8", "cp6", "con7", "con7", "cp4"],
        hq: true,
      },
      {
        itemId: "swallowskinFingerlessGloves",
        materiaIds: ["cra6", "cra6", "con4", "con4", "cp2"],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilChoker",
        materiaIds: ["con8", "cp6", "con7", "con7", "cp4"],
        hq: true,
      },
      {
        itemId: "swallowskinToolBelt",
        materiaIds: ["con6", "cp4", "con4", "cp3", "cp2"],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilBracelets",
        materiaIds: ["con8", "cp6", "con7", "con7", "cp4"],
        hq: true,
      },
      {
        itemId: "dwarvenCottonTrousers",
        materiaIds: ["con6", "con6", "cp4", "cp3", "cp2"],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilRing",
        materiaIds: ["cra8", "cra7", "cra7", "con7", "cp5"],
        hq: true,
      },
      {
        itemId: "swallowskinShoes",
        materiaIds: ["con6", "con6", "cp4", "cp3", "cp2"],
        hq: true,
      },
      {
        itemId: "dwarvenMythrilRing",
        materiaIds: ["cra8", "cra7", "con7", "cp5", "con4"],
        hq: true,
      },
    ],
  },
];

class CraftGuide extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      snackbar: false,
    };
  }

  render() {
    const soundEffects = {
      endOfMacro: 1,
      checkCondition: 1,
      endOfCrafting: 1,
    };

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
                      <Typography variant="h6">{pageData.title}</Typography>
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
                        src={SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png"}
                        style={{
                          maxWidth: 880,
                          width: "100%",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    패치 5.1에서는 채집/제작 시스템에 대대적인 개편이 가해졌으며
                    신규 2.5성 아이템 레벨 460 제작/채집 방어구와 주/부도구가
                    추가되었습니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    또한 이후 패치 5.11에서는 이슈가르드 재건 컨텐츠와 함께
                    새로운 제작법들이 추가되었습니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    본 가이드는 제작직 80레벨을 갓 달성하신 모험가분들의 스펙
                    업을 위한 단계별 장비/금단 및 매크로로 구성되어 있습니다.
                    패치 5.1 이전에 이미 제작직 80 레벨을 달성하고 일정 수준
                    이상의 스펙 업을 마치신 모험가분들께서는 각 단계별로 기재된
                    필요 스펙을 체크하시고 자신의 스펙에 알맞는 단계에서부터
                    시작하시면 됩니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    문의사항 및 피드백은 트위터(
                    <a
                      href="https://twitter.com/sylvia_moonfish"
                      target="_blank"
                    >
                      https://twitter.com/sylvia_moonfish
                    </a>
                    ) DM 혹은 이메일(sylvia.moonfish@gmail.com)로 부탁드립니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <ExpansionPanels
                  panels={[
                    {
                      title: "첫 장비 구입 (0/0/0)",
                      children: (
                        <React.Fragment>
                          <Grid item>
                            <Typography variant="h6">
                              NPC에게서 장비 구입
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              NPC에게서 구입할 수 있는 NQ 장비들로 최소 스펙을
                              맞추어줍니다.
                            </Typography>
                            <ul>
                              <li>
                                <Typography variant="body2">
                                  아이템 레벨 430제 주도구와 부도구:
                                  크리스타리움(X:9.3 Y:14.4)에 위치한 NPC
                                  베르나르스에게 구입.
                                </Typography>
                              </li>
                              <li>
                                <Typography variant="body2">
                                  아이템 레벨 430제 방어구와 벨트:
                                  크리스타리움(X:8.5 Y:13.4)에 위치한 NPC
                                  도다드에게 구입.
                                </Typography>
                              </li>
                              <li>
                                <Typography variant="body2">
                                  아이템 레벨 290제 악세서리: 쿠가네(X:11.8
                                  Y:12.2)에 위치한 NPC 우라케에게 구입.
                                </Typography>
                              </li>
                              <li>
                                <Typography variant="body2">
                                  명인의 마테리다: 검은장막 숲 북부삼림(X:24.9
                                  Y:22.7)에 위치한 NPC 이크살족 만물상에게
                                  이크살족 야만퀘 보상으로 얻는 화폐로 교환
                                  가능.
                                </Typography>
                              </li>
                            </ul>
                          </Grid>
                          <CraftGearDisplay
                            gearSet={gearSets[0]}
                            Items={Items}
                          />
                          <Grid item>
                            <Typography variant="body2">
                              위 장비를 전부 갖추었을 시 달성 가능한 스펙은
                              다음과 같습니다.
                            </Typography>
                          </Grid>
                          <CraftGearStats gearSet={gearSets[0]} Items={Items} />
                          <Grid item>
                            <Typography variant="body2">
                              8개의 제작직 전부 위 스펙을 갖추고 난 후 다음
                              단계로 넘어가주세요.
                            </Typography>
                          </Grid>
                        </React.Fragment>
                      ),
                    },
                    {
                      title: "430제 악세서리 제작 (1741/1594/369)",
                      children: (
                        <React.Fragment>
                          <Grid item>
                            <Typography variant="body2">
                              이 단계의 최종 목표는 430제 HQ 악세서리를 직접
                              제작하는 것입니다.
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              이 단계에 수록된 매크로들을 사용하기 위한 최소
                              스펙은 다음과 같습니다.
                            </Typography>
                          </Grid>
                          <CraftGearStats gearSet={gearSets[0]} Items={Items} />
                          <Grid item>
                            스펙이 부족할 경우 전 단계인 "첫 장비 구입" 단계를
                            참고해주세요.
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">
                              악세서리 재료 채집
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              아이템 레벨 430제 HQ 악세서리를 제작할 차례입니다.
                              제작을 위해 모아야 하는 재료들은 다음과 같습니다.
                              (밑재료는 전부 NQ로 모아도 괜찮습니다.)
                            </Typography>
                          </Grid>
                          <CraftMaterialDisplay
                            craftMaterials={[
                              {
                                label: "크리스탈",
                                materials: [
                                  {
                                    id: "fire-crystal",
                                    amount: 35,
                                  },
                                  {
                                    id: "wind-crystal",
                                    amount: 91,
                                  },

                                  {
                                    id: "lightning-crystal",
                                    amount: 41,
                                  },
                                ],
                              },
                              {
                                label: "채집",
                                materials: [
                                  {
                                    id: "dwarven-cotton-boll",
                                    amount: 20,
                                  },
                                  {
                                    id: "dimythrite-sand",
                                    amount: 32,
                                  },
                                  {
                                    id: "iridescent-cocoon",
                                    amount: 8,
                                  },
                                  {
                                    id: "effervescent-water",
                                    amount: 2,
                                  },
                                  {
                                    id: "mythrite-sand",
                                    amount: 8,
                                  },
                                ],
                              },
                            ]}
                            Materials={Materials}
                          />
                          <PanelDivider />
                          <Grid item>
                            <Typography variant="h6">초품 제작</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              다음으로 악세서리 제작에 사용될 초품 재료들을
                              제작해야 합니다. 아래 매크로들을 사용해 지정된
                              물품들을 제작해주세요.
                            </Typography>
                          </Grid>
                          <Grid item />
                          <CraftMaterialDisplay
                            craftMaterials={[
                              {
                                label: "제작할 물품",
                                materials: [
                                  {
                                    id: "dwarven-cotton-thread",
                                    amount: 15,
                                  },
                                ],
                              },
                            ]}
                            Materials={Materials}
                          />
                          <CraftActionDisplay
                            actionCard={[
                              "careful-synthesis",
                              "careful-synthesis",
                              "careful-synthesis",
                            ]}
                            actionMacro={[
                              {
                                label: {
                                  type: "macroLabel",
                                  value: 1,
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                            ]}
                            Actions={Actions}
                          />
                          <Grid item />
                          <CraftMaterialDisplay
                            craftMaterials={[
                              {
                                label: "제작할 물품",
                                materials: [
                                  {
                                    id: "iridescent-silk-thread",
                                    amount: 4,
                                    hq: true,
                                  },
                                ],
                              },
                            ]}
                            Materials={Materials}
                          />
                          <CraftActionDisplay
                            actionCard={[
                              "reflect",
                              "manipulation",
                              "innovation",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "basic-touch",
                              "innovation",
                              "prudent-touch",
                              "basic-touch",
                              "great-strides",
                              "byregots-blessing",
                              "basic-synthesis",
                            ]}
                            actionMacro={[
                              {
                                label: {
                                  type: "macroLabel",
                                  value: 1,
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "reflect",
                                  },
                                  {
                                    type: "action",
                                    value: "manipulation",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-touch",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "prudent-touch",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-touch",
                                  },
                                  {
                                    type: "prompt",
                                    value: "checkCondition",
                                    soundEffect: soundEffects.checkCondition,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionNotExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "great-strides",
                                  },
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                            ]}
                            Actions={Actions}
                          />
                          <Grid item />
                          <CraftMaterialDisplay
                            craftMaterials={[
                              {
                                label: "제작할 물품",
                                materials: [
                                  {
                                    id: "dwarven-mythril-nugget",
                                    amount: 8,
                                    hq: true,
                                  },
                                  {
                                    id: "dwarven-cotton",
                                    amount: 5,
                                    hq: true,
                                  },
                                ],
                              },
                            ]}
                            Materials={Materials}
                          />
                          <CraftActionDisplay
                            actionCard={[
                              "reflect",
                              "manipulation",
                              "innovation",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "basic-touch",
                              "innovation",
                              "prudent-touch",
                              "basic-touch",
                              "great-strides",
                              "byregots-blessing",
                              "basic-synthesis",
                            ]}
                            actionMacro={[
                              {
                                label: {
                                  type: "macroLabel",
                                  value: 1,
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "reflect",
                                  },
                                  {
                                    type: "action",
                                    value: "manipulation",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-touch",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "prudent-touch",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-touch",
                                  },
                                  {
                                    type: "prompt",
                                    value: "checkCondition",
                                    soundEffect: soundEffects.checkCondition,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionNotExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "great-strides",
                                  },
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                            ]}
                            Actions={Actions}
                          />
                          <PanelDivider />
                          <Grid item>
                            <Typography variant="h6">악세서리 제작</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              준비한 HQ 초품 재료들을 사용해 악세서리를
                              제작합니다. 꼭 모든 재료를 전부 HQ 재료로
                              채워넣어주세요!
                            </Typography>
                          </Grid>
                          <Grid item />
                          <CraftMaterialDisplay
                            craftMaterials={[
                              {
                                label: "제작할 물품",
                                materials: [
                                  {
                                    id: "dwarven-mythril-ear-cuffs",
                                    amount: 1,
                                    hq: true,
                                  },
                                  {
                                    id: "dwarven-mythril-choker",
                                    amount: 1,
                                    hq: true,
                                  },
                                  {
                                    id: "dwarven-mythril-bracelets",
                                    amount: 1,
                                    hq: true,
                                  },
                                  {
                                    id: "dwarven-mythril-ring",
                                    amount: 2,
                                    hq: true,
                                  },
                                ],
                              },
                            ]}
                            Materials={Materials}
                          />
                          <CraftActionDisplay
                            actionCard={[
                              "reflect",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "manipulation",
                              "observe",
                              "focused-synthesis",
                              "observe",
                              "focused-synthesis",
                              "observe",
                              "focused-synthesis",
                              "observe",
                              "focused-synthesis",
                              "great-strides",
                              "byregots-blessing",
                              "careful-synthesis",
                              "basic-synthesis",
                            ]}
                            actionMacro={[
                              {
                                label: {
                                  type: "macroLabel",
                                  value: 1,
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "reflect",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "manipulation",
                                  },
                                  {
                                    type: "action",
                                    value: "observe",
                                  },
                                  {
                                    type: "action",
                                    value: "focused-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "observe",
                                  },
                                  {
                                    type: "action",
                                    value: "focused-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "observe",
                                  },
                                  {
                                    type: "action",
                                    value: "focused-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "observe",
                                  },
                                  {
                                    type: "action",
                                    value: "focused-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "checkCondition",
                                    soundEffect: soundEffects.checkCondition,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionNotExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "great-strides",
                                  },
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                            ]}
                            Actions={Actions}
                          />
                          <PanelDivider />
                          <Grid item>
                            <Typography variant="h6">악세서리 착용</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              제작한 아이템 레벨 430 악세서리들을 전부
                              착용합니다.
                            </Typography>
                          </Grid>
                          <CraftGearDisplay
                            gearSet={gearSets[1]}
                            Items={Items}
                          />
                          <Grid item>
                            <Typography variant="body2">
                              위 장비를 전부 갖추었을 시 달성 가능한 스펙은
                              다음과 같습니다.
                            </Typography>
                          </Grid>
                          <CraftGearStats gearSet={gearSets[1]} Items={Items} />
                        </React.Fragment>
                      ),
                    },
                    {
                      title: "430제 악세서리 금단 (1837/1712/454)",
                      children: (
                        <React.Fragment>
                          <Grid item>
                            <Typography variant="body2">
                              이 단계의 최종 목표는 필요한 제작 비전서를
                              획득하고 전 단계에서 제작한 430제 HQ 악세서리의
                              금단 작업을 끝마치는 것입니다.
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              비전서는 황화로, 금단을 위한 제작 마테리아는
                              황화/백화 혹은 이슈가르드 부흥 화폐로 교환할 수
                              있습니다.
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              이 단계에 수록된 매크로들을 사용하기 위한 최소
                              스펙은 다음과 같습니다.
                            </Typography>
                          </Grid>
                          <CraftGearStats gearSet={gearSets[1]} Items={Items} />
                          <Grid item>
                            스펙이 부족할 경우 전 단계인 "430제 악세서리 제작"
                            단계를 참고해주세요.
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">목표</Typography>
                          </Grid>
                          <Grid item>
                            <ol>
                              <li>
                                <Typography variant="body2">
                                  단골손님과 황화를 보상으로 주는 로웨나 상회
                                  납품을 통해 황화를 획득한 후 모든 제작직
                                  비전서를 해금합니다. 비전서는 율모어에서
                                  황화와 교환할 수 있으며 모든 제작직 비전서를
                                  3권에서 7권까지만 교환하면 됩니다.
                                </Typography>
                              </li>
                              <li>
                                <Typography variant="body2">
                                  악세서리 금단을 마칩니다. 금단에 필요한
                                  마테리아의 획득 경로는 여러 가지가 있습니다.
                                </Typography>
                                <ul>
                                  <li>
                                    <Typography variant="body2">
                                      율모어에서 백화/황화와 교환.
                                    </Typography>
                                  </li>
                                  <li>
                                    <Typography variant="body2">
                                      이슈가르드 부흥 화폐와 교환.
                                    </Typography>
                                  </li>
                                  <li>
                                    <Typography variant="body2">
                                      장터에서 구입.
                                    </Typography>
                                  </li>
                                </ul>
                              </li>
                            </ol>
                          </Grid>
                          <PanelDivider />
                          <Grid item>
                            <Typography variant="h6">단골손님</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              단골손님 컨텐츠를 통해 황화와 백화를 획득할 수
                              있습니다. 백화는 제작 재료 및 마테리아 교환에,
                              황화는 비전서 교환에 사용할 수 있습니다.
                            </Typography>
                          </Grid>
                          <Grid item />
                          <Grid item>
                            <Typography variant="h6">
                              카이시르 전용 매크로
                            </Typography>
                          </Grid>
                          <CraftActionDisplay
                            actionCard={[
                              "reflect",
                              "manipulation",
                              "waste-not",
                              "innovation",
                              "preparatory-touch",
                              "preparatory-touch",
                              "preparatory-touch",
                              "byregots-blessing",
                              "careful-synthesis",
                              "careful-synthesis",
                              "careful-synthesis",
                              "careful-synthesis",
                            ]}
                            actionMacro={[
                              {
                                label: {
                                  type: "macroLabel",
                                  value: 1,
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "reflect",
                                  },
                                  {
                                    type: "action",
                                    value: "manipulation",
                                  },
                                  {
                                    type: "action",
                                    value: "waste-not",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "preparatory-touch",
                                  },
                                  {
                                    type: "action",
                                    value: "preparatory-touch",
                                  },
                                  {
                                    type: "action",
                                    value: "preparatory-touch",
                                  },
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                            ]}
                            Actions={Actions}
                          />
                          <Grid item />
                          <Grid item>
                            <Typography variant="h6">
                              카이시르 제외 나머지 단골손님 매크로
                            </Typography>
                          </Grid>
                          <CraftActionDisplay
                            actionCard={[
                              "trained-eye",
                              "careful-synthesis",
                              "careful-synthesis",
                              "careful-synthesis",
                            ]}
                            actionMacro={[
                              {
                                label: {
                                  type: "macroLabel",
                                  value: 1,
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "trained-eye",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                            ]}
                            Actions={Actions}
                          />
                          <PanelDivider />
                          <Grid item>
                            <Typography variant="h6">
                              로웨나 상회 납품
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              로웨나 상회 납품은 단골손님과는 달리 주제한이
                              없으므로 부족한 백화와 황화를 획득하기 좋은
                              수단입니다. 매일 납품 목록이 바뀌므로 모든
                              제작직의 목록을 체크하고 가장 재료를 조달하기 쉬운
                              물품을 골라 납품하도록 합시다.
                            </Typography>
                          </Grid>
                          <Grid item />
                          <Grid item>
                            <Typography variant="h6">
                              황화 납품용 매크로
                            </Typography>
                          </Grid>
                          <CraftActionDisplay
                            actionCard={[
                              "reflect",
                              "ingenuity",
                              "innovation",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "manipulation",
                              "ingenuity",
                              "innovation",
                              "prudent-touch",
                              "great-strides",
                              "byregots-blessing",
                              "careful-synthesis",
                            ]}
                            actionMacro={[
                              {
                                label: {
                                  type: "macroLabel",
                                  value: 1,
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "reflect",
                                  },
                                  {
                                    type: "action",
                                    value: "ingenuity",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "manipulation",
                                  },
                                  {
                                    type: "action",
                                    value: "ingenuity",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "prudent-touch",
                                  },
                                  {
                                    type: "prompt",
                                    value: "checkCondition",
                                    soundEffect: soundEffects.checkCondition,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionNotExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "great-strides",
                                  },
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                            ]}
                            Actions={Actions}
                          />
                          <Grid item />
                          <Grid item>
                            <Typography variant="h6">
                              백화 납품용 매크로
                            </Typography>
                          </Grid>
                          <CraftActionDisplay
                            actionCard={[
                              "reflect",
                              "ingenuity",
                              "innovation",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "manipulation",
                              "ingenuity",
                              "innovation",
                              "prudent-touch",
                              "prudent-touch",
                              "great-strides",
                              "byregots-blessing",
                              "careful-synthesis",
                              "careful-synthesis",
                              "basic-synthesis",
                            ]}
                            actionMacro={[
                              {
                                label: {
                                  type: "macroLabel",
                                  value: 1,
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "reflect",
                                  },
                                  {
                                    type: "action",
                                    value: "ingenuity",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "manipulation",
                                  },
                                  {
                                    type: "action",
                                    value: "ingenuity",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "prudent-touch",
                                  },
                                  {
                                    type: "action",
                                    value: "prudent-touch",
                                  },
                                  {
                                    type: "prompt",
                                    value: "checkCondition",
                                    soundEffect: soundEffects.checkCondition,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionNotExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "great-strides",
                                  },
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-synthesis",
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "basic-synthesis",
                                  },
                                ],
                              },
                            ]}
                            Actions={Actions}
                          />
                          <PanelDivider />
                          <Grid item>
                            <Typography variant="h6">
                              이슈가르드 부흥
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              이슈가르드 부흥 납품을 통해 특수 화폐를 얻을 수
                              있습니다. 이 화폐는 고유 탈것, 꼬마친구, 제작/채집
                              마테리아 등과 교환할 수 있습니다.
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              이슈가르드 부흥 납품용 80레벨 제작법의 경우 위에
                              기재된 백화 납품용 매크로를 사용해 제작하면
                              됩니다. 현재 스펙으로는 소장품 가치를 최고
                              보상까지 맞출 수 없는 점 유의해주세요.
                            </Typography>
                          </Grid>
                          <PanelDivider />
                          <Grid item>
                            <Typography variant="h6">
                              430 악세서리 금단
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              이번 단계의 최종 목표는 아래 금단을 완료하는
                              것입니다. 필요한 마테리아는 황화/백화 또는
                              이슈가르드 부흥 화폐와 교환하거나 장터에서 구매할
                              수 있습니다.
                            </Typography>
                          </Grid>
                          <CraftGearDisplay
                            gearSet={gearSets[2]}
                            Items={Items}
                          />
                          <Grid item>
                            <Typography variant="body2">
                              위 장비를 전부 갖추었을 시 달성 가능한 스펙은
                              다음과 같습니다.
                            </Typography>
                          </Grid>
                          <CraftGearStats gearSet={gearSets[2]} Items={Items} />
                        </React.Fragment>
                      ),
                    },
                    {
                      title: "430제 장비 제작 (1921/1827/502)",
                      children: (
                        <React.Fragment>
                          <Grid item>
                            <Typography variant="body2">
                              이 단계의 최종 목표는 430제 HQ 주 도구와 부 도구,
                              그리고 방어구를 제작하는 것입니다.
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              이 단계에 수록된 매크로들을 사용하기 위한 최소
                              스펙은 다음과 같습니다.
                            </Typography>
                          </Grid>
                          <CraftGearStats gearSet={gearSets[2]} Items={Items} />
                          <Grid item>
                            <Typography variant="body2">
                              스펙이 부족할 경우 전 단계인 "430제 악세서리 금단"
                              단계를 참고해주세요.
                            </Typography>
                          </Grid>
                          <PanelDivider />
                          <Grid item>
                            <Typography variant="h6">
                              430제 장비 제작
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              아래 매크로를 사용해 모든 아이템 레벨 430제
                              방어구와 벨트, 그리고 모든 제작직의 주/부 도구를
                              제작해주세요.
                            </Typography>
                          </Grid>
                          <Grid item />
                          <CraftActionDisplay
                            actionCard={[
                              "reflect",
                              "ingenuity",
                              "innovation",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "delicate-synthesis",
                              "manipulation",
                              "ingenuity",
                              "innovation",
                              "prudent-touch",
                              "prudent-touch",
                              "great-strides",
                              "byregots-blessing",
                              "careful-synthesis",
                              "careful-synthesis",
                              "careful-synthesis",
                            ]}
                            actionMacro={[
                              {
                                label: {
                                  type: "macroLabel",
                                  value: 1,
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "reflect",
                                  },
                                  {
                                    type: "action",
                                    value: "ingenuity",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "delicate-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "manipulation",
                                  },
                                  {
                                    type: "action",
                                    value: "ingenuity",
                                  },
                                  {
                                    type: "action",
                                    value: "innovation",
                                  },
                                  {
                                    type: "action",
                                    value: "prudent-touch",
                                  },
                                  {
                                    type: "action",
                                    value: "prudent-touch",
                                  },
                                  {
                                    type: "prompt",
                                    value: "checkCondition",
                                    soundEffect: soundEffects.checkCondition,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionNotExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "great-strides",
                                  },
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                              {
                                label: {
                                  type: "conditionExcellentLabel",
                                },
                                lines: [
                                  {
                                    type: "action",
                                    value: "byregots-blessing",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "action",
                                    value: "careful-synthesis",
                                  },
                                  {
                                    type: "prompt",
                                    value: "endOfCrafting",
                                    soundEffect: soundEffects.endOfCrafting,
                                  },
                                ],
                              },
                            ]}
                            Actions={Actions}
                          />
                          <PanelDivider />
                          <Grid item>
                            <Typography variant="h6">장비 착용</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              제작한 장비들을 전부 착용합니다.
                            </Typography>
                          </Grid>
                          <CraftGearDisplay
                            gearSet={gearSets[3]}
                            Items={Items}
                          />
                          <Grid item>
                            <Typography variant="body2">
                              위 장비를 전부 갖추었을 시 달성 가능한 스펙은
                              다음과 같습니다.
                            </Typography>
                          </Grid>
                          <CraftGearStats gearSet={gearSets[3]} Items={Items} />
                        </React.Fragment>
                      ),
                    },
                    {
                      title: "430제 장비 금단 (2151/2037/497)",
                      children: (
                        <React.Fragment>
                          <Grid item>
                            <Typography variant="body2">
                              이 단계의 최종 목표는 430제 장비 금단을 통해 460제
                              장비 제작을 위한 스펙을 만드는 것입니다.
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              금단에 필요한 마테리아는 백화/황화/이슈가르드 부흥
                              화폐와 교환하거나 장터에서 구매할 수 있습니다.
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              단골손님, 황화, 백화 및 이슈가르드 부흥 납품은
                              "430제 악세서리 금단" 단계에 수록된 매크로들을
                              사용해주세요.
                            </Typography>
                          </Grid>
                          <PanelDivider />
                          <Grid item>
                            <Typography variant="h6">430 장비 금단</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">
                              이번 단계의 최종 목표는 아래 금단을 완료하는
                              것입니다. 필요한 마테리아는 황화/백화 또는
                              이슈가르드 부흥 화폐와 교환하거나 장터에서 구매할
                              수 있습니다.
                            </Typography>
                          </Grid>
                          <CraftGearDisplay
                            gearSet={gearSets[4]}
                            Items={Items}
                          />
                          <Grid item>
                            <Typography variant="body2">
                              위 장비를 전부 갖추었을 시 달성 가능한 스펙은
                              다음과 같습니다.
                            </Typography>
                          </Grid>
                          <CraftGearStats gearSet={gearSets[4]} Items={Items} />
                        </React.Fragment>
                      ),
                    },
                  ]}
                />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default CraftGuide;
