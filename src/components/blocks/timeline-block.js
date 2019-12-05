import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import React from "react";

class TimelineBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <List>
          {this.props.timeline.map((item, itemIndex) => {
            if (item.type.name === "instruction") {
              return (
                <ListItem key={itemIndex}>
                  <ListItemText
                    primary={item.title}
                    style={{
                      color: item.type.color
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
                    this.props.onClick(item.id);
                  }}
                >
                  <Grid alignItems="center" container spacing={3}>
                    <Grid item>
                      <Chip label={item.timestamp} />
                    </Grid>
                    <Grid item>
                      <ListItemText
                        primary={item.title}
                        secondary={item.description}
                        style={{
                          color: item.type.color
                        }}
                      />
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
