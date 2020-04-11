import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";

import React from "react";

class CraftGearDisplayTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <Grid container spacing={2}>
          {this.props.gearSet.gears.map((gear, gearIndex) => {
            const item = this.props.Items[gear.itemId];

            const gearCard = (
              <Grid item xs={6}>
                <Card>
                  <CardHeader
                    avatar={<Avatar src={item.iconSrc} />}
                    title={item.name}
                  />
                  <CardContent>{gear.itemId}</CardContent>
                </Card>
              </Grid>
            );

            return (
              <React.Fragment>
                {gearIndex === 1 && <Grid item xs={6}></Grid>}
                {gearCard}
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default CraftGearDisplayTable;
