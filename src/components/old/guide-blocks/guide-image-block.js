import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import React from "react";

const styles = () => ({
  fill: {
    width: "100%"
  }
});

class GuideImageBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        className={this.props.classes.fill}
        style={{
          maxWidth: this.props.maxWidth + "px"
        }}
        item
      >
        <img className={this.props.classes.fill} src={this.props.src} />
      </Grid>
    );
  }
}

export default withStyles(styles)(GuideImageBlock);
