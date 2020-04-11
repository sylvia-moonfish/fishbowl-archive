import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import GuideCaption from "./guide-caption";

const GuideLoopVideo = (props) => {
  const classes = makeStyles(() => ({
    video: {
      maxWidth: 576,
      width: "100%",
    },
  }))();

  return (
    <Grid item>
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.video}>
          <video
            className={classes.video}
            src={props.src}
            autoPlay
            loop
            muted
            preload="auto"
          />
        </Grid>
        <Grid item>
          <GuideCaption>{props.children}</GuideCaption>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GuideLoopVideo;
