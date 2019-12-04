import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const GuideSubTitle = props => {
  return (
    <Grid item>
      <Typography variant="h6">{props.children}</Typography>
    </Grid>
  );
};

export default GuideSubTitle;
