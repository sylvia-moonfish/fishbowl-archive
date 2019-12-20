import Grid from "@material-ui/core/Grid";

import React from "react";

class LoopingVideoBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        item
        style={{
          maxWidth: this.props.width,
          width: "100%"
        }}
      >
        <video
          autoPlay
          loop
          muted
          preload="auto"
          style={{
            maxWidth: this.props.width,
            width: "100%"
          }}
          src={this.props.src}
        />
      </Grid>
    );
  }
}

export default LoopingVideoBlock;
