import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const GuideCard = props => {
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Grid container spacing={5} direction="column">
            <Grid item>
              <Grid container justify="center">
                <Typography variant="h6">{props.title}</Typography>
              </Grid>
            </Grid>
            <Divider />
            {props.children}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GuideCard;
