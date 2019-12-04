import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import React from "react";

class GuideDividerBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <Divider />
      </Grid>
    );
  }
}

export default GuideDividerBlock;
