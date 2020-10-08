import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import InvertColorsIcon from '@material-ui/icons/InvertColors';
import MenuIcon from '@material-ui/icons/Menu';

import Link from 'next/link';

import PropTypes from 'prop-types';

import SiteInfo from 'data/site-info';

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      icon: {
        marginRight: theme.spacing(1),
      },
      grow: {
        flexGrow: 1,
      },
      link: {
        color: "inherit",
        textDecoration: "none",
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("lg")]: {
          display: "none",
        },
      },
}));

const AppBarImpl =  props => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="fixed">
        <Toolbar variant="dense">
          <IconButton
            aria-label="Open Menu"
            className={classes.menuButton}
            color="inherit"
            edge="start"
            onClick={props.toggleMobileOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.grow}>
            <Link href="/">
              <a className={classes.link}>
                <Typography variant="h6">{SiteInfo.siteTitle}</Typography>
              </a>
            </Link>
          </div>
          <IconButton
            aria-label="Toggle Theme"
            className={classes.icon}
            onClick={props.toggleTheme}
          >
            <InvertColorsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
};

AppBarImpl.propTypes = {
    toggleMobileOpen: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired
};

export default AppBarImpl;