import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import { withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import React from "react";

class ExpansionPanels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //expandedPanel: false
      expandedPanel: 4,
    };
  }

  render() {
    return (
      <Grid item>
        {this.props.panels.map((panel, panelIndex) => {
          return (
            <ExpansionPanel
              expanded={this.state.expandedPanel === panelIndex}
              key={panelIndex}
              onChange={(e, isExpanded) => {
                this.state.expandedPanel = isExpanded ? panelIndex : false;
                this.setState(this.state);
              }}
              style={{
                backgroundColor: "transparent",
                borderColor: this.props.theme.palette.secondary.main,
                borderStyle: "solid",
                borderWidth: 1,
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                IconButtonProps={{
                  disableRipple: true,
                }}
                style={{
                  color: this.props.theme.palette.secondary.main,
                }}
              >
                <Typography variant="body1">{panel.title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container direction="column" spacing={5}>
                  {panel.children}
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </Grid>
    );
  }
}

export default withTheme(ExpansionPanels);
