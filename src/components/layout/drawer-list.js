import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Link from "next/link";

import React from "react";

import MainMenu from "../../../data/main-menu";
import SiteInfo from "../../../data/site-info";

const styles = (theme) => ({
  avatar: {
    height: 25,
    width: 25,
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
});

class DrawerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenu: MainMenu,
    };
  }

  render() {
    return (
      <List>
        <Link href="/">
          <ListItem alignItems="flex-start" button>
            <ListItemAvatar>
              <Avatar src={SiteInfo.profilePicLink} />
            </ListItemAvatar>
            <ListItemText
              primary={MainMenu.name}
              secondary={MainMenu.description}
            />
          </ListItem>
        </Link>
        <Divider />
        {this.state.mainMenu.menuGroups.map((menuGroup, menuGroupIndex) => {
          return (
            <React.Fragment key={menuGroupIndex}>
              <ListSubheader component="div">{menuGroup.title}</ListSubheader>
              {menuGroup.menus.map((menu, menuIndex) => {
                if (menu.subMenus.length === 0) {
                  return (
                    <ListItem button disabled key={menuIndex}>
                      {menu.icon(
                        this.props.classes.avatar,
                        this.props.currentTheme
                      )}
                      <ListItemText primary={menu.title} />
                    </ListItem>
                  );
                } else {
                  return (
                    <React.Fragment key={menuIndex}>
                      <ListItem
                        button
                        onClick={() => {
                          menu.isOpen = !menu.isOpen;
                          this.setState(this.state);
                        }}
                      >
                        {menu.icon(
                          this.props.classes.avatar,
                          this.props.currentTheme
                        )}
                        <ListItemText primary={menu.title} />
                        {menu.isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </ListItem>
                      <Collapse in={menu.isOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {menu.subMenus.map((subMenu, subMenuIndex) => {
                            if (!subMenu.href) {
                              return (
                                <ListItem
                                  button
                                  className={this.props.classes.nested}
                                  disabled={true}
                                  dense
                                  key={subMenuIndex}
                                >
                                  {subMenu.icon(
                                    this.props.classes.avatar,
                                    this.props.currentTheme
                                  )}
                                  <ListItemText primary={subMenu.title} />
                                </ListItem>
                              );
                            } else {
                              return (
                                <Link href={subMenu.href} key={subMenuIndex}>
                                  <ListItem
                                    button
                                    className={this.props.classes.nested}
                                    dense
                                  >
                                    {subMenu.icon(
                                      this.props.classes.avatar,
                                      this.props.currentTheme
                                    )}
                                    <ListItemText primary={subMenu.title} />
                                  </ListItem>
                                </Link>
                              );
                            }
                          })}
                        </List>
                      </Collapse>
                    </React.Fragment>
                  );
                }
              })}
            </React.Fragment>
          );
        })}
      </List>
    );
  }
}

export default withStyles(styles)(DrawerList);
