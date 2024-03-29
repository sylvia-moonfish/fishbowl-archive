import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

import React from "react";

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
              {this.props.actionCard.map((actionId, actionIdIndex) => {
                const action = this.props.Actions[actionId];

                if (!action) {
                  console.log(actionId);
                  return <div />;
                }

                return (
                  <Grid item key={actionIdIndex}>
                    <div
                      style={{
                        border: "1px solid black",
                        borderRadius: 5,
                        height: 42,
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
                        <img alt="" src={action.iconSrc} />
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
