import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Grid from "@material-ui/core/Grid";
import { withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import React from "react";

class ExpansionPanels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedPanel: false,
    };
  }

  render() {
    return (
      <Grid item>
        {this.props.panels.map((panel, panelIndex) => {
          return (
            <Accordion
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
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                IconButtonProps={{
                  disableRipple: true,
                }}
                style={{
                  color: this.props.theme.palette.secondary.main,
                }}
              >
                <Typography variant="body1">{panel.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction="column" spacing={5}>
                  {panel.children}
                </Grid>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Grid>
    );
  }
}

export default withTheme(ExpansionPanels);
