import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const GuideNormalText = props => {
  return (
    <Grid item>
      <Typography variant="body1">{props.children}</Typography>
    </Grid>
  );
};

export default GuideNormalText;
