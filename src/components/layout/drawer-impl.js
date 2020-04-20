import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import HomeIcon from "@material-ui/icons/Home";

import Link from "next/link";

import React from "react";

import SiteInfo from "../../../data/site-info";
import TwitterIcon from "../icons/twitter-icon";
import YoutubeIcon from "../icons/youtube-icon";
import DrawerList from "./drawer-list";

const styles = (theme) => ({
  caption: {
    color: "grey",
  },
  direction: {
    flexDirection: "column",
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: 320,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: 320,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  toolbar: {
    minHeight: 48,
  },
});

class DrawerImpl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const drawer = (
      <div className={this.props.classes.grow}>
        <DrawerList
          className={this.props.classes.grow}
          currentTheme={this.props.currentTheme}
          drawerList={this.props.drawerList}
          language={this.props.language}
          setMobileOpen={this.props.setMobileOpen}
          siteInfo={this.props.siteInfo}
        />
      </div>
    );

    const bottomLink = (
      <React.Fragment>
        <Grid container justify="center">
          <Link href="/">
            <IconButton>
              <HomeIcon />
            </IconButton>
          </Link>
          <a
            className={this.props.classes.link}
            href={SiteInfo.twitterLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </a>
          <a
            className={this.props.classes.link}
            href={SiteInfo.youtubeLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton>
              <YoutubeIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid container justify="center">
          <Typography
            align="center"
            className={this.props.classes.caption}
            paragraph
            variant="caption"
          >
            {SiteInfo.siteTitle} ⓒ {SiteInfo.copyrightYear} {SiteInfo.author}
            <br />
            All Rights Reserved.
          </Typography>
        </Grid>
      </React.Fragment>
    );

    return (
      <nav className={this.props.classes.drawer}>
        <Hidden lgUp implementation="css">
          <Drawer
            classes={{
              paper: this.props.classes.drawerPaper,
            }}
            className={this.props.classes.direction}
            ModalProps={{
              keepMounted: true,
            }}
            onClose={this.props.toggleMobileOpen}
            open={this.props.isMobileOpen}
            variant="temporary"
          >
            {drawer}
            {bottomLink}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: this.props.classes.drawerPaper,
            }}
            className={this.props.classes.direction}
            open
            variant="permanent"
          >
            <div className={this.props.classes.toolbar} />
            {drawer}
            {bottomLink}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

export default withStyles(styles)(DrawerImpl);
