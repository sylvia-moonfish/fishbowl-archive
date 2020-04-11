import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import React from "react";

import TranslatedComponent from "../translated-component";
import { getBlockComponent } from "../../utils/block-parser";

class GuideTabBlock extends TranslatedComponent {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: 0,
    };
  }

  render() {
    return (
      <Grid item>
        <Tabs
          onChange={(e, v) => {
            this.state.tabValue = v;
            this.setState(this.state);
          }}
          value={this.state.tabValue}
          variant="scrollable"
        >
          {this.props.tabLabels.map((tabLabel, tabLabelIndex) => {
            return <Tab key={tabLabelIndex} label={this.t([tabLabel])} />;
          })}
        </Tabs>
        {getBlockComponent(
          this.props.tabBlocks[this.state.tabValue],
          this.props.language,
          {
            commonBlocks: this.props.commonBlocks,
          }
        )}
      </Grid>
    );
  }
}

export default GuideTabBlock;
