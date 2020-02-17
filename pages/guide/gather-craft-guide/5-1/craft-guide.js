import { blue, red } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import React from "react";

import SiteInfo from "../../../../data/site-info";
import ExpansionPanelsBlock from "../../../../src/components/blocks/expansion-panels-block";
import PageComponent from "../../../../src/components/page-component";

const pageData = {
  title: "5.1 제작 가이드",
  description: "파이널 판타지 14 패치 5.1 제작 가이드."
};

class CraftGuide extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      snackbar: false
    };
  }

  render() {
    const colors = {
      blue: this.props.currentTheme === "light" ? blue[800] : blue[200],
      red: this.props.currentTheme === "light" ? red[800] : red[200]
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
                          width: "100%"
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
                    본 가이드는 패치 5.11에서 추가되는 이슈가르드 재건을 이용한
                    구간별 레벨링 장비 및 매크로와 80 레벨 달성 이후 스펙 업을
                    위한 단계별 장비/금단 및 매크로로 구성되어 있습니다.
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
                <Grid item>
                  <Typography variant="h6">
                    레벨링 구간별 장비 및 매크로
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    * 아래 메뉴 중 열람하고자 하는 메뉴를 클릭하시면 내용을
                    펼치거나 접을 수 있습니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <ExpansionPanelsBlock
                    expandedPanel={0}
                    panels={[
                      {
                        title: "레벨 1~20",
                        children: (
                          <React.Fragment>
                            <Grid item>
                              <Typography variant="body2">
                                (이 구간은 새로운 기술을 빠르게 습득하며 비교적
                                레벨업이 빠른 구간이므로 따로 매크로를 기재하지
                                않는 점 양해바랍니다.)
                              </Typography>
                            </Grid>
                          </React.Fragment>
                        )
                      },
                      {
                        title: "레벨 20~40",
                        children: <React.Fragment></React.Fragment>
                      },
                      {
                        title: "레벨 40~50",
                        children: <React.Fragment></React.Fragment>
                      },
                      {
                        title: "레벨 50~60",
                        children: <React.Fragment></React.Fragment>
                      },
                      {
                        title: "레벨 60~70",
                        children: <React.Fragment></React.Fragment>
                      },
                      {
                        title: "레벨 70~80",
                        children: <React.Fragment></React.Fragment>
                      }
                    ]}
                  />
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Typography variant="h6">80 레벨 이후</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default CraftGuide;
