import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import LaunchIcon from "@material-ui/icons/Launch";

import React from "react";

import ExpansionTitles from "../../../../data/expansion-titles";
import GimmickColorType from "../../../../data/gimmick-color-type";
import SiteInfo from "../../../../data/site-info";
import ExpansionPanelsBlock from "../../../../src/components/blocks/expansion-panels-block";
import TimelineBlock from "../../../../src/components/blocks/timeline-block";
import GuidePageComponent from "../../../../src/components/guide-page-component";

const pageData = {
  title: "희망의 낙원 에덴 영웅: 각성편 4",
  description:
    "파이널 판타지 14 레이드 가이드 - 희망의 낙원 에덴 영웅: 각성편 4",
  videoBaseUrl:
    "https://sylvia-moonfish.github.io/fishbowl-video-1/guide/raid-guide/shb/edens-gate-sepulture-savage"
};

class EdensGateSepultureSavage extends GuidePageComponent {
  constructor(props) {
    super(props);

    this.state.openedDialog = "crumblingDownBombBouldersSeismicWave";
  }

  render() {
    const colorTypes = GimmickColorType[this.props.currentTheme];

    this.gimmickData = {
      bombBoulders: {
        name: "Bomb Boulders",
        description: "3줄 시한폭탄",
        color: colorTypes.everyone
      },
      crumblingDown: {
        name: "Crumbling Down",
        description: "거리 비례 피해 돌 소환",
        color: colorTypes.anyone
      },
      crumblingDownBombBouldersSeismicWave: {
        ids: ["crumblingDown", "bombBoulders", "seismicWave"]
      },
      dualEarthenFists: {
        name: "Dual Earthen Fists",
        description: "파란색 원형 장판 넉백",
        color: colorTypes.everyone
      },
      dualEarthenFistsWeightOfTheWorld: {
        ids: ["dualEarthenFists", "weightOfTheWorld"]
      },
      earthenAnguish: {
        name: "Earthen Anguish",
        description: "거대 타이탄 탱크 버스터",
        color: colorTypes.tank
      },
      earthenAnguishMegalith: {
        ids: ["earthenAnguish", "megalith"]
      },
      earthenFist: {
        name: "Earthen Fist",
        description: "2연속 주먹질",
        color: colorTypes.everyone
      },
      earthenFistWeightOfTheLand: {
        ids: ["earthenFist", "weightOfTheLand"]
      },
      earthenFury: {
        name: "Earthen Fury",
        description: "거대 타이탄 광역기",
        color: colorTypes.heal
      },
      earthenGauntlets: {
        name: "Earthen Gauntlets",
        description: "산사태 형태로 변신",
        color: colorTypes.noOne
      },
      earthenWheels: {
        name: "Earthen Wheels",
        description: "자동차 형태로 변신",
        color: colorTypes.noOne
      },
      explosion: {
        name: "Explosion",
        description: "시한폭탄",
        color: colorTypes.noOne
      },
      evilEarth: {
        name: "Evil Earth",
        description: "연속 폭발 장판",
        color: colorTypes.everyone
      },
      evilEarth1: {
        ids: ["evilEarth"]
      },
      faultLine: {
        name: "Fault Line",
        description: "직선 주행",
        color: colorTypes.everyone
      },
      faultLineMagnitude50: {
        ids: ["faultLine", "pulseOfTheLand", "forceOfTheLand", "magnitude50"]
      },
      forceOfTheLand: {
        name: "Force of the Land",
        description: "오렌지색 네모 징",
        color: colorTypes.anyone
      },
      geocrush: {
        name: "Geocrush",
        description: "미니 타이탄 점프 + 넉백",
        color: colorTypes.noOne
      },
      landslide: {
        name: "Landslide",
        description: "T자형 공격 + 시한폭탄",
        color: colorTypes.everyone
      },
      magnitude50: {
        name: "Magnitude 5.0",
        description: "도넛 범위 공격",
        color: colorTypes.everyone
      },
      massiveLandslide: {
        name: "Massive Landslide",
        description: "산사태",
        color: colorTypes.everyoneSpecial
      },
      massiveLandslide1: {
        ids: ["massiveLandslide", "pulseOfTheLand", "forceOfTheLand"]
      },
      megalith: {
        name: "Megalith",
        description: "셰어 탱크 버스터",
        color: colorTypes.tank
      },
      orogenesis: {
        name: "Orogenesis (미니 타이탄)",
        description: "미니 타이탄 거대화",
        color: colorTypes.noOne
      },
      pulseOfTheLand: {
        name: "Pulse of the Land",
        description: "노란색 세모 징",
        color: colorTypes.anyone
      },
      rockThrow: {
        name: "Rock Throw",
        description: "힐러 돌감옥",
        color: colorTypes.heal
      },
      seismicWave: {
        name: "Seismic Wave",
        description: "큰 돌 뒤에 숨기",
        color: colorTypes.everyone
      },
      stonecrusher: {
        name: "Stonecrusher",
        description: "3연속 탱크 버스터",
        color: colorTypes.tank
      },
      tectonicUplift: {
        name: "Tectonic Uplift",
        description: "맵 융기",
        color: colorTypes.everyoneSpecial
      },
      tectonicUplift1: {
        ids: [
          "tectonicUplift",
          "pulseOfTheLand",
          "forceOfTheLand",
          "weightOfTheWorld"
        ]
      },
      voiceOfTheLand: {
        name: "Voice of the Land",
        description: "미니 타이탄 광역기",
        color: colorTypes.heal
      },
      weightOfTheLand: {
        name: "Weight of the Land",
        description: "랜덤 장판 8개",
        color: colorTypes.noOne
      },
      weightOfTheLandPulseOfTheLand: {
        ids: ["weightOfTheLand", "pulseOfTheLand"]
      },
      weightOfTheWorld: {
        name: "Weight of the World",
        description: "파란색 세모 징",
        color: colorTypes.anyone
      }
    };

    const timelines = [
      [
        {
          id: "stonecrusher",
          timestamp: "0:11"
        },
        {
          id: "weightOfTheLandPulseOfTheLand",
          timestamp: "0:26"
        },
        {
          id: "evilEarth1",
          timestamp: "0:36"
        },
        {
          id: "forceOfTheLand",
          timestamp: "0:48"
        },
        {
          id: "voiceOfTheLand",
          timestamp: "0:51"
        },
        {
          id: "geocrush",
          timestamp: "1:01"
        },
        {
          instruction: this.generateString([
            "이후 무작위로",
            this.gimmickData.earthenGauntlets.name,
            "혹은",
            this.gimmickData.earthenWheels.name,
            "페이즈가 이어집니다."
          ]),
          color: colorTypes.instruction
        },
        {
          instruction: this.generateString([
            "여기서는",
            this.gimmickData.earthenGauntlets.name,
            "가 사용되었다고 가정하고 진행하겠습니다."
          ]),
          color: colorTypes.instruction
        },
        {
          id: "earthenGauntlets",
          timestamp: "1:10"
        },
        {
          id: "massiveLandslide1",
          timestamp: "1:17"
        },
        {
          id: "voiceOfTheLand",
          timestamp: "1:27"
        },
        {
          id: "landslide",
          timestamp: "1:42"
        },
        {
          instruction: this.generateString([
            this.gimmickData.earthenGauntlets.name,
            "페이즈가 끝났습니다."
          ]),
          color: colorTypes.instruction
        },
        {
          instruction: this.generateString([
            "미니 타이탄이 다시 기본 형태로 변신한 후 아래 기믹을 이어갑니다."
          ]),
          color: colorTypes.instruction
        },
        {
          id: "crumblingDownBombBouldersSeismicWave",
          timestamp: "2:08"
        },
        {
          id: "voiceOfTheLand",
          timestamp: "2:42"
        },
        {
          id: "stonecrusher",
          timestamp: "2:50"
        },
        {
          id: "geocrush",
          timestamp: "3:13"
        },
        {
          instruction: this.generateString([
            "이전에",
            this.gimmickData.earthenGauntlets.name,
            "를 사용했다면",
            this.gimmickData.earthenWheels.name,
            "를,",
            this.gimmickData.earthenWheels.name,
            "를 사용했다면",
            this.gimmickData.earthenGauntlets.name,
            "를 사용합니다."
          ]),
          color: colorTypes.instruction
        },
        {
          instruction: this.generateString([
            "본 타임라인은 위에",
            this.gimmickData.earthenGauntlets.name,
            "를 사용했다고 가정했으므로",
            this.gimmickData.earthenWheels.name,
            "가 사용됩니다."
          ]),
          color: colorTypes.instruction
        },
        {
          id: "earthenWheels",
          timestamp: "3:21"
        },
        {
          id: "faultLineMagnitude50",
          timestamp: "3:26"
        },
        {
          instruction: this.generateString([
            this.gimmickData.earthenWheels.name,
            "페이즈가 끝났습니다."
          ]),
          color: colorTypes.instruction
        },
        {
          instruction: this.generateString([
            "이 시점에 미니 타이탄의 체력이 적어도 71% 이하인 것이 좋습니다."
          ]),
          color: colorTypes.warning
        },
        {
          instruction: this.generateString([
            "2 페이즈 - 거대 타이탄으로 이어집니다."
          ]),
          color: colorTypes.instruction
        }
      ],
      [
        {
          instruction: this.generateString([
            "페이즈 전환 중에는 타겟팅/공격이 불가능합니다."
          ]),
          color: colorTypes.instruction
        },
        {
          id: "orogenesis",
          timestamp: "3:50"
        },
        {
          instruction: this.generateString([
            "페이즈 전환이 끝나면 거대 타이탄이 맵 북쪽에 고정되며 후측 판정이 사라집니다."
          ]),
          color: colorTypes.instruction
        },
        {
          id: "earthenFury",
          timestamp: "4:17"
        },
        {
          id: "earthenFistWeightOfTheLand",
          timestamp: "4:31"
        },
        {
          id: "dualEarthenFistsWeightOfTheWorld",
          timestamp: "4:47"
        },
        {
          id: "earthenAnguishMegalith",
          timestamp: "4:57"
        },
        {
          id: "tectonicUplift1",
          timestamp: "5:12"
        },
        {
          id: "earthenFury",
          timestamp: "5:32"
        }
      ]
    ];

    const dialogs = [
      this.generateDialog(
        "bombBoulders",
        pageData.videoBaseUrl + "/bomb-boulders",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "미니 타이탄이 작은 시한폭탄 돌덩어리들을 순차적으로 소환합니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "image",
                src: "/1.png",
                width: 300
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  '시한폭탄들은 소환된 순서대로 폭발하며 피격당한 대상에게 큰 마법 피해와 함께 "주는 피해 감소", "받는 피해 증가" 등의 디버프를 부여하므로 꼭 회피해주세요.'
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "세로줄 총 3줄이 소환되며 항상 가운데줄이 가장 먼저 소환됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "즉 등장 가능한 시한폭탄의 조합은 다음과 같습니다. (각 아이콘의 숫자가 등장 순서를 나타냅니다.)"
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "image",
                src: "/2.png",
                width: 300
              },
              {
                type: "image",
                src: "/3.png",
                width: 300
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "crumblingDown",
        pageData.videoBaseUrl + "/crumbling-down",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "crumblingDown",
                    type: "chip"
                  },
                  "시전을 시작하는 순간 대상자 두 명의 머리 위에 빨간 징이 표시됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "대상자는 총 2명으로 탱힐 중 1명과 딜러 중 1명이 무작위로 선택됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "loopingVideo",
                height: 360,
                src: "/1.mp4"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "시전이 끝나는 순간 빨간 징 대상자 두 명의 발 밑에 거리 비례 피해 징이 생성됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "동시에 첫 번째 대상자가 아니었던 나머지 6명의 파티원 중 무작위로 탱힐 중 1명, 딜러 중 1명의 머리 위에 두 번째 빨간 징이 표시됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "loopingVideo",
                height: 360,
                src: "/2.mp4"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "이 빨간 징 역시 일정 시간이 지나면 사라지며 징 대상자의 발 밑에 거리 비례 피해 징을 생성합니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "이후 거리 비례 피해 징의 위치에 커다란 돌덩어리가 낙하하며 파티원 모두에게 강력한 거리 비례 마법 피해를 입힙니다."
                ],
                variant: "body2"
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "crumblingDownBombBouldersSeismicWave",
        pageData.videoBaseUrl + "/crumbling-down-bomb-boulders-seismic-wave",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "이후 나올 기믹 처리를 위해 미니 타이탄을 미리 맵 중앙에 주차하고 머리를 북쪽으로 돌려주세요."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "crumblingDown",
                    type: "chip"
                  },
                  "처리를 위해 바닥징을 사용할 것입니다. 바닥징은 아래와 같이 찍혀있다고 가정합니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "image",
                src: "/1.png",
                width: 500
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "crumblingDown",
                    type: "chip"
                  },
                  ",",
                  {
                    id: "bombBoulders",
                    type: "chip"
                  },
                  ",",
                  {
                    id: "seismicWave",
                    type: "chip"
                  },
                  "가 빠르게 순차적으로 등장합니다. 일단 등장하는 순서에 따라 차근차근 하나씩 자세히 살펴본 후, 전체 타이밍을 살펴보도록 할게요."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "divider"
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "미니 타이탄이",
                  {
                    id: "crumblingDown",
                    type: "chip"
                  },
                  "시전을 시작합니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "아래 그림처럼 빨간 징이 찍힌 탱힐은 A징 위에, 빨간 징이 찍힌 딜러는 C징 위에 돌덩어리를 떨어트려주세요. 빨간 징이 찍히지 않은 플레이어들은 B 징과 D 징의 사이에 모여 A, C 징으로부터 최대한 멀리 자리잡아줍니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "image",
                src: "/2.png",
                width: 500
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "빨간 징 대상자들은 바위를 깔고 나서 재빨리 본진에 합류해주세요.",
                  {
                    id: "crumblingDown",
                    type: "chip"
                  },
                  "시전이 끝나는 순간 돌덩어리의 위치는 고정되므로 시전 바가 끝나는 것을 확인하자마자 곧바로 본진에 합류하면 됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "divider"
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "거리 비례 징이 나타남과 동시에 두 번째",
                  {
                    id: "crumblingDown",
                    type: "chip"
                  },
                  "징이 표시됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "자신이 징이 찍혔는지 재빨리 확인한 후 아래 그림처럼 징이 찍힌 탱힐은 B징 위에, 딜러는 D징 위에 돌덩어리를 떨어트려주세요. 나머지 파티원들은 그대로 B 징과 D 징의 사이에서 대기합니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "image",
                src: "/3.png",
                width: 500
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "빨간 징 대상자들은 빨간 징이 사라지는 순간 위치가 고정되므로 징이 사라지자마자 바로 본진에 합류해주세요."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "divider"
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "A 징과 C 징에 첫 번째 돌덩어리가 떨어지며 파티원 모두에게 마법 피해를 입힙니다. 돌덩어리가 떨어진 것을 확인하자마자 모두 미니 타이탄을 가로질러 A 징과 C 징의 사이로 이동해주세요."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "loopingVideo",
                height: 360,
                src: "/4.mp4"
              }
            ]
          },
          {
            type: "divider"
          }
        ]
      ) /*
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/5.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="bombBoulders"
                  openDialog={openDialog}
                />{" "}
                시전을 완료함과 동시에 A 징과 C 징의 돌덩어리 중 하나가 빛나기
                시작합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                빛나지 않는 돌덩어리 쪽으로 미니 타이탄을 데려갑니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                동시에 B 징과 D 징에서 거리 비례 징이 터지므로 힐업에
                유의해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/6.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄을 데려가면서 소환되는 시한폭탄의 순서를
                눈여겨봅시다. 언제나 가운뎃줄이 가장 먼저 소환됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                만약 A, C 징 쪽 시한폭탄이 2번째로 소환되었다면 회피하는 것이 꽤
                까다로울 수 있으므로 마음의 준비를 하세요.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/seismic-wave/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                돌덩어리 뒤에 숨어{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="seismicWave"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.seismicWave.name, "를")}{" "}
                피해줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이제 시한폭탄을 회피할 차례입니다. A, C 징 줄 시한폭탄이 가장
                마지막으로 소환되었다면 피하기가 수월하지만, A, C 징 줄
                시한폭탄이 2 번째로 소환되었다면 회피하는 타이밍이 꽤 빡빡한
                편입니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/7.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                1.{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="seismicWave"
                  openDialog={openDialog}
                />{" "}
                시전이 끝나자마자 A 징에서 살짝 남쪽, 시한폭탄 2개의 정가운데
                부근으로 이동.
              </Typography>
              <Typography variant="body2">
                2. 적개심 목록에서 첫 번째 시한폭탄의{" "}
                <InlineChip
                  currentId="explosion"
                  gimmickData={dummyGimmickData}
                  id="explosion"
                  openDialog={openDialog}
                />{" "}
                시전 바를 확인.
              </Typography>
              <Typography variant="body2">
                3. 첫 번째 시한폭탄의{" "}
                <InlineChip
                  currentId="explosion"
                  gimmickData={dummyGimmickData}
                  id="explosion"
                  openDialog={openDialog}
                />{" "}
                시전이 완료되자마자 동쪽으로 이동.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 폭발 모션을 보고 이동하면 늦습니다. 꼭 적개심 목록을 통해 시전
                바를 확인하고 시전이 완료되자마자 움직이는 습관을 들입시다.
              </Typography>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 너무 피하기 어렵다면 "전력 질주" 등을 사용하는 것도 좋은
                방법입니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">무편집 예시 영상: </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/8.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 기믹을 위해 미니 타이탄을 중앙에 주차해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                또한 곧{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="stonecrusher"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.stonecrusher.name, "가")}{" "}
                이어지므로 탱교대를 해줍시다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "dualEarthenFists",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/dual-earthen-fists/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                맵 북쪽에 커다란 푸른 원형 장판이 나타납니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/dual-earthen-fists/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나면 거대 타이탄이 푸른 원형 장판으로 표시되었던 곳을
                주먹으로 내려쳐 모든 파티원들을 밀어냅니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "dualEarthenFistsWeightOfTheWorld",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="dualEarthenFistsWeightOfTheWorld"
                  gimmickData={gimmickData}
                  id="dualEarthenFists"
                  openDialog={openDialog}
                />{" "}
                장판이 등장함과 거의 동시에{" "}
                <InlineChip
                  currentId="dualEarthenFistsWeightOfTheWorld"
                  gimmickData={gimmickData}
                  id="weightOfTheWorld"
                  openDialog={openDialog}
                />{" "}
                징이 탱커를 제외한 파티원 중 한 명의 머리 위에 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={
                  pageData.videoBaseUrl +
                  "/dual-earthen-fists-weight-of-the-world/1.png"
                }
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                탱커는 이후 등장할{" "}
                <InlineChip
                  currentId="dualEarthenFistsWeightOfTheWorld"
                  gimmickData={gimmickData}
                  id="earthenAnguish"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.earthenAnguish.name,
                  "를"
                )}{" "}
                대비해 북쪽으로 산개하고 나머지 파티원들은{" "}
                <InlineChip
                  currentId="dualEarthenFistsWeightOfTheWorld"
                  gimmickData={gimmickData}
                  id="weightOfTheWorld"
                  openDialog={openDialog}
                />{" "}
                처리를 위해 위와 같이 산개합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/dual-earthen-fists-weight-of-the-world/2.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 탱커는 여기서 "거리 유지" 를 사용하기 위해 1 페이즈 두 번째{" "}
                <InlineChip
                  currentId="dualEarthenFistsWeightOfTheWorld"
                  gimmickData={gimmickData}
                  id="geocrush"
                  openDialog={openDialog}
                />{" "}
                에서 "거리 유지" 를 절대 사용하면 안 됩니다!
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={
                  pageData.videoBaseUrl +
                  "/dual-earthen-fists-weight-of-the-world/3.png"
                }
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                *{" "}
                <InlineChip
                  currentId="dualEarthenFistsWeightOfTheWorld"
                  gimmickData={gimmickData}
                  id="weightOfTheWorld"
                  openDialog={openDialog}
                />{" "}
                징을 가진 플레이어가 근거리 딜러일 경우 "거리 유지" 를 사용하고
                위와 같이 산개하는 방식으로 칼끝딜 거리를 유지하고 딜로스를
                최소화시킬 수 있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "earthenAnguish",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-anguish/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                거대 타이탄이 1어글자와 2어글자에게 동시에 사용하는 탱크
                버스터입니다. 시전 바 없이 즉시 시전하며 각 대상자에게 약 10만
                정도의 강력한 마법 피해를 입힙니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                1어글자와 2어글자를 대상으로 하는 기술이므로 오프탱은 자신이
                2어글자인지 꼭 확인해주세요!
              </Typography>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 대상자를 중심으로 꽤 큰 원형 범위의 공격 판정을 가지고 있는
                범위 공격이므로 탱커 근처에 있지 않도록 합니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "earthenAnguishMegalith",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="earthenAnguishMegalith"
                  gimmickData={gimmickData}
                  id="dualEarthenFists"
                  openDialog={openDialog}
                />{" "}
                직후에 연속으로 사용하는 탱크 버스터 종합 선물 세트입니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                보통 멘탱이 북서쪽, 부탱이 북동쪽에 산개해 "거리 유지" 를
                사용하고{" "}
                <InlineChip
                  currentId="earthenAnguishMegalith"
                  gimmickData={gimmickData}
                  id="earthenAnguish"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.earthenAnguish.name,
                  "를"
                )}{" "}
                처리한 후 맵 북쪽 가운데에 모여{" "}
                <InlineChip
                  currentId="earthenAnguishMegalith"
                  gimmickData={gimmickData}
                  id="megalith"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.megalith.name, "를")}{" "}
                함께 처리합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-anguish-megalith/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                "경계" 등의 30% 생존기를 사용하는 타이밍을 잘 조절하면{" "}
                <InlineChip
                  currentId="earthenAnguishMegalith"
                  gimmickData={gimmickData}
                  id="earthenAnguish"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.earthenAnguish.name,
                  "와"
                )}{" "}
                <InlineChip
                  currentId="earthenAnguishMegalith"
                  gimmickData={gimmickData}
                  id="megalith"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.megalith.name, "를")} 둘
                다 커버할 수 있습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-anguish-megalith/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 전사가 멘탱으로 1 페이즈의 첫{" "}
                <InlineChip
                  currentId="earthenAnguishMegalith"
                  gimmickData={gimmickData}
                  id="stonecrusher"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.stonecrusher.name, "를")}{" "}
                처리했었다면 2 페이즈에 등장하는 모든{" "}
                <InlineChip
                  currentId="earthenAnguishMegalith"
                  gimmickData={gimmickData}
                  id="megalith"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.megalith.name, "를")}{" "}
                "일대일 결투" 로 처리할 수 있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "earthenFist",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-fist/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                거대 타이탄이 왼팔 혹은 오른팔에 기를 모으는 것을 2번 반복한 후,
                기를 모은 순서대로 팔을 내질러 맵의 절반을 덮는 공격을 하고 모든
                피격자를 크게 밀쳐내 낙사시킵니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                어느 팔에 어느 순서대로 기를 모을 지는 무작위로 정해지므로 거대
                타이탄의 모션을 보고 공격 위치를 판단해 회피해야 합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                어느 쪽 팔에 빛이 들어오는지를 잘 관찰한 후 순서를 기억해
                피해주세요!
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-fist/2.mp4"}
              />
            </CenteredBlock>
          </React.Fragment>
        )
      },
      {
        id: "earthenFistWeightOfTheLand",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/earthen-fist-weight-of-the-land/1.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="earthenFistWeightOfTheLand"
                  gimmickData={gimmickData}
                  id="earthenFist"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.earthenFist.name, "와")}{" "}
                <InlineChip
                  currentId="earthenFistWeightOfTheLand"
                  gimmickData={gimmickData}
                  id="weightOfTheLand"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.weightOfTheLand.name,
                  "를"
                )}{" "}
                동시에 사용합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                판정 순서는{" "}
                <InlineChip
                  currentId="earthenFistWeightOfTheLand"
                  gimmickData={gimmickData}
                  id="earthenFist"
                  openDialog={openDialog}
                />{" "}
                →{" "}
                <InlineChip
                  currentId="earthenFistWeightOfTheLand"
                  gimmickData={gimmickData}
                  id="weightOfTheLand"
                  openDialog={openDialog}
                />{" "}
                이므로 일단{" "}
                <InlineChip
                  currentId="earthenFistWeightOfTheLand"
                  gimmickData={gimmickData}
                  id="earthenFist"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.earthenFist.name, "를")}{" "}
                피하고 나서 바닥 장판을 피해주면 됩니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "earthenFury",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-fury/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                거대 타이탄이 사용하는 단발 광역기로 모든 파티원에게 약 8만
                정도의 강력한 마법 피해를 줍니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "earthenGauntlets",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-gauntlets/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 형태를 바꿉니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                시전 바나 기술 명칭이 보여지지 않으므로 타이탄의 모션을 보고
                판단해야 합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="earthenGauntlets"
                  gimmickData={gimmickData}
                  id="earthenGauntlets"
                  openDialog={openDialog}
                />{" "}
                의 경우 등 뒤의 바퀴가 양 손으로 가서 붙는 모션을 통해 확인할 수
                있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "earthenWheels",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-wheels/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 형태를 바꿉니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                시전 바나 기술 명칭이 보여지지 않으므로 타이탄의 모션을 보고
                판단해야 합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="earthenWheels"
                  gimmickData={gimmickData}
                  id="earthenWheels"
                  openDialog={openDialog}
                />{" "}
                의 경우 등 뒤의 바퀴가 양 발로 가서 붙는 모션을 통해 확인할 수
                있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "evilEarth",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/evil-earth/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이{" "}
                <InlineChip
                  currentId="evilEarth"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                시전을 시작하는 순간 바닥에 특수 장판이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/evil-earth/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나면 장판이 표시되었던 곳부터 폭발한 후, 위 영상처럼
                바깥쪽으로 한 칸씩 넓어져가면서 순차적으로 폭발합니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "evilEarth1",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                2개의{" "}
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                장판이 등장합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/evil-earth-1/1.mp4"}
              />
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/evil-earth-1/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                장판은 항상 2개가 대각선으로 마주 보는 위치에서 나타나므로, 위
                2가지의 조합 + 위 조합을 좌우반전한 버전 총 4가지 조합 중 하나가
                나오게 됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                위 영상에서 하얀 원으로 표시된 곳에 파티원 전원이 집합했다가
                함께 움직이면 쉽게 피할 수 있습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                *{" "}
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                회피 전{" "}
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                처리를 위해 산개한 상태이므로 집합 장소 반대쪽으로 산개한
                플레이어들은 "전력 질주"를 꼭 사용해주세요.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/evil-earth-1/3.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                일단{" "}
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                시전이 시작되면 장판이 시작하는 장소를 보고 파티 집합 장소가
                어디인지 재빨리 확인합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                처리가 끝나면 곧바로 집합 장소에 모두 집합합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 파티원 전원이 함께 움직여{" "}
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.evilEarth.name, "를")}{" "}
                피해줍니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "faultLine",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/fault-line/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 직선으로 돌진하며 양 옆으로 충격파를 발생시켜 모든
                플레이어들을 크게 밀어냅니다. 돌진 경로 위에 있을 경우
                즉사합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 돌진 경로로부터 양 옆으로 한 칸씩 후속타가 발생하므로
                주의해주세요.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "faultLineMagnitude50",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="earthenWheels"
                  openDialog={openDialog}
                />{" "}
                이후 곧바로 시전 바 없이{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.pulseOfTheLand.name,
                  "와"
                )}{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.forceOfTheLand.name,
                  "를"
                )}{" "}
                사용합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                무작위로 한 명의 탱커, 한 명의 딜러, 한 명의 힐러에게{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시되고 나머지 파티원들에게는{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                징이 표시된 직후 미니 타이탄이{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="faultLine"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.faultLine.name, "을")}{" "}
                사용합니다. 정면으로 돌진하며 모든 플레이어를 자신의 양 옆으로
                밀어냅니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/3.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                자신의 징 색깔을 확인한 후 위와 같이 산개합니다. 이후 모든
                파티원들이{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="faultLine"
                  openDialog={openDialog}
                />{" "}
                에 의해 다음과 같이 밀려나게 됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/4.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                밀려난 후 징이 처리되고 후속타 판정이 끝날 때까지 시간이 살짝
                걸리기 때문에 밀려난 칸에서 잠깐 기다려주어야 합니다! 위
                그림에서 파랗게 표시된 부분이 후속타 공격 범위입니다. 징 처리와
                후속타 판정은 거의 동시에 일어납니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/5.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                징 처리와 후속타 판정이 끝났다면 모든 파티원들은 한 칸 위로
                이동해 다음 후속타를 피해줍니다. 이 때 미니 타이탄이 1어글자를
                향해 두 번째{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="faultLine"
                  openDialog="openDialog"
                />{" "}
                {this.generatePostposition(gimmickData.faultLine.name, "을")}{" "}
                사용하기 때문에 1어글자는 위 포지션으로 이동해 돌진 방향을
                유도해줍니다. 나머지 파티원들은 뺑소니 당하지 않도록
                주의해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이 두 번째{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="faultLine"
                  openDialog="openDialog"
                />{" "}
                {this.generatePostposition(gimmickData.faultLine.name, "은")}{" "}
                대상자에게 거리 비례 데미지를 주므로 위 그림처럼 거리를 최대한
                띄워주어야 합니다. 약 8만 정도의 꽤 아픈 물리 피해를 입히므로
                1어글자인 대상자는 빠른 포지셔닝을 위한 "전력 질주" 외에도
                "방벽", "원초의 직감" 등의 가벼운 생존기를 올려주는 것이
                좋습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 만약 1어글자가{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog="openDialog"
                />{" "}
                대상자였다면 빠른 포지셔닝이 힘들 수도 있습니다. 따라서 탱커들은
                처음 징이 생기자마자 재빨리 자신의 징 색깔을 확인 후 1어글자가{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog="openDialog"
                />{" "}
                징을 가지고 있다면 빠르게 탱교대를 해줍시다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/6.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                전체적인 타이밍은 위 영상을 참고해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/magnitude-50/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                이후 미니 타이탄이 곧바로{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="magnitude50"
                  openDialog={openDialog}
                />{" "}
                시전을 시작합니다. 모든 파티원들은 시전이 끝나기 전에 재빨리
                미니 타이탄의 타겟 원 안으로 들어와 공격을 회피해줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                동시에 모든 파티원들의 머리 위에{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시됩니다. 전원 산개해서 처리해줍니다. 산개 예시는 아래와
                같습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/7.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 위 산개도는 예시일 뿐입니다. 서로 겹치지만 않는다면 어떻게
                산개하든 자유입니다. 자신과 자신의 파티원들이 가장 편하다고
                생각하는 산개 방법을 사용해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 기믹 처리를 위해 미니 타이탄을 맵 중앙에 주차해주세요.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "forceOfTheLand",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/force-of-the-land/1.png"}
                width={342}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="forceOfTheLand"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                대상자의 머리 위에는 오렌지색 네모 징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={720}
                src={pageData.videoBaseUrl + "/force-of-the-land/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                오렌지색 네모 징이 사라지는 시점에 대상 플레이어가 서 있는
                바닥에 돌이 떨어지며 피해를 입힙니다. 해당 바닥칸에 대상
                플레이어 혼자 서 있을 경우 즉사하게 되지만 1명 이상의 다른
                플레이어가 같이 있다면 약 4만 정도의 마법 피해를 입고 "받는 마법
                피해 증가" 디버프를 부여받습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/force-of-the-land/3.png"}
                width={300}
              />
              <ImageBlock
                src={pageData.videoBaseUrl + "/force-of-the-land/4.png"}
                width={300}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="forceOfTheLand"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                의 판정은 플레이어를 중심으로 이루어지는 것이 아니라 플레이어가
                밟고 있는 바닥의 네모 칸을 기준으로 이루어지는 것이므로, 함께
                맞을 플레이어들은 항상 바닥 칸을 잘 보고 같은 칸에 서 있도록
                합니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "geocrush",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/geocrush/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                타이탄이 모서리를 제외한 바깥 바닥칸 중 무작위로 한 칸을 골라
                바라보며{" "}
                <InlineChip
                  currentId="geocrush"
                  gimmickData={gimmickData}
                  id="geocrush"
                  openDialog={openDialog}
                />{" "}
                시전을 시작합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                타이탄이 바라보고 있는 바닥칸을 중심으로 화살표가 뻗어나가는
                모양의 장판이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/geocrush/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                이후 시전이 끝나면 바라보고 있던 바닥칸을 향해 점프해 착지하며
                모든 파티원들을 해당 칸의 바깥 방향으로 밀어냅니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                밀어내는 거리가 상당히 길기 때문에 해당 바닥칸 안쪽에 서 있지
                않으면 맵 바깥까지 밀려 낙사할 수 있으므로 주의해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                밀쳐내기 무효화 기술을 사용하거나 밀려나는 도중에 돌진 기술 등을
                사용해 밀려나는 것을 방지할 수 있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "landslide",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 맵의 동서남북 중 한 군데를 바라보며{" "}
                <InlineChip
                  currentId="landslide"
                  gimmickData={gimmickData}
                  id="landslide"
                  openDialog={openDialog}
                />{" "}
                시전을 시작합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/landslide/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나면 바라보고 있던 방향으로 점프해 착지하며 위 그림처럼
                T자 형태의 넉백 공격을 하게 됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/landslide/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나기 전에 타이탄이 바라보고 있는 방향을 확인 후 안전
                지역으로 이동해 T자 공격을 피해줍니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/landslide/3.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                이후 안전 지역에 후속타가 오므로 쟤빨리 안전 지역을 벗어나 미니
                타이탄 아래에 모두 모입니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 빙글 돌아 맵 중앙을 향하며 자신의 왼쪽 혹은 오른쪽
                맵 전부를 덮는 장판 공격을 시전합니다. 친절하게 바닥에 장판을
                보여주므로 간단하게 피해줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 공격하지 않은 영역에 후속타가 오므로 장판 공격을 피하고
                나서 재빨리 넘어가 후속타도 피해줍니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/landslide/4.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                장판 공격이 끝났을 때 쯤에 바닥의 돌덩이들이 빛나기 시작합니다.
                빛나는 돌덩이와 빛나지 않는 돌덩이의 위치를 확인합니다. 먼저
                빛나기 시작한 돌덩이가 먼저 폭발하므로 빛나지 않는 돌덩이의
                위치에 서 있어야 합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/landslide/5.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                만약 맵 모서리의 돌덩이들이 빛나고 있다면 그대로 현재 위치에서
                대기하고, 현재 위치의 돌덩이가 빛나고 있다면 후속타가 오지 않는
                맵 모서리 돌덩이 위로 이동합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 첫 번째로 빛나던 돌덩이들이 터지고 나면 맵 중앙으로 이동해
                나머지 돌덩이들의 폭발을 피해줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                아래는 맵 모서리의 돌덩이들이 빛나지 않고 현재 위치의 돌덩이가
                빛날 때의 예시 영상입니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/landslide/6.mp4"}
              />
            </CenteredBlock>
          </React.Fragment>
        )
      },
      {
        id: "magnitude50",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/magnitude-50/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                도넛 모양 범위 공격입니다. 미니 타이탄의 타겟 원 안으로 들어와
                피할 수 있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "massiveLandslide",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="earthenGauntlets"
                  openDialog={openDialog}
                />{" "}
                이후 곧바로 시전 바 없이{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.pulseOfTheLand.name,
                  "와"
                )}{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.forceOfTheLand.name,
                  "를"
                )}{" "}
                사용합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/massive-landslide/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                무작위로 한 명의 탱커, 한 명의 딜러, 한 명의 힐러에게{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시되고 나머지 파티원들에게는{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/massive-landslide/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                징이 처리된 직후 미니 타이탄이{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.massiveLandslide.name,
                  "를"
                )}{" "}
                사용합니다. 정면 직선 범위를 제외한 맵 전체를 덮는 범위 공격이며
                맞을 경우 맵 바깥으로 밀려나 낙사하게 됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/massive-landslide/3.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                에서 안전한 바닥칸이 4칸 뿐이므로 위와 같이 산개해{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.massiveLandslide.name,
                  "와"
                )}{" "}
                징을 동시에 처리합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 예외로{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                에 걸린 딜러가 원거리 딜러일 경우에는{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                에 걸린 탱커와 자리를 바꿔 탱커가 조금이나마 딜을 더 넣을 수
                있도록 할 수도 있습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/massive-landslide/4.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                이후{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                때 공격하지 않았던 정면 직선 범위로 푸른색 후속타가 오므로
                재빨리 피해줍니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/massive-landslide/5.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                전체적인 타이밍은 다음과 같습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                1.{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="geocrush"
                  openDialog={openDialog}
                />{" "}
                이후 징이 생기면 일단 자신의 징을 확인합니다.
              </Typography>
              <Typography variant="body2">
                2. 이후 타이탄이 형태를 바꾸는 모션을 통해 이어지는 페이즈가{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="earthenGauntlets"
                  openDialog={openDialog}
                />{" "}
                인지{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="earthenWheels"
                  openDialog={openDialog}
                />{" "}
                인지를 판단합니다.
              </Typography>
              <Typography variant="body2">
                3. 타이탄의 형태가{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="earthenGauntlets"
                  openDialog={openDialog}
                />{" "}
                인 것이 확인되면{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                처리를 위해 정해진 위치로 산개합니다.
              </Typography>
              <Typography variant="body2">
                4.{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                처리 이후 재빨리 이동해 후속타를 피해줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 기믹 처리를 위해 미니 타이탄을 맵 중앙에 주차해주세요.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "megalith",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/megalith/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                1어글자의 머리 위에 셰어징이 표시됩니다. 최대 2명까지 피해를
                나눠받을 수 있기 때문에 멘탱과 부탱이 나눠맞습니다. 각 탱커에게
                약 10만 정도의 강력한 물리 피해를 입히므로 "경계" 등의 강력한
                생존기가 필수로 요구됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 전사의 경우 무적기인 "일대일 결투" 의 재사용 대기 시간이 짧기
                때문에 2 페이즈에 등장하는 모든{" "}
                <InlineChip
                  currentId="megalith"
                  gimmickData={gimmickData}
                  id="megalith"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.megalith.name, "를")}{" "}
                혼자서 "일대일 결투" 로 처리할 수 있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "orogenesis",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/orogenesis/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                2 페이즈의 시작을 알리는 페이즈 전환 연출입니다. 미니 타이탄이
                거대 타이탄으로 변신합니다. 체력은 그대로 유지됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                거대 타이탄 상태에서는 맵 북쪽에 위치가 고정되며 후측 판정이
                사라집니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "pulseOfTheLand",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/pulse-of-the-land/1.png"}
                width={182}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="pulseOfTheLand"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                대상자의 머리 위에는 노란색 세모 징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/pulse-of-the-land/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                노란색 세모 징이 사라지는 시점에 해당 플레이어가 서 있는 바닥
                칸이 폭발하며 약 5만 정도의 마법 피해를 입게 됩니다. 또한 "받는
                마법 피해 증가" 디버프를 부여받으므로 다른 플레이어와 겹쳐 맞지
                않도록 해야 합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/pulse-of-the-land/3.png"}
                width={300}
              />
              <ImageBlock
                src={pageData.videoBaseUrl + "/pulse-of-the-land/4.png"}
                width={300}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="pulseOfTheLand"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                의 폭발 판정은 플레이어를 중심으로 이루어지는 것이 아니라
                플레이어가 밟고 있는 바닥의 네모 칸을 기준으로 이루어지는
                것이므로, 항상 바닥 칸을 잘 보고 다른 플레이어와 같은 칸에 서
                있지 않도록 합니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "seismicWave",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/seismic-wave/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                피격당할 경우 즉사하는 광역기입니다.{" "}
                <InlineChip
                  currentId="seismicWave"
                  gimmickData={gimmickData}
                  id="crumblingDown"
                  openDialog={openDialog}
                />{" "}
                에서 생성되는 커다란 돌덩어리 뒤에 숨어 피할 수 있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "stonecrusher",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/stonecrusher/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                1어글자를 총 3번 넓은 원형 범위로 타격하는 탱크 버스터입니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                각 타격마다 "물리 방어 감소" 디버프를 부여하므로 2번의 도발을
                통해 각 타격을 나눠맞거나 무적기로 처리할 수 있습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                첫 페이즈에 총 2번밖에 사용하지 않으므로 보통 탱커 둘이 돌아가며
                무적기로 처리하는 것이 일반적입니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                타격 범위가 넓은 편이므로 탱커 근처에 갔다가 휩쓸리지 않도록
                주의해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Divider variant="middle" />
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/stonecrusher/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                전사나 건브레이커의 경우 무적기의 지속 시간이 아슬아슬해서 3번의
                타격 전부를 커버할 수 없으므로 "보복" 등의 생존기를 사용해 첫
                타격을 맞고 이후 후속타를 무적기로 넘기는 것을 추천드립니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "voiceOfTheLand",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/voice-of-the-land/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 사용하는 단발 광역기로 모든 파티원에게 약 5만
                정도의 마법 피해를 줍니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "weightOfTheLand",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/weight-of-the-land/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나면 무작위로 8칸의 바닥 위에 장판이 표시됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                표시된 장판은 일정 시간이 지나면 폭발합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                다른 기믹들과 섞여나오는 경우가 많으므로 기믹 처리 중 피격당하지
                않도록 주의해주세요.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "weightOfTheLandPulseOfTheLand",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                바닥에{" "}
                <InlineChip
                  currentId="weightOfTheLandPulseOfTheLand"
                  gimmickData={gimmickData}
                  id="weightOfTheLand"
                  openDialog={openDialog}
                />{" "}
                장판이 나타난 후 모든 파티원들의 머리 위에{" "}
                <InlineChip
                  currentId="weightOfTheLandPulseOfTheLand"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/weight-of-the-land-pulse-of-the-land/1.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                기믹 발동 순서는{" "}
                <InlineChip
                  currentId="weightOfTheLandPulseOfTheLand"
                  gimmickData={gimmickData}
                  id="weightOfTheLand"
                  openDialog={openDialog}
                />{" "}
                →{" "}
                <InlineChip
                  currentId="weightOfTheLandPulseOfTheLand"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                순서이므로 일단 바닥 장판을 먼저 피하고 나서 산개 매크로
                위치대로 이동해 징을 처리해줍니다. 산개 위치는 아래와 같습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={
                  pageData.videoBaseUrl +
                  "/weight-of-the-land-pulse-of-the-land/2.png"
                }
                width={500}
              />
            </CenteredBlock>
          </React.Fragment>
        )
      },
      {
        id: "weightOfTheWorld",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/weight-of-the-world/1.png"}
                width={342}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="weightOfTheWorld"
                  gimmickData={gimmickData}
                  id="weightOfTheWorld"
                  openDialog={openDialog}
                />{" "}
                대상자의 머리 위에는 파란색 세모 징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/weight-of-the-world/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                파란색 세모 징이 사라지는 시점에 해당 플레이어가 서 있는 바닥
                칸과 그 주위 바닥칸이 폭발하며 약 6만 정도의 마법 피해를 입히고
                "받는 마법 피해 증가" 디버프를 부여합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/weight-of-the-world/3.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="weightOfTheWorld"
                  gimmickData={gimmickData}
                  id="weightOfTheWorld"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.weightOfTheWorld.name,
                  "는"
                )}{" "}
                플레이어가 밟고 있는 바닥칸을 포함해 주위 1칸 범위 내의 모든
                바닥칸을 폭발시키므로 보통 폭발 범위를 최소화하기 위해 대상자는
                맵 모서리로 산개하게 됩니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      }*/,
      this.generateDialog("rockThrow", pageData.videoBaseUrl + "/rock-throw", [
        {
          type: "typographies",
          typographies: [
            {
              contents: [
                "시전이 끝나면 2명의 대상자에게 징이 표시됩니다. 대상자는 힐러 2명이 우선으로 선택되지만 힐러가 사망 중인 경우에는 무작위로 선택됩니다."
              ],
              variant: "body2"
            }
          ]
        },
        {
          type: "images",
          images: [
            {
              src: "/1.png",
              width: 290
            }
          ]
        },
        {
          type: "typographies",
          typographies: [
            {
              contents: [
                "일정 시간이 지나면 대상자의 위치에 돌 감옥이 생성되며 대상자는 움직이거나 기술을 사용하지 못하는 상태가 됩니다."
              ],
              variant: "body2"
            }
          ]
        },
        {
          type: "loopingVideos",
          loopingVideos: [
            {
              height: 360,
              src: "/2.mp4"
            }
          ]
        },
        {
          type: "typographies",
          typographies: [
            {
              contents: [
                "나머지 파티원들은 돌 감옥을 공격해 부숴서 감옥에 갇힌 파티원을 꺼내주어야 합니다."
              ],
              variant: "body2"
            },
            {
              contents: [
                '* 돌 감옥 2개가 너무 가까이 생성되었을 경우 매우 강력한 "받는 피해 감소" 버프가 걸려 부술 수 없게 됩니다. 따라서 돌 감옥 대상자는 항상 서로에게서부터 일정 거리 이상 떨어져 있어야 합니다.'
              ],
              variant: "body2",
              style: {
                color: colorTypes.warning
              }
            }
          ]
        }
      ]),
      this.generateDialog(
        "tectonicUplift",
        pageData.videoBaseUrl + "/tectonic-uplift",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "tectonicUplift",
                    type: "chip"
                  },
                  "시전이 시작되면 맵 북쪽의 절반과 맵 남쪽의 절반이 장판으로 덮힙니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "images",
            images: [
              {
                src: "/1.png",
                width: 250
              },
              {
                src: "/2.png",
                width: 250
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "장판은 항상 대각선으로 마주 보는 형태로 나타납니다. 즉 위 두 가지 조합이 가능합니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "loopingVideos",
            loopingVideos: [
              {
                height: 360,
                src: "/3.mp4"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "tectonicUplift",
                    type: "chip"
                  },
                  "시전이 끝나면 거대 타이탄이 맵을 내리쳐 장판이 생겼던 부분을 튀어오르게 합니다. 이 때 장판을 밟고 있었을 경우 맵과 함께 튀어오르게 됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "튀어나온 곳에서 아래로 내려갈 수는 있지만 아래에서 위로 올라갈 수는 없습니다."
                ],
                variant: "body2"
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "tectonicUplift1",
        pageData.videoBaseUrl + "/tectonic-uplift-1",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "tectonicUplift",
                    type: "chip"
                  },
                  "시전이 시작됩니다. 탱힐은 맵의 남쪽으로, 딜러는 맵의 북쪽으로 산개할 것입니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "weightOfTheWorld",
                    type: "chip"
                  },
                  "징이 탱힐 중 1명과 딜러 중 1명에게 표시됩니다. 이후",
                  {
                    id: "tectonicUplift",
                    type: "chip"
                  },
                  "시전이 끝나기 전에 아래와 같이 산개합니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "images",
            images: [
              {
                src: "/1.png",
                width: 500
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "tectonicUplift",
                    type: "chip"
                  },
                  "시전이 끝나고 나면",
                  {
                    id: "weightOfTheWorld",
                    type: "chip"
                  },
                  "징을 받은 파티원들은 낮은 곳에서 징을 처리하고 나머지 파티원들은 높은 곳에 위치하게 됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "loopingVideos",
            loopingVideos: [
              {
                height: 360,
                src: "/2.mp4"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "동시에 낮은 곳 바닥칸 일부를 덮는 장판이 생성됩니다. 한 곳에는 1개의 바닥 장판이, 다른 곳에는 2개의 바닥 장판이 생성됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "loopingVideos",
            loopingVideos: [
              {
                height: 360,
                src: "/3.mp4"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "생성되는 장판의 위치는 무작위입니다. 높은 곳에 위치한 파티원들은 바닥칸 장판이 생성되고 난 후 어느 곳에 2개의 장판이 생겼고 어느 곳에 1개의 장판이 생겼는지 재빨리 확인해야 합니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "새로운",
                  {
                    id: "pulseOfTheLand",
                    type: "chip"
                  },
                  ",",
                  {
                    id: "forceOfTheLand",
                    type: "chip"
                  },
                  ", 그리고",
                  {
                    id: "weightOfTheWorld",
                    type: "chip"
                  },
                  "징이 표시됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "images",
            images: [
              {
                src: "/4.png",
                width: 500
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "초반에",
                  {
                    id: "weightOfTheWorld",
                    type: "chip"
                  },
                  "를 받았던 파티원들을 제외한 플레이어들 중 탱힐 3명이 각 징을 1개씩, 그리고 딜러 3명이 역시 각 징을 1개씩 나눠받게 됩니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "pulseOfTheLand",
                    type: "chip"
                  },
                  "징을 받은 파티원들은 바닥 장판이 1칸인 곳으로,",
                  {
                    id: "forceOfTheLand",
                    type: "chip"
                  },
                  "징을 받은 파티원들은 바닥 장판이 2칸인 곳으로,",
                  {
                    id: "weightOfTheWorld",
                    type: "chip"
                  },
                  "징을 받은 파티원들은 낮은 곳으로 내려가지 않고 맵 모서리로 산개해야 합니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "images",
            images: [
              {
                src: "/5.png",
                width: 500
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "바닥 장판의 위치는 무작위입니다! 낮은 곳에 생성된 바닥 장판의 갯수와 위치를 꼭 다시 한 번 잘 확인한 후 산개해주세요. 위 그림은 산개 예제입니다. 장판의 생성 위치가 무작위이므로 생성된 장판의 위치를 잘 보고 판단해 이동해야 합니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "divider"
          },
          {
            type: "loopingVideos",
            loopingVideos: [
              {
                height: 360,
                src: "/6.mp4"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "pulseOfTheLand",
                    type: "chip"
                  },
                  "징을 받은 플레이어들은 바닥 장판이 1칸인 곳으로 내려가 다른 파티원들이 겹쳐맞지 않도록 산개해 징을 처리해줍니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "divider"
          },
          {
            type: "loopingVideos",
            loopingVideos: [
              {
                height: 360,
                src: "/7.mp4"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "forceOfTheLand",
                    type: "chip"
                  },
                  "징을 받은 플레이어들은 바닥 장판이 2칸인 곳으로 내려가 모여 서서 징을 처리해줍니다."
                ],
                variant: "body2"
              },
              {
                contents: [
                  "* 초반에",
                  {
                    id: "weightOfTheWorld",
                    type: "chip"
                  },
                  '징을 받았던 플레이어의 경우 그 때 부여받은 "받는 마법 피해 증가" 디버프가 아직 남아있으므로 절대',
                  {
                    id: "forceOfTheLand",
                    type: "chip"
                  },
                  "를 같이 맞으면 안 됩니다!"
                ],
                variant: "body2",
                style: {
                  color: colorTypes.warning
                }
              }
            ]
          },
          {
            type: "divider"
          },
          {
            type: "loopingVideos",
            loopingVideos: [
              {
                height: 360,
                src: "/8.mp4"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "weightOfTheWorld",
                    type: "chip"
                  },
                  "징을 받은 플레이어들은 다른 파티원들이 피격당하지 않도록 높은 곳 모서리로 산개해 징을 처리해줍니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "divider"
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "이후 거대 타이탄이",
                  {
                    id: "earthenFury",
                    type: "chip"
                  },
                  "를 사용하므로 중앙에 모여 힐업해줍니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "earthenFury",
                    type: "chip"
                  },
                  "시전이 끝나면 맵이 원래대로 돌아갑니다."
                ],
                variant: "body2"
              }
            ]
          }
        ]
      )
    ];

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
                {this.generateBlocks(
                  [
                    {
                      type: "centered",
                      contents: [
                        {
                          type: "typographies",
                          typographies: [
                            {
                              contents: [pageData.title],
                              variant: "h6"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "centered",
                      contents: [
                        {
                          type: "image",
                          src: "/raid-guide/edens-gate-sepulture-savage.png",
                          width: 376
                        }
                      ]
                    },
                    {
                      type: "typographies",
                      typographies: [
                        {
                          contents: [
                            '연대기 퀘스트 "The Next Piece of the Puzzle" 을 완료한 후, 아므 아렝 (X: 26.8, Y: 16.4) 에 위치한 NPC "Lewrey" 에게 말을 걸어 개방할 수 있습니다.'
                          ],
                          variant: "body2"
                        }
                      ]
                    },
                    {
                      type: "centered",
                      contents: [
                        {
                          type: "youtubeFrame",
                          height: 360,
                          src: "https://www.youtube.com/embed/3kQqQ4WNqMQ",
                          width: 576
                        }
                      ]
                    },
                    {
                      type: "typographies",
                      typographies: [
                        {
                          contents: [
                            "파이널 판타지 14 <" +
                              ExpansionTitles.shb +
                              '> 패치 5.05에 추가되는 8인 레이드, "' +
                              pageData.title +
                              " 가이드입니다."
                          ],
                          variant: "body2"
                        }
                      ]
                    },
                    {
                      type: "typographies",
                      typographies: [
                        {
                          contents: [
                            "요구 레벨은 80이며 최소 아이템 레벨 제한은 450입니다."
                          ],
                          variant: "body2"
                        }
                      ]
                    }
                  ],
                  SiteInfo.assetsUrl
                )}
              </Grid>
            </Container>
          </Grid>
          {this.generateBlocks([
            {
              type: "divider"
            },
            {
              type: "typographies",
              typographies: [
                {
                  contents: [
                    "* 아래 메뉴 중 열람하고자 하는 메뉴를 클릭하시면 내용을 펼치거나 접을 수 있습니다."
                  ],
                  variant: "body2"
                }
              ]
            }
          ])}
          <Grid item>
            <ExpansionPanelsBlock
              expandedPanel={0}
              panels={[
                {
                  title: "1 페이즈 타임라인 - 미니 타이탄",
                  children: (
                    <React.Fragment>
                      {this.generateBlocks([
                        {
                          type: "typographies",
                          typographies: [
                            {
                              contents: [
                                "* 타임라인 내 기믹 이름을 클릭해 상세 공략을 볼 수 있습니다."
                              ],
                              variant: "body2"
                            },
                            {
                              contents: [
                                "상세 공략 중",
                                <LaunchIcon />,
                                " 아이콘이 붙어있는 기믹 이름의 경우 클릭해 더 자세한 내용을 열람할 수 있습니다."
                              ],
                              style: {
                                color: colorTypes.warning
                              },
                              variant: "body2"
                            }
                          ]
                        }
                      ])}
                      <TimelineBlock
                        gimmickData={this.gimmickData}
                        openDialog={this.openDialog}
                        timeline={timelines[0]}
                      />
                    </React.Fragment>
                  )
                },
                {
                  title: "2 페이즈 타임라인 - 거대 타이탄",
                  children: (
                    <React.Fragment>
                      {this.generateBlocks([
                        {
                          type: "typographies",
                          typographies: [
                            {
                              contents: [
                                "* 타임라인 내 기믹 이름을 클릭해 상세 공략을 볼 수 있습니다."
                              ],
                              variant: "body2"
                            },
                            {
                              contents: [
                                "상세 공략 중",
                                <LaunchIcon />,
                                " 아이콘이 붙어있는 기믹 이름의 경우 클릭해 더 자세한 내용을 열람할 수 있습니다."
                              ],
                              style: {
                                color: colorTypes.warning
                              },
                              variant: "body2"
                            }
                          ]
                        }
                      ])}
                      <TimelineBlock
                        gimmickData={this.gimmickData}
                        openDialog={this.openDialog}
                        timeline={timelines[1]}
                      />
                    </React.Fragment>
                  )
                },
                {
                  title: "3 페이즈 타임라인 - 더블 타이탄",
                  children: <React.Fragment></React.Fragment>
                }
              ]}
            />
          </Grid>
          {this.generateBlocks([
            {
              type: "divider"
            },
            {
              type: "centered",
              contents: [
                {
                  type: "youtubeFrame",
                  height: 360,
                  src: "https://www.youtube.com/embed/Dk-gt18mMBs",
                  width: 576
                }
              ]
            }
          ])}
        </Grid>
        {this.generateDialogs(dialogs)}
      </React.Fragment>
    );
  }
}

export default EdensGateSepultureSavage;
