import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import GuideCaption from "./guide-caption";

const GuideYtFrame = props => {
  const classes = makeStyles(() => ({
    video: {
      maxWidth: 576,
      width: "100%"
    }
  }))();

  return (
    <Grid item>
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.video}>
          <iframe
            className={classes.video}
            title={props.title}
            src={props.src}
            width="576"
            height="360"
            frameBorder="0"
            allowFullScreen
          />
        </Grid>
        <Grid item>
          <GuideCaption>{props.children}</GuideCaption>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GuideYtFrame;
