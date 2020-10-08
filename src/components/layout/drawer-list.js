import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import { useRouter } from 'next/router';

import PropTypes from 'prop-types';

import React from 'react';

import MainMenu from 'data/main-menu';

const useStyles = makeStyles(theme => ({
    avatar: {
        height: 25,
        width: 25,
      },
      formControl: {
        margin: "auto",
        minWidth: 300,
      },
}));

const DrawerList =  props => {
    const classes = useStyles();
    const router = useRouter();

    const [selectedMenuItem, setSelectedMenuItem] = React.useState({});
    const [isVersionSelectorOpen, setIsVersionSelectorOpen] = React.useState(false);
    const [versionValue, setVersionValue] = React.useState('5.2');

    return (
            <React.Fragment>
              <List component="nav">
                <ListItem
                  alignItems="flex-start"
                  button
                  onClick={() => {
                    props.setMobileOpen(false);
                    router.push("/");
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
                                setSelectedMenuItem(menu);
                                setIsVersionSelectorOpen(true);
                            }}
                            selected={props.currentMenu === menu.href}
                          >
                            {menu.icon(
                              classes.avatar,
                              props.currentTheme
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
                    setIsVersionSelectorOpen(false);
                }}
                open={isVersionSelectorOpen}
              >
                <DialogTitle>
                  {selectedMenuItem.title} 버전 선택
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    열람하고자 하는 버전을 선택해주세요.
                  </DialogContentText>
                  <form>
                    <FormControl
                      className={classes.formControl}
                      variant="outlined"
                    >
                      <Select
                        onChange={(e) => {
                            setVersionValue(e.target.value ? e.target.value : versionValue);
                        }}
                        value={versionValue}
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
                        setIsVersionSelectorOpen(false);
                      props.setMobileOpen(false);
                      router.push(
                        `/${versionValue}${selectedMenuItem.href}`
                      );
                    }}
                  >
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          );
};

DrawerList.propTypes = {
    currentMenu: PropTypes.string.isRequired,
    currentTheme: PropTypes.string.isRequired,
    setMobileOpen: PropTypes.func.isRequired
};

export default DrawerList;