import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import React from "react";

class TimelineBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastItem: false,
    };
  }

  render() {
    return (
      <Grid item>
        <List>
          {this.props.timeline.map((item, itemIndex) => {
            if (item.instruction && item.color) {
              return (
                <ListItem key={itemIndex}>
                  <ListItemText
                    primary={item.instruction}
                    style={{
                      color: item.color,
                    }}
                  />
                </ListItem>
              );
            } else {
              return (
                <ListItem
                  button
                  key={itemIndex}
                  onClick={() => {
                    this.state.lastItem = itemIndex;
                    this.setState(this.state, () => {
                      this.props.openDialog(item.id);
                    });
                  }}
                  selected={this.state.lastItem === itemIndex}
                >
                  <Grid alignItems="center" container spacing={3}>
                    {item.timestamp && (
                      <Grid item>
                        <Chip label={item.timestamp} />
                      </Grid>
                    )}
                    <Grid item>
                      {this.props.gimmickData[item.id].ids ? (
                        <ListItemText
                          primary={
                            <React.Fragment>
                              {this.props.gimmickData[item.id].ids.map(
                                (id, idIndex) => {
                                  return (
                                    <React.Fragment key={idIndex}>
                                      {idIndex !== 0 && <span> + </span>}
                                      <span
                                        style={{
                                          color: this.props.gimmickData[id]
                                            .color,
                                        }}
                                      >
                                        {this.props.gimmickData[id].name}
                                      </span>
                                    </React.Fragment>
                                  );
                                }
                              )}
                            </React.Fragment>
                          }
                          secondary={this.props.gimmickData[item.id].ids
                            .map((id) => {
                              return this.props.gimmickData[id].description;
                            })
                            .join(" + ")}
                        />
                      ) : (
                        <ListItemText
                          primary={this.props.gimmickData[item.id].name}
                          secondary={
                            this.props.gimmickData[item.id].description
                          }
                          style={{
                            color: this.props.gimmickData[item.id].color,
                          }}
                        />
                      )}
                    </Grid>
                  </Grid>
                </ListItem>
              );
            }
          })}
        </List>
      </Grid>
    );
  }
}

export default TimelineBlock;
