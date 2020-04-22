import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

import React from "react";

import SiteInfo from "../../../data/site-info";

class CraftActionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <Card>
          <CardContent>
            <Grid container direction="row" spacing={1}>
              {this.props.craftActions.map((craftAction, craftActionIndex) => {
                const action = this.props.Actions[craftAction];

                return (
                  <Grid item key={craftActionIndex}>
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          background:
                            "linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .75))",
                          borderRadius: 5,
                          height: "20%",
                          left: 0,
                          position: "absolute",
                          top: 0,
                          width: "100%",
                        }}
                      ></div>
                      <Tooltip title={action.macroName.ko}>
                        <img src={SiteInfo.assetsUrl + action.iconSrc} />
                      </Tooltip>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default CraftActionCard;
