import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Router from "next/router";

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

class ExpansionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedPanel: false,
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
        <div
          style={{
            marginTop: this.props.theme.spacing(1)
          }}
        >
          {this.props.expansions[this.state.tabValue].items.map(
            (item, itemIndex) => {
              if (item === "divider")
                return (
                  <Divider
                    style={{
                      margin: 25
                    }}
                  />
                );

              return (
                <ExpansionPanel
                  expanded={this.state.expandedPanel === itemIndex}
                  key={itemIndex}
                  onChange={(event, isExpanded) => {
                    this.state.expandedPanel = isExpanded ? itemIndex : false;
                    this.setState(this.state);
                  }}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{
                      disableRipple: true
                    }}
                  >
                    <Grid alignItems="center" container spacing={3}>
                      <Grid item>
                        {item.iconSrc && <Avatar src={item.iconSrc} />}
                      </Grid>
                      <Grid item>
                        <Typography>{item.name}</Typography>
                      </Grid>
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container spacing={3}>
                      {item.patches.map((patch, patchIndex) => {
                        return (
                          <Grid item key={patchIndex}>
                            <Chip
                              avatar={<Avatar src={patch.thumbnailSrc} />}
                              clickable
                              label={patch.name}
                              onClick={() => {
                                Router.push(patch.href);
                              }}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              );
            }
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withTheme(ExpansionList));
