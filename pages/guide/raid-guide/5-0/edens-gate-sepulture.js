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
  title: "희망의 동산 에덴: 각성편 4",
  description: "파이널 판타지 14 레이드 가이드 - 희망의 동산 에덴: 각성편 4",
  videoBaseUrl:
    "https://sylvia-moonfish.github.io/fishbowl-video-1/guide/raid-guide/shb/edens-gate-sepulture"
};

class EdensGateSepulture extends GuidePageComponent {
  constructor(props) {
    super(props);

    this.state.openedDialog = "crumblingDownSeismicWave";
  }

  render() {
    const colorTypes = GimmickColorType[this.props.currentTheme];

    this.gimmickData = {
      crumblingDown: {
        name: "Crumbling Down",
        description: "거리 비례 피해 돌 소환",
        color: colorTypes.everyone
      },
      crumblingDownSeismicWave: {
        ids: ["crumblingDown", "seismicWave"]
      },
      evilEarth: {
        name: "Evil Earth",
        description: "연속 폭발 장판",
        color: colorTypes.everyone
      },
      seismicWave: {
        name: "Seismic Wave",
        description: "큰 돌 뒤에 숨기",
        color: colorTypes.everyone
      },
      stonecrusher: {
        name: "Stonecrusher",
        description: "탱크 버스터",
        color: colorTypes.tank
      },
      voiceOfTheLand: {
        name: "Voice of the Land",
        description: "단발 광역기",
        color: colorTypes.heal
      },
      weightOfTheLand: {
        name: "Weight of the Land",
        description: "랜덤 장판 8개",
        color: colorTypes.noOne
      }
    };

    const timeline = [
      {
        id: "voiceOfTheLand"
      },
      {
        id: "evilEarth"
      },
      {
        id: "weightOfTheLand"
      },
      {
        id: "stonecrusher"
      },
      {
        id: "crumblingDownSeismicWave"
      }
    ];

    const dialogs = [
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
                "이후 시전이 끝나면 아래 영상처럼 장판이 표시되었던 곳부터 바깥쪽으로 한 칸씩 넓어져가면서 순차적으로 폭발합니다."
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
              height: 360,
              src: "/3.mp4"
            }
          ]
        }
      ]),
      this.generateDialog(
        "stonecrusher",
        pageData.videoBaseUrl + "/stonecrusher",
        [
          {
            type: "typographies",
            typographies: [
              {
                contents: [
                  '약 6만 정도의 물리 피해를 주며 피격자에게 "물리 방어 감소" 디버프를 부여하는 탱크 버스터입니다. 대상자 주위 원형 범위를 타격하는 범위 공격이므로 탱커 근처에 갔다가 휩쓸리지 않도록 주의해주세요.'
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
                height: 360,
                src: "/1.mp4"
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
                contents: ["약 3만 정도의 마법 피해를 주는 단발 광역기입니다."],
                variant: "body2"
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
                height: 360,
                src: "/1.mp4"
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
                            "The Crystarium (X: 9.7, Y: 12.3) 에 위치한 NPC 'Anxious Crystarium Guard' 에게 말을 걸어 받을 수 있는 연대기 퀘스트 'In the Middle of Nowhere' 퀘스트 라인을 끝까지 완료하면 개방할 수 있습니다."
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
                              "> 패치 5.01에 추가되는 8인 레이드, '" +
                              pageData.title +
                              "' 가이드입니다."
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
                  title: "기믹 살펴보기",
                  children: (
                    <React.Fragment>
                      {this.generateBlocks([
                        {
                          type: "typographies",
                          typographies: [
                            {
                              contents: [
                                "* 기믹 이름을 클릭해 상세 공략을 볼 수 있습니다."
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
                        timeline={timeline}
                      />
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
