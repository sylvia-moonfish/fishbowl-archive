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
  title: "희망의 낙원 에덴: 각성편 3",
  description: "파이널 판타지 14 레이드 가이드 - 희망의 낙원 에덴: 각성편 3",
  videoBaseUrl:
    "https://sylvia-moonfish.github.io/fishbowl-video-1/guide/raid-guide/shb/edens-gate-inundation"
};

class EdensGateInundation extends GuidePageComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const colorTypes = GimmickColorType[this.props.currentTheme];

    this.gimmickData = {};

    const gimmicks = [];

    const dialogs = [];

    const rewards = {};

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
                          src: "/raid-guide/edens-gate-inundation.png",
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

export default EdensGateInundation;
