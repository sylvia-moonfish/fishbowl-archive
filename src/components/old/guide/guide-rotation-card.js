import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const GuideRotationCard = (props) => {
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Grid container spacing={1} direction="row">
            {props.data.map((d, i) => {
              return (
                <Grid key={i} item>
                  <img src={props.baseUrl + d + ".png"} />
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GuideRotationCard;
