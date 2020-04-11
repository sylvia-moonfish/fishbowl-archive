import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const GuideCaption = (props) => {
  const classes = makeStyles(() => ({
    gray: {
      color: "rgba(200, 200, 200, 1)",
    },
  }))();

  return (
    <Typography className={classes.gray} variant="caption" component="span">
      {props.children}
    </Typography>
  );
};

export default GuideCaption;
