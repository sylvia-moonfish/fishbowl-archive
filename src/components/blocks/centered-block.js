import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import React from "react";

const styles = () => ({
  fill: {
    width: "100%"
  }
});

class CenteredBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className={this.props.classes.fill} item>
        <Grid
          alignItems="center"
          className={this.props.classes.fill}
          container
          direction="row"
          justify="center"
          spacing={5}
        >
          {this.props.children}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CenteredBlock);
