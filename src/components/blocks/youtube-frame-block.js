import Grid from "@material-ui/core/Grid";

import React from "react";

class YoutubeFrameBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        item
        style={{
          maxWidth: this.props.width + "px",
          width: "100%"
        }}
      >
        <iframe
          allowFullScreen
          frameBorder="0"
          height={this.props.height}
          style={{
            maxWidth: this.props.width + "px",
            width: "100%"
          }}
          src={this.props.src}
          width={this.props.width}
        />
      </Grid>
    );
  }
}

export default YoutubeFrameBlock;