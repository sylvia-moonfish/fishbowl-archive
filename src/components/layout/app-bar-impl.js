import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import InvertColorsIcon from "@material-ui/icons/InvertColors";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";

import Link from "next/link";

import React from "react";

import SiteInfo from "../../../data/site-info";

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  }
});

class AppBarImpl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar className={this.props.classes.appBar} position="fixed">
        <Toolbar variant="dense">
          <IconButton
            className={this.props.classes.menuButton}
            color="inherit"
            edge="start"
            onClick={this.props.toggleMobileOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={this.props.classes.grow}>
            <Link href="/">
              <a className={this.props.classes.link}>
                <Typography variant="h6">{SiteInfo.siteTitle}</Typography>
              </a>
            </Link>
          </div>
          <IconButton
            className={this.props.classes.icon}
            onClick={this.props.toggleTheme}
          >
            <InvertColorsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppBarImpl);
