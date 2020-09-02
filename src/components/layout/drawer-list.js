import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

import { withRouter } from "next/router";

import React from "react";

import MainMenu from "../../../data/main-menu";

const styles = (theme) => ({
  avatar: {
    height: 25,
    width: 25,
  },
  formControl: {
    margin: "auto",
    minWidth: 300,
  },
});

class DrawerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenuItem: {},
      isVersionSelectorOpen: false,
      versionValue: "5.2",
    };
  }

  render() {
    return (
      <React.Fragment>
        <List component="nav">
          <ListItem
            alignItems="flex-start"
            button
            onClick={() => {
              this.props.setMobileOpen(false);
              this.props.router.push("/");
            }}
          >
            <ListItemAvatar>
              <Avatar alt="" src="/192.png" />
            </ListItemAvatar>
            <ListItemText
              primary={MainMenu.name}
              secondary={MainMenu.description}
            />
          </ListItem>
          <Divider />
          {MainMenu.menuGroups.map((menuGroup, menuGroupIndex) => {
            return (
              <React.Fragment key={menuGroupIndex}>
                <ListSubheader component="div">{menuGroup.title}</ListSubheader>
                {menuGroup.menus.map((menu, menuIndex) => {
                  return (
                    <ListItem
                      button
                      key={menuIndex}
                      onClick={() => {
                        this.setState({
                          ...this.state,
                          selectedMenuItem: menu,
                          isVersionSelectorOpen: true,
                        });
                      }}
                      selected={this.props.currentMenu === menu.href}
                    >
                      {menu.icon(
                        this.props.classes.avatar,
                        this.props.currentTheme
                      )}
                      <ListItemText primary={menu.title} />
                    </ListItem>
                  );
                })}
              </React.Fragment>
            );
          })}
        </List>
        <Dialog
          maxWidth="sm"
          onClose={() => {
            this.setState({
              ...this.state,
              isVersionSelectorOpen: false,
            });
          }}
          open={this.state.isVersionSelectorOpen}
        >
          <DialogTitle>
            {this.state.selectedMenuItem.title} 버전 선택
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              열람하고자 하는 버전을 선택해주세요.
            </DialogContentText>
            <form>
              <FormControl
                className={this.props.classes.formControl}
                variant="outlined"
              >
                <Select
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      versionValue: e.target.value
                        ? e.target.value
                        : this.state.versionValue,
                    });
                  }}
                  value={this.state.versionValue}
                >
                  <MenuItem value={5.2}>5.2 (한국 서버)</MenuItem>
                  <MenuItem value={5.3}>5.3 (글로벌 서버)</MenuItem>
                  <Divider />

                  <MenuItem value={5.1}>5.1</MenuItem>
                  <Divider />
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({
                  ...this.state,
                  isVersionSelectorOpen: false,
                });
                this.props.setMobileOpen(false);
                this.props.router.push(
                  `/${this.state.versionValue}${this.state.selectedMenuItem.href}`
                );
              }}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(DrawerList));
