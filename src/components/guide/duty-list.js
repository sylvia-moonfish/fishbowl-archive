import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Link from "next/link";

import React from "react";

const styles = () => ({
  image: {
    width: 188,
    height: 60
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  }
});

class DutyList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: 0
    };
  }

  render() {
    return (
      <React.Fragment>
        <Tabs
          indicatorColor="primary"
          onChange={(e, v) => {
            this.state.tabValue = v;
            this.setState(this.state);
          }}
          scrollButtons="auto"
          textColor="secondary"
          value={this.state.tabValue}
          variant="scrollable"
        >
          {this.props.expansions.map((expansion, expansionIndex) => {
            return <Tab key={expansionIndex} label={expansion.name} />;
          })}
        </Tabs>
        {this.props.expansions.map((expansion, expansionIndex) => {
          return (
            <React.Fragment key={expansionIndex}>
              {this.state.tabValue === expansionIndex && (
                <List>
                  <ListSubheader component="div">
                    {expansion.name}
                  </ListSubheader>
                  {expansion.patches.map((patch, patchIndex) => {
                    return (
                      <React.Fragment key={patchIndex}>
                        <ListSubheader component="div">
                          {patch.name}
                        </ListSubheader>
                        {patch.items.map((item, itemIndex) => {
                          return (
                            <Link href={item.href} key={itemIndex}>
                              <ListItem button divider>
                                <Grid alignItems="center" container spacing={3}>
                                  <Grid item>
                                    <img
                                      className={this.props.classes.image}
                                      src={item.thumbnailSrc}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <ListItemText
                                      primary={item.name}
                                      secondary={
                                        (item.level === -1
                                          ? ""
                                          : "레벨 " + item.level) +
                                        (item.itemLevel === -1
                                          ? ""
                                          : " | 아이템 레벨 " + item.itemLevel)
                                      }
                                    />
                                  </Grid>
                                </Grid>
                              </ListItem>
                            </Link>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </List>
              )}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(DutyList);
