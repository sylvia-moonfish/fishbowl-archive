import Grid from "@material-ui/core/Grid";

import React from "react";

import TranslatedComponent from "../translated-component";

class GuideVideoBlock extends TranslatedComponent {
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
            height: this.props.height + "px"
          }}
          src={this.props.videoSrc}
        />
      </Grid>
    );
  }
}

export default GuideVideoBlock;
