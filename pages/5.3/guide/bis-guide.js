import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { withRouter } from "next/router";

import React from "react";

import SiteInfo from "../../../data/site-info";
import PageComponent from "../../../src/components/page-component";

const styles = (theme) => ({
  banner: {
    maxWidth: 440,
    width: "100%",
  },
});

const pageData = {
  title: "5.3 BiS 가이드",
  description: "파이널 판타지 14 패치 5.3 BiS 가이드.",
};

const jobs = {
  tanks: [
    {
      name: "나이트",
      initial: "pld",
      disabled: true,
    },
    {
      name: "전사",
      initial: "war",
      disabled: true,
    },
    {
      name: "암흑기사",
      initial: "drk",
      disabled: true,
    },
    {
      name: "건브레이커",
      initial: "gnb",
      disabled: true,
    },
  ],
  healers: [
    {
      name: "백마도사",
      initial: "whm",
      disabled: true,
    },
    {
      name: "학자",
      initial: "sch",
      disabled: true,
    },
    {
      name: "점성술사",
      initial: "ast",
      disabled: true,
    },
  ],
  melees: [
    {
      name: "몽크",
      initial: "mnk",
      disabled: true,
    },
    {
      name: "용기사",
      initial: "drg",
      disabled: true,
    },
    {
      name: "닌자",
      initial: "nin",
      disabled: true,
    },
    {
      name: "사무라이",
      initial: "sam",
      disabled: true,
    },
  ],
  physicalRanged: [
    {
      name: "음유시인",
      initial: "brd",
      disabled: true,
    },
    {
      name: "기공사",
      initial: "mch",
      disabled: true,
    },
    {
      name: "무도가",
      initial: "dnc",
      disabled: true,
    },
  ],
  magicalRanged: [
    {
      name: "흑마도사",
      initial: "blm",
      disabled: true,
    },
    {
      name: "소환사",
      initial: "smn",
      disabled: true,
    },
    {
      name: "적마도사",
      initial: "rdm",
      disabled: true,
    },
  ],
};

class BisGuide extends PageComponent {
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
                <Grid item>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    justify="center"
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
                  >
                    <Grid item>
                      <img
                        alt=""
                        className={this.props.classes.banner}
                        src="/patch-banners/shb/5.3.png"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row" spacing={5}>
                    <Grid item xs={6}>
                      <Card>
                        <CardHeader
                          avatar={
                            <Avatar
                              alt=""
                              src="/icons/jobs/tank.png"
                              variant="square"
                            />
                          }
                          title="방어 역할군"
                        />
                        <CardContent>
                          <List component="div" dense>
                            {jobs.tanks.map((tank, tankIndex) => {
                              return (
                                <ListItem
                                  button
                                  disabled={tank.disabled}
                                  key={tankIndex}
                                  onClick={() => {
                                    this.props.router.push(
                                      this.props.router.pathname +
                                        "/" +
                                        tank.initial
                                    );
                                  }}
                                >
                                  <ListItemAvatar>
                                    <Avatar
                                      alt=""
                                      src={`/icons/jobs/${tank.initial}.png`}
                                      variant="square"
                                    />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={tank.name}
                                    secondary={tank.initial.toUpperCase()}
                                  />
                                </ListItem>
                              );
                            })}
                          </List>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6}>
                      <Card>
                        <CardHeader
                          avatar={
                            <Avatar
                              alt=""
                              src="/icons/jobs/healer.png"
                              variant="square"
                            />
                          }
                          title="회복 역할군"
                        />
                        <CardContent>
                          <List component="div" dense>
                            {jobs.healers.map((healer, healerIndex) => {
                              return (
                                <ListItem
                                  button
                                  disabled={healer.disabled}
                                  key={healerIndex}
                                  onClick={() => {
                                    this.props.router.push(
                                      this.props.router.pathname +
                                        "/" +
                                        healer.initial
                                    );
                                  }}
                                >
                                  <ListItemAvatar>
                                    <Avatar
                                      alt=""
                                      src={`/icons/jobs/${healer.initial}.png`}
                                      variant="square"
                                    />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={healer.name}
                                    secondary={healer.initial.toUpperCase()}
                                  />
                                </ListItem>
                              );
                            })}
                          </List>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar
                          alt=""
                          src="/icons/jobs/dps.png"
                          variant="square"
                        />
                      }
                      title="공격 역할군"
                    />
                    <CardContent>
                      <Grid container direction="row" spacing={5}>
                        <Grid item xs={6}>
                          <List component="div" dense>
                            <ListSubheader component="div">
                              근거리 공격
                            </ListSubheader>
                            {jobs.melees.map((melee, meleeIndex) => {
                              return (
                                <ListItem
                                  button
                                  disabled={melee.disabled}
                                  key={meleeIndex}
                                  onClick={() => {
                                    this.props.router.push(
                                      this.props.router.pathname +
                                        "/" +
                                        melee.initial
                                    );
                                  }}
                                >
                                  <ListItemAvatar>
                                    <Avatar
                                      alt=""
                                      src={`/icons/jobs/${melee.initial}.png`}
                                      variant="square"
                                    />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={melee.name}
                                    secondary={melee.initial.toUpperCase()}
                                  />
                                </ListItem>
                              );
                            })}
                          </List>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container direction="column" spacing={5}>
                            <Grid item>
                              <List component="div" dense>
                                <ListSubheader component="div">
                                  원거리 물리 공격
                                </ListSubheader>
                                {jobs.physicalRanged.map(
                                  (physicalRanged, physicalRangedIndex) => {
                                    return (
                                      <ListItem
                                        button
                                        disabled={physicalRanged.disabled}
                                        key={physicalRangedIndex}
                                        onClick={() => {
                                          this.props.router.push(
                                            this.props.router.pathname +
                                              "/" +
                                              physicalRanged.initial
                                          );
                                        }}
                                      >
                                        <ListItemAvatar>
                                          <Avatar
                                            alt=""
                                            src={`/icons/jobs/${physicalRanged.initial}.png`}
                                            variant="square"
                                          />
                                        </ListItemAvatar>
                                        <ListItemText
                                          primary={physicalRanged.name}
                                          secondary={physicalRanged.initial.toUpperCase()}
                                        />
                                      </ListItem>
                                    );
                                  }
                                )}
                              </List>
                            </Grid>
                            <Grid item>
                              <List component="div" dense>
                                <ListSubheader component="div">
                                  원거리 마법 공격
                                </ListSubheader>
                                {jobs.magicalRanged.map(
                                  (magicalRanged, magicalRangedIndex) => {
                                    return (
                                      <ListItem
                                        button
                                        disabled={magicalRanged.disabled}
                                        key={magicalRangedIndex}
                                        onClick={() => {
                                          this.props.router.push(
                                            this.props.router.pathname +
                                              "/" +
                                              magicalRanged.initial
                                          );
                                        }}
                                      >
                                        <ListItemAvatar>
                                          <Avatar
                                            alt=""
                                            src={`/icons/jobs/${magicalRanged.initial}.png`}
                                            variant="square"
                                          />
                                        </ListItemAvatar>
                                        <ListItemText
                                          primary={magicalRanged.name}
                                          secondary={magicalRanged.initial.toUpperCase()}
                                        />
                                      </ListItem>
                                    );
                                  }
                                )}
                              </List>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>{this.generateFooter()}</Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(BisGuide));
