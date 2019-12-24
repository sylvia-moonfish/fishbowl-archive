import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import LaunchIcon from "@material-ui/icons/Launch";

import React from "react";

import ExpansionTitles from "../../../../data/expansion-titles";
import GimmickColorType from "../../../../data/gimmick-color-type";
import SiteInfo from "../../../../data/site-info";
import ExpansionPanelsBlock from "../../../../src/components/blocks/expansion-panels-block";
import GimmickSelectiveListBlock from "../../../../src/components/blocks/gimmick-selective-list-block";
import RewardsBlock from "../../../../src/components/blocks/rewards-block";
import GuidePageComponent from "../../../../src/components/guide-page-component";

const pageData = {
  title: "희망의 낙원 에덴: 각성편 4",
  description: "파이널 판타지 14 레이드 가이드 - 희망의 낙원 에덴: 각성편 4",
  videoBaseUrl:
    "https://sylvia-moonfish.github.io/fishbowl-video-1/guide/raid-guide/shb/edens-gate-sepulture"
};

class EdensGateSepulture extends GuidePageComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const colorTypes = GimmickColorType[this.props.currentTheme];

    this.gimmickData = {
      bombBoulders: {
        name: "바위폭탄",
        description: "시한폭탄 4개",
        color: colorTypes.everyone
      },
      bombBoulders1: {
        name: "바위폭탄",
        description: "3줄 시한폭탄",
        color: colorTypes.everyone
      },
      bombBoulders2: {
        name: "바위폭탄",
        description: "+자/x자 시한폭탄",
        color: colorTypes.everyone
      },
      bombBouldersCobaltBomb: {
        ids: ["bombBoulders", "cobaltBomb"]
      },
      bombBoulders1CobaltBombWeightOfTheLand: {
        ids: ["bombBoulders1", "cobaltBomb", "weightOfTheLand"]
      },
      bombBoulders2EvilEarth: {
        ids: ["bombBoulders2", "evilEarth"]
      },
      cobaltBomb: {
        name: "코발트 폭탄",
        description: "시한폭탄 강화",
        color: colorTypes.noOne
      },
      crumblingDown: {
        name: "암반 낙하",
        description: "거리 비례 피해 돌 소환",
        color: colorTypes.everyone
      },
      crumblingDownSeismicWave: {
        ids: ["crumblingDown", "seismicWave"]
      },
      crumblingDownEvilEarthSeismicWave: {
        ids: ["crumblingDown", "evilEarth", "seismicWave"]
      },
      earthenFury: {
        name: "대지의 분노",
        description: "광역기 + 도트 + 패턴 강화",
        color: colorTypes.heal
      },
      evilEarth: {
        name: "사악한 대지",
        description: "연속 폭발 장판",
        color: colorTypes.everyone
      },
      faultZone: {
        name: "단층대",
        description: "자동차 직선 주행",
        color: colorTypes.everyoneSpecial
      },
      faultZoneMagnitude50: {
        ids: ["faultZone", "magnitude50"]
      },
      geocrush: {
        name: "대지 붕괴",
        description: "타이탄 점프 + 넉백",
        color: colorTypes.noOne
      },
      landslide: {
        name: "산사태",
        description: "십자 장판",
        color: colorTypes.noOne
      },
      magnitude50: {
        name: "진도 5.0",
        description: "도넛 범위 공격",
        color: colorTypes.noOne
      },
      massiveLandslide: {
        name: "대규모 산사태",
        description: "산사태 공격",
        color: colorTypes.everyoneSpecial
      },
      massiveLandslideLandslide: {
        ids: ["massiveLandslide", "landslide"]
      },
      seismicWave: {
        name: "지진파",
        description: "큰 돌 뒤에 숨기",
        color: colorTypes.everyone
      },
      stonecrusher: {
        name: "암석 붕괴",
        description: "탱크 버스터",
        color: colorTypes.tank
      },
      voiceOfTheLand: {
        name: "대지의 외침",
        description: "단발 광역기",
        color: colorTypes.heal
      },
      weightOfTheLand: {
        name: "대지의 무게",
        description: "랜덤 장판 8개",
        color: colorTypes.noOne
      }
    };

    const gimmicks = [
      {
        id: "voiceOfTheLand",
        src: pageData.videoBaseUrl + "/voice-of-the-land/1.mp4",
        width: 288
      },
      {
        id: "evilEarth",
        src: pageData.videoBaseUrl + "/evil-earth/3.mp4",
        width: 288
      },
      {
        id: "weightOfTheLand",
        src: pageData.videoBaseUrl + "/weight-of-the-land/1.mp4",
        width: 288
      },
      {
        id: "stonecrusher",
        src: pageData.videoBaseUrl + "/stonecrusher/1.mp4",
        width: 288
      },
      {
        id: "crumblingDownSeismicWave",
        src: pageData.videoBaseUrl + "/crumbling-down-seismic-wave/1.mp4",
        width: 288
      },
      {
        id: "geocrush",
        src: pageData.videoBaseUrl + "/geocrush/2.mp4",
        width: 288
      },
      {
        id: "massiveLandslide",
        src: pageData.videoBaseUrl + "/massive-landslide/1.mp4",
        width: 288
      },
      {
        id: "bombBouldersCobaltBomb",
        src: pageData.videoBaseUrl + "/bomb-boulders-cobalt-bomb/1.mp4",
        width: 288
      },
      {
        id: "faultZone",
        src: pageData.videoBaseUrl + "/fault-zone/1.mp4",
        width: 288
      },
      {
        id: "earthenFury",
        src: pageData.videoBaseUrl + "/earthen-fury/1.mp4",
        width: 288
      },
      {
        id: "bombBoulders1CobaltBombWeightOfTheLand",
        src:
          pageData.videoBaseUrl +
          "/bomb-boulders-1-cobalt-bomb-weight-of-the-land/1.mp4",
        width: 288
      },
      {
        id: "crumblingDownEvilEarthSeismicWave",
        src:
          pageData.videoBaseUrl +
          "/crumbling-down-evil-earth-seismic-wave/1.mp4",
        width: 288
      },
      {
        id: "massiveLandslideLandslide",
        src: pageData.videoBaseUrl + "/massive-landslide-landslide/1.mp4",
        width: 288
      },
      {
        id: "bombBoulders2EvilEarth",
        src: pageData.videoBaseUrl + "/bomb-boulders-2-evil-earth/1.mp4",
        width: 288
      },
      {
        id: "faultZoneMagnitude50",
        src: pageData.videoBaseUrl + "/fault-zone-magnitude-50/1.mp4",
        width: 288
      }
    ];

    const dialogs = [
      this.generateDialog(
        "bombBouldersCobaltBomb",
        pageData.videoBaseUrl + "/bomb-boulders-cobalt-bomb",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "bombBoulders",
                    showNoLink: true,
                    type: "chip"
                  },
                  "시전이 끝나면 맵의 네 모서리 부근에 4개의 시한폭탄이 소환됩니다."
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
                src: "/1.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "이후 타이탄이 무작위로 1개의 시한폭탄과 줄로 연결되며",
                  {
                    id: "cobaltBomb",
                    showNoLink: true,
                    type: "chip"
                  },
                  "을 사용해 해당 시한폭탄을 강화시킵니다. 강화된 시한폭탄은 기존보다 폭발범위가 커집니다."
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
                  "강화된 시한폭탄이 없는 면으로 이동해 2개의 시한폭탄 사이에 모여 폭발을 피해줍니다."
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
                src: "/2.mp4",
                width: 750
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "bombBoulders1CobaltBombWeightOfTheLand",
        pageData.videoBaseUrl +
          "/bomb-boulders-1-cobalt-bomb-weight-of-the-land",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "bombBoulders1",
                    showNoLink: true,
                    type: "chip"
                  },
                  "시전이 완료되면 타이탄이 시한폭탄 3줄을 1줄씩 순차적으로 소환합니다."
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
                  "항상 가운데줄이 가장 먼저 소환됩니다. 시한폭탄들은 이후 소환된 순서대로 폭발하게 됩니다."
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
                src: "/1.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "이후 타이탄이 무작위로 1개의 시한폭탄과 줄로 연결되며",
                  {
                    id: "cobaltBomb",
                    showNoLink: true,
                    type: "chip"
                  },
                  "을 사용해 해당 시한폭탄을 강화시킵니다. 강화된 시한폭탄은 기존보다 폭발범위가 커집니다."
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
                src: "/2.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "강화된 시한폭탄과 최대한 떨어져서 3번째로 소환된 시한폭탄 줄에서 대기하다가 가운데줄이 폭발하고 나면 가운데로 이동해 폭발을 피해줍니다."
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
                  "가운데줄 시한폭탄이 폭발하고 난 직후",
                  {
                    id: "weightOfTheLand",
                    type: "chip"
                  },
                  "장판이 바닥에 표시됩니다. 폭발 순서는 마지막줄 시한폭탄 →",
                  {
                    id: "weightOfTheLand",
                    type: "chip"
                  },
                  "장판이므로 일단 시한폭탄을 먼저 피한 후 바닥 장판을 피해줍시다."
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
                src: "/3.mp4",
                width: 750
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "bombBoulders2EvilEarth",
        pageData.videoBaseUrl + "/bomb-boulders-2-evil-earth",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "타이탄이",
                  {
                    id: "bombBoulders",
                    showNoLink: true,
                    type: "chip"
                  },
                  "를 사용해 시한폭탄을 소환합니다. 시한폭탄은 x자 → +자 순서로 소환되거나 +자 → x자 순서로 소환됩니다."
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
                  "시한폭탄은 소환된 순서대로 터지므로 나중에 소환된 시한폭탄을 찾아 그 위로 이동해줍니다."
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
                src: "/1.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "evilEarth",
                    type: "chip"
                  },
                  "장판이 표시됩니다. 장판이 넓어지는 순서가 바닥에 보여지므로 차분하게 피해줍시다."
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
                src: "/2.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "* 시한폭탄의 위치는 고정되어 있는 반면",
                  {
                    id: "evilEarth",
                    type: "chip"
                  },
                  "는 바닥칸 1칸만 이동해서 피할 수 있기 때문에 일단 시한폭탄을 피하는 것을 우선으로 생각하고",
                  {
                    id: "evilEarth",
                    type: "chip"
                  },
                  "는 장판이 다가왔을때 피한다는 느낌으로 회피하면 좀 더 쉽게 처리할 수 있습니다."
                ],
                style: {
                  color: colorTypes.warning
                },
                variant: "body2"
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "crumblingDownSeismicWave",
        pageData.videoBaseUrl + "/crumbling-down-seismic-wave",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "바닥에 거리 비례 피해를 주는 징 2개가 나타납니다. 최대한 멀리 떨어져 받는 피해를 줄여줍니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: ["이후 징이 있던 자리에 커다란 돌 2개가 떨어집니다."],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "loopingVideo",
                src: "/1.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "일정 시간이 지나면 돌 하나가 빛나기 시작합니다. 빛나지 않는 돌 쪽으로 이동해 타이탄과 파티원들 사이에 돌이 위치할 수 있도록 주차해줍니다."
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
                  "돌 뒤에 숨어",
                  {
                    id: "seismicWave",
                    showNoLink: true,
                    type: "chip"
                  },
                  "를 피해줍니다."
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
                src: "/2.mp4",
                width: 750
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "crumblingDownEvilEarthSeismicWave",
        pageData.videoBaseUrl + "/crumbling-down-evil-earth-seismic-wave",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "바닥에 거리 비례 피해를 주는 징 2개가 나타납니다. 최대한 멀리 떨어져 받는 피해를 줄여줍니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: ["이후 징이 있던 자리에 커다란 돌 2개가 떨어집니다."],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "loopingVideo",
                src: "/1.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "evilEarth",
                    type: "chip"
                  },
                  "장판이 나타납니다. 우선적으로 회피해줍니다."
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
                src: "/2.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "일정 시간이 지나면 돌 하나가 빛나기 시작합니다. 빛나지 않는 돌 쪽으로 이동해 타이탄과 파티원들 사이에 돌이 위치할 수 있도록 주차해줍니다."
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
                  "돌 뒤에 숨어",
                  {
                    id: "seismicWave",
                    showNoLink: true,
                    type: "chip"
                  },
                  "를 피해줍니다."
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
                src: "/3.mp4",
                width: 750
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "earthenFury",
        pageData.videoBaseUrl + "/earthen-fury",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "모든 파티원들에게 약 3만 정도의 마법 피해를 입히며 15초의 지속 피해를 주는 디버프를 부여합니다."
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
                  "또한 이후 타이탄이 사용하는 일부 기술들의 패턴이 한층 더 강화됩니다."
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
                src: "/1.mp4",
                width: 750
              }
            ]
          }
        ]
      ),
      this.generateDialog("evilEarth", pageData.videoBaseUrl + "/evil-earth", [
        {
          type: "typographies",
          typographies: [
            {
              contents: [
                {
                  id: "evilEarth",
                  type: "chip"
                },
                "시전이 시작되면 바닥에 아래와 같은 특수 장판이 표시됩니다."
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
                "이후 시전이 끝나면 아래 영상처럼 장판이 표시되었던 곳부터 바깥쪽으로 1칸씩 넓어져가면서 순차적으로 폭발합니다."
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
              src: "/2.mp4",
              width: 500
            }
          ]
        },
        {
          type: "typographies",
          typographies: [
            {
              contents: [
                "폭발할 곳이 미리 바닥에 장판 형태로 표시되므로 침착하게 제자리에서 대기하다가 옆 바닥칸이 터지고 나면 그 칸으로 이동해 피해주면 됩니다."
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
              src: "/3.mp4",
              width: 750
            }
          ]
        }
      ]),
      this.generateDialog("faultZone", pageData.videoBaseUrl + "/fault-zone", [
        {
          type: "typographies",
          typographies: [
            {
              contents: [
                "타이탄이 직선으로 돌진하며 양 옆으로 충격파를 발생시켜 모든 플레이어들을 크게 밀어냅니다. 돌진 경로 위에 있을 경우 즉사합니다."
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
                "낙사당하지 않도록 타이탄의 옆에 붙어 밀려날 거리를 충분히 확보해줍니다. 밀쳐내기 무효화 기술 등을 사용하는 방법도 있습니다."
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
                "이후 돌진 경로로부터 양 옆으로 1칸씩 순차적으로 후속타가 발생하므로 푸른 장판을 잘 보고 피해줍니다."
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
              src: "/1.mp4",
              width: 750
            }
          ]
        }
      ]),
      this.generateDialog(
        "faultZoneMagnitude50",
        pageData.videoBaseUrl + "/fault-zone-magnitude-50",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "타이탄이 맵을 가로지르며",
                  {
                    id: "faultZone",
                    type: "chip"
                  },
                  "을 3번 반복합니다.",
                  {
                    id: "faultZone",
                    type: "chip"
                  },
                  "의 밀쳐내기 거리는 바닥칸 1칸 정도이므로 항상 타이탄의 옆에 바싹 붙어 낙사하지 않도록 주의해줍니다. 파란색 후속타 장판 역시 주의해줍시다."
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
                src: "/1.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "이후 타이탄이 제자리에 멈춰서서",
                  {
                    id: "magnitude50",
                    showNoLink: true,
                    type: "chip"
                  },
                  "시전을 시작합니다. 타이탄 중심 도넛 범위 공격이므로 타이탄의 발밑으로 모여 피해줍니다. 시전 시간이 긴 편이므로 차분하게 피해주면 됩니다."
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
                src: "/2.mp4",
                width: 750
              }
            ]
          }
        ]
      ),
      this.generateDialog("geocrush", pageData.videoBaseUrl + "/geocrush", [
        {
          type: "typographies",
          typographies: [
            {
              contents: [
                "타이탄이 모서리를 제외한 바깥 바닥칸 중 무작위로 1칸을 골라 바라보며",
                {
                  id: "geocrush",
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
                "타이탄이 바라보고 있는 바닥칸을 중심으로 화살표가 뻗어나가는 모양의 장판이 표시됩니다."
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
                "이후 시전이 끝나면 바라보고 있던 바닥칸을 향해 점프해 착지하며 모든 파티원들을 해당 칸의 바깥 방향으로 밀어냅니다."
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
                "밀어내는 거리가 상당히 길기 때문에 최대한 해당 바닥칸 근처에 서서 낙사를 방지해주도록 합니다."
              ],
              variant: "body2"
            },
            {
              contents: [
                "* 밀쳐내기 무효화 기술을 사용하거나 밀려나는 도중에 돌진 기술 등을 사용해 밀려나는 것을 방지할 수 있습니다."
              ],
              style: {
                color: colorTypes.warning
              },
              variant: "body2"
            }
          ]
        },
        {
          type: "centered",
          contents: [
            {
              type: "loopingVideo",
              src: "/2.mp4",
              width: 750
            }
          ]
        }
      ]),
      this.generateDialog(
        "massiveLandslide",
        pageData.videoBaseUrl + "/massive-landslide",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "시전이 끝나면 타이탄이 자신의 정면 직선 범위를 제외한 맵 전부를 공격하며 맞은 대상을 밀쳐내 낙사시킵니다."
                ],
                variant: "body2"
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: ["타이탄의 정면에 모여 넉백 공격을 피해줍니다."],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "loopingVideo",
                src: "/1.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "이후 정면 직선 범위로 파란색 후속타 장판이 표시되므로 옆으로 이동해 피해주도록 합니다."
                ],
                variant: "body2"
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "massiveLandslideLandslide",
        pageData.videoBaseUrl + "/massive-landslide-landslide",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "타이탄이 자신의 정면 직선 범위를 제외한 맵 전체를 공격하는",
                  {
                    id: "massiveLandslide",
                    type: "chip"
                  },
                  "를 사용합니다. 파티원 모두 타이탄의 정면에 모여 공격을 피해줍니다."
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
                src: "/1.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  "이후 타이탄이 맵의 반대편을 바라보며",
                  {
                    id: "landslide",
                    showNoLink: true,
                    type: "chip"
                  },
                  "시전을 시작합니다. 십자 장판이 바닥에 표시되므로 장판을 잘 보고 피해줍시다. 이후 타이탄이 돌아보며 자신의 오른쪽 혹은 왼쪽을 덮는 장판 공격을 시전합니다. 역시 장판이 바닥에 표시되므로 장판을 잘 보고 피해주면 됩니다."
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
                  "파란색으로 표시되는 후속타 장판에 유의하세요! 바닥을 잘 보고 집중해서 피해줍시다."
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
                src: "/2.mp4",
                width: 750
              }
            ]
          },
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "landslide",
                    showNoLink: true,
                    type: "chip"
                  },
                  "를 1번 더 사용합니다. 역시 표시되는 장판을 잘 보고 회피해주면 됩니다."
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
                src: "/3.mp4",
                width: 750
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "stonecrusher",
        pageData.videoBaseUrl + "/stonecrusher",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  '약 6만 정도의 물리 피해를 주며 피격자에게 "물리 방어 감소" 디버프를 부여하는 탱크 버스터입니다. 대상자 주위 원형 범위를 타격하는 범위 공격이므로 탱커 근처에 갔다가 휩쓸리지 않도록 주의합니다.'
                ],
                variant: "body2"
              },
              {
                contents: [
                  '* "물리 방어 감소" 디버프가 꽤 약한 편이라 탱교대가 없어도 버틸 수 있기는 하지만 이왕이면 교대해주는 것을 추천합니다.'
                ],
                style: {
                  color: colorTypes.warning
                },
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "loopingVideo",
                src: "/1.mp4",
                width: 750
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "voiceOfTheLand",
        pageData.videoBaseUrl + "/voice-of-the-land",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: ["약 3만 정도의 마법 피해를 주는 단발 광역기입니다."],
                variant: "body2"
              }
            ]
          },
          {
            type: "centered",
            contents: [
              {
                type: "loopingVideo",
                src: "/1.mp4",
                width: 750
              }
            ]
          }
        ]
      ),
      this.generateDialog(
        "weightOfTheLand",
        pageData.videoBaseUrl + "/weight-of-the-land",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  {
                    id: "weightOfTheLand",
                    type: "chip"
                  },
                  "시전이 시작되면 무작위로 8칸의 바닥 위에 장판이 표시됩니다. 시전이 끝나면 표시된 장판들이 폭발하므로 장판을 잘 보고 피해주면 됩니다."
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
                src: "/1.mp4",
                width: 750
              }
            ]
          }
        ]
      )
    ];

    const rewards = {
      tomestones: [
        {
          type: "goetia",
          amount: 20
        },
        {
          type: "phantasmagoria",
          amount: 10
        }
      ],
      autoItems: ["bladeOfEarlyAntiquity"],
      coffers: [
        [
          "armorOfEarlyAntiquity",
          "chaussesOfEarlyAntiquity",
          "greavesOfEarlyAntiquity",
          "bangleOfEarlyAntiquity"
        ],
        [
          "armorOfEarlyAntiquity",
          "gauntletsOfEarlyAntiquity",
          "chaussesOfEarlyAntiquity",
          "bangleOfEarlyAntiquity"
        ],
        ["edenMinor", "landslideOrchestrionRoll"]
      ]
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
                          src: "/raid-guide/edens-gate-sepulture.png",
                          width: 376
                        }
                      ]
                    },
                    {
                      type: "typographies",
                      typographies: [
                        {
                          contents: [
                            '크리스타리움 (X: 9.7, Y: 12.3) 에 위치한 NPC "착실한 위병" 에게 말을 걸어 받을 수 있는 연대기 퀘스트 "태초의 \'낙원\'" 퀘스트 라인을 끝까지 완료하면 개방할 수 있습니다.'
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
                          height: 315,
                          src: "https://www.youtube.com/embed/ZqhX3sftCGw",
                          width: 560
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
                              '> 패치 5.01에 추가되는 8인 레이드, "' +
                              pageData.title +
                              '" 가이드입니다.'
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
                            "요구 레벨은 80 이며 최소 아이템 레벨 제한은 425 입니다."
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
                  title: "기술 살펴보기",
                  children: (
                    <React.Fragment>
                      {this.generateBlocks([
                        {
                          type: "typographies",
                          typographies: [
                            {
                              contents: [
                                "* 기술 이름을 클릭해 상세 공략을 볼 수 있습니다."
                              ],
                              variant: "body2"
                            },
                            {
                              contents: [
                                "상세 공략 중",
                                <LaunchIcon />,
                                " 아이콘이 붙어있는 기술 이름의 경우 클릭해 더 자세한 내용을 열람할 수 있습니다."
                              ],
                              style: {
                                color: colorTypes.warning
                              },
                              variant: "body2"
                            }
                          ]
                        }
                      ])}
                      <GimmickSelectiveListBlock
                        gimmickData={this.gimmickData}
                        gimmicks={gimmicks}
                        openDialog={this.openDialog}
                      />
                      {this.generateBlocks([
                        {
                          type: "typographies",
                          typographies: [
                            {
                              contents: [
                                "이후 체력이 0이 될때까지 기존에 사용했던 기술을 무작위로 반복해 사용합니다."
                              ],
                              variant: "body2"
                            }
                          ]
                        }
                      ])}
                    </React.Fragment>
                  )
                },
                {
                  title: "시점 영상",
                  children: (
                    <React.Fragment>
                      {this.generateBlocks([
                        {
                          type: "centered",
                          contents: [
                            {
                              type: "youtubeFrame",
                              height: 315,
                              src: "https://www.youtube.com/embed/aWOmEvI5ng0",
                              width: 560
                            }
                          ]
                        }
                      ])}
                    </React.Fragment>
                  )
                },
                {
                  title: "전리품 살펴보기",
                  children: (
                    <React.Fragment>
                      {this.generateBlocks([
                        {
                          type: "typographies",
                          typographies: [
                            {
                              contents: [
                                "* 전리품 항목을 가리키면 아이템 설명을 볼 수 있습니다."
                              ],
                              variant: "body2"
                            }
                          ]
                        }
                      ])}
                      <RewardsBlock rewards={rewards} />
                    </React.Fragment>
                  )
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
                  height: 315,
                  src: "https://www.youtube.com/embed/mO3ojInwvCk",
                  width: 560
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

export default EdensGateSepulture;
