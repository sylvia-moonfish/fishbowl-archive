import Grid from "@material-ui/core/Grid";

import React from "react";

class LoopingVideoBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <video
          autoPlay
          loop
          muted
          preload="auto"
          style={{
            height: this.props.height
          }}
          src={this.props.src}
        />
      </Grid>
    );
  }
}

export default LoopingVideoBlock;
