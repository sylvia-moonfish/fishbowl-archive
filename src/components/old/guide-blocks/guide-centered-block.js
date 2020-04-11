import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import React from "react";

import { getBlockComponent } from "../../utils/block-parser";

const styles = () => ({
  fill: {
    width: "100%",
  },
});

class GuideCenteredBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className={this.props.classes.fill} item>
        <Grid
          className={this.props.classes.fill}
          container
          justify="center"
          spacing={5}
        >
          {this.props.blocks.map((block, blockIndex) => {
            return (
              <React.Fragment key={blockIndex}>
                {getBlockComponent(block, this.props.language, {
                  commonBlocks: this.props.commonBlocks,
                })}
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GuideCenteredBlock);
