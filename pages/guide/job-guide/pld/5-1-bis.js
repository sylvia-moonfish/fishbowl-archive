import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import LaunchIcon from "@material-ui/icons/Launch";

import React from "react";

import ExpansionTitles from "../../../../data/expansion-titles";
import SiteInfo from "../../../../data/site-info";
import ExpansionPanelsBlock from "../../../../src/components/blocks/expansion-panels-block";
import RewardsBlock from "../../../../src/components/blocks/rewards-block";
import GuidePageComponent from "../../../../src/components/guide-page-component";

const pageData = {
  title: "나이트 가이드 - 5.1 BiS",
  description: "파이널 판타지 14 나이트 가이드 - 5.1 BiS"
};

class FiveOneBis extends GuidePageComponent {
  constructor(props) {
    super(props);
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
                      type: "typographies",
                      typographies: [
                        {
                          contents: [
                            "패치 5.1 기준 나이트의 Best-In-Slot 장비 세트 목록입니다."
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
                          contents: ["스킬 로테이션"],
                          variant: "h6"
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
                          contents: ["BiS 장비 세트 목록"],
                          variant: "h6"
                        }
                      ]
                    },
                    {
                      type: "typographies",
                      typographies: [
                        {
                          contents: [""],
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
                  contents: ["스킬 로테이션"],
                  variant: "h6"
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
                              variant: "body2"
                            }
                          ]
                        }
                      ])}
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
              type: "typographies",
              typographies: [
                {
                  contents: ["BiS 장비 세트 목록"],
                  variant: "h6"
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
                              variant: "body2"
                            }
                          ]
                        }
                      ])}
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
                              variant: "body2"
                            }
                          ]
                        }
                      ])}
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
      </React.Fragment>
    );
  }
}

export default FiveOneBis;
