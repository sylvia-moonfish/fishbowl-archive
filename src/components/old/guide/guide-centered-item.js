import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const GuideCenteredItem = props => {
  const classes = makeStyles(() => ({
    fill: {
      width: "100%"
    }
  }))();

  return (
    <Grid className={classes.fill} item>
      <Grid container justify="center" className={classes.fill}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default GuideCenteredItem;
