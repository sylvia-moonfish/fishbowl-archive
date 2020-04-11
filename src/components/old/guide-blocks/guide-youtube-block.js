import Grid from "@material-ui/core/Grid";

import React from "react";

class GuideYoutubeBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        item
        style={{
          maxWidth: this.props.width + "px",
          width: "100%",
        }}
      >
        <iframe
          allowFullScreen
          frameBorder="0"
          height={this.props.height}
          src={this.props.src}
          style={{
            maxWidth: this.props.width + "px",
            width: "100%",
          }}
          title={this.props.title}
          width={this.props.width}
        />
      </Grid>
    );
  }
}

export default GuideYoutubeBlock;
