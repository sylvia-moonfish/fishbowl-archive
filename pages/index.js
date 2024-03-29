import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import blue from "@material-ui/core/colors/blue";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import React from "react";

import SiteInfo from "../data/site-info";
import TwitchIcon from "../src/components/icons/twitch-icon";
import TwitterIcon from "../src/components/icons/twitter-icon";
import YoutubeIcon from "../src/components/icons/youtube-icon";
import PageComponent from "../src/components/page-component";

const styles = (theme) => ({
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  media: {
    height: 300,
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
  },
});

class Index extends PageComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.generateHead(SiteInfo.siteTitle, SiteInfo.siteDescription)}
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <Card>
              <CardMedia
                className={this.props.classes.media}
                image="/header.png"
              />
              <CardContent align="center">
                <Grid
                  alignItems="center"
                  container
                  direction="column"
                  spacing={1}
                >
                  <Grid item>
                    <Typography paragraph variant="h6">
                      Platy's Fishbowl
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid
                      alignItems="center"
                      container
                      direction="column"
                      spacing={1}
                    >
                      <Grid item>
                        <Grid container direction="row" spacing={1}>
                          <Grid item>
                            <a
                              className={this.props.classes.link}
                              href={SiteInfo.globalFflogsLink}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <Chip
                                avatar={
                                  <Avatar alt="" src="/icons/fflogs.png" />
                                }
                                label="Sylvia Moonfish@Midgardsormr/Aether"
                                onClick={() => {}}
                                size="small"
                                variant="outlined"
                              />
                            </a>
                          </Grid>
                          <Grid item>
                            <Chip
                              label="플래티@카벙클"
                              size="small"
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container direction="row" spacing={1}>
                          <Grid item>
                            <a
                              className={this.props.classes.link}
                              href={SiteInfo.twitterLink}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <Chip
                                avatar={
                                  <TwitterIcon
                                    style={{
                                      color: blue[100],
                                    }}
                                  />
                                }
                                label="@sylvia_moonfish"
                                onClick={() => {}}
                                size="small"
                                style={{
                                  color: blue[100],
                                }}
                                variant="outlined"
                              />
                            </a>
                          </Grid>
                          <Grid item>
                            <a
                              className={this.props.classes.link}
                              href={SiteInfo.twitchLink}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <Chip
                                avatar={
                                  <TwitchIcon
                                    style={{
                                      color: purple[100],
                                    }}
                                  />
                                }
                                label="sylvia_moonfish"
                                onClick={() => {}}
                                size="small"
                                style={{
                                  color: purple[100],
                                }}
                                variant="outlined"
                              />
                            </a>
                          </Grid>
                          <Grid item>
                            <a
                              className={this.props.classes.link}
                              href={SiteInfo.youtubeLink}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <Chip
                                avatar={
                                  <YoutubeIcon
                                    style={{
                                      color: red[100],
                                    }}
                                  />
                                }
                                label="플래티"
                                onClick={() => {}}
                                size="small"
                                style={{
                                  color: red[100],
                                }}
                                variant="outlined"
                              />
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>{this.generateFooter()}</Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Index);
