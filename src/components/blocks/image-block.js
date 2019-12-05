import Grid from "@material-ui/core/Grid";

import React from "react";

class ImageBlock extends React.Component {
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
        <img
          src={this.props.src}
          style={{
            maxWidth: this.props.width,
            width: "100%"
          }}
        />
      </Grid>
    );
  }
}

export default ImageBlock;
