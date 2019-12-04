import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import React from "react";

import SiteInfo from "../data/site-info";
import PageComponent from "../src/components/page-component";

const styles = theme => ({
  media: {
    height: 200,
    [theme.breakpoints.up("lg")]: {
      height: 300
    }
  }
});

const pageData = {
  intro: "파이널 판타지 14 가이드 및 글로벌 뉴스 번역 등을 게재하고 있습니다.",
  name: 'Sylvia "The Platy" Moonfish',
  globalChar: "Sylvia Moonfish@Midgardsormr/Aether",
  koreanChar: "플래티@톤베리"
};

class Index extends PageComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.generateHead(SiteInfo.siteTitle, SiteInfo.siteDescription)}
        <Card>
          <CardMedia
            className={this.props.classes.media}
            image={SiteInfo.headerPicLink}
          />
          <CardContent align="center">
            <Grid alignItems="center" container direction="column" spacing={2}>
              <Grid item>
                <Typography paragraph variant="overline">
                  <u>{pageData.name}</u>
                  <br />
                  {pageData.intro}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container justify="center" spacing={2}>
                  <Grid item>
                    <ButtonGroup size="small" variant="contained">
                      <Button disabled>파판글섭</Button>
                      <Button>{pageData.globalChar}</Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item>
                    <ButtonGroup size="small" variant="contained">
                      <Button disabled>파판한섭</Button>
                      <Button>{pageData.koreanChar}</Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Index);
