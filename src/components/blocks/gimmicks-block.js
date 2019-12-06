import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

import React from "react";

class GimmicksBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const gimmicks = this.props.gimmicks;
    gimmicks.sort((a, b) => {
      if (
        this.props.gimmickData[a].name.toUpperCase() <
        this.props.gimmickData[b].name.toUpperCase()
      ) {
        return -1;
      } else {
        return 1;
      }
    });

    return (
      <Grid item>
        <Grid container direction="row" spacing={3}>
          {gimmicks.map((gimmick, gimmickIndex) => {
            return (
              <Grid item key={gimmickIndex}>
                <Tooltip title={this.props.gimmickData[gimmick].description}>
                  <Chip
                    label={this.props.gimmickData[gimmick].name}
                    onClick={() => {
                      this.props.onClick(gimmick);
                    }}
                    style={{
                      color: this.props.gimmickData[gimmick].color
                    }}
                    variant="outlined"
                  />
                </Tooltip>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default GimmicksBlock;
