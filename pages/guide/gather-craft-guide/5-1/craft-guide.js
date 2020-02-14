import Chip from "@material-ui/core/Chip";
import { blue, red } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import MailIcon from "@material-ui/icons/Mail";
import LaunchIcon from "@material-ui/icons/Launch";
import TwitterIcon from "@material-ui/icons/Twitter";

import React from "react";

import SiteInfo from "../../../../data/site-info";
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
                  <Typography variant="body1">
                    5.1에서는 채집/제작 시스템에 대대적인 개편이 가해졌으며 신규
                    2성 제작/채작 방어구와 주/부도구가 추가되었습니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    본 가이드는{" "}
                    <Chip
                      color="secondary"
                      component="span"
                      icon={<LaunchIcon />}
                      label="5.0 제작 가이드"
                      onClick={() => {
                        window &&
                          window.open(
                            "https://platy.now.sh/guide/gather-craft-guide/5-0/craft-from-70"
                          );
                      }}
                      size="small"
                      variant="outlined"
                    />{" "}
                    페이지의 맨 마지막 "80 금단" 스펙에서부터 시작해 신규
                    방어구/도구를 직접 제작하고 적절한 스펙으로 금단해 5.2를
                    준비하는 과정을 다루고 있습니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Typography variant="h6">시작 스펙</Typography>
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
