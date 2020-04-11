import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const GuideTitle = (props) => {
  return (
    <Grid item>
      <Grid container justify="center">
        <Typography variant="h4">{props.children}</Typography>
      </Grid>
    </Grid>
  );
};

export default GuideTitle;
