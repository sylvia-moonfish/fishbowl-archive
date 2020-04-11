import Grid from "@material-ui/core/Grid";

import React from "react";

import { getBlockComponent } from "../../utils/block-parser";

class GuideContainerBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container direction="column" spacing={5}>
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
    );
  }
}

export default GuideContainerBlock;
