import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import React from "react";

class CardBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <Card
          style={{
            width: this.props.card.width
          }}
        >
          <CardActionArea
            onClick={() => {
              this.props.openDialog(this.props.card.id);
            }}
          >
            <CardMedia
              autoPlay
              component="video"
              loop
              muted
              preload="auto"
              src={this.props.card.src}
            />
            <CardContent>
              <Typography gutterBottom variant="body1">
                {this.props.gimmickData[this.props.card.id].ids ? (
                  <React.Fragment>
                    {this.props.gimmickData[this.props.card.id].ids.map(
                      (id, idIndex) => {
                        return (
                          <React.Fragment key={idIndex}>
                            {idIndex !== 0 && <span> + </span>}
                            {
                              <span
                                style={{
                                  color: this.props.gimmickData[id].color
                                }}
                              >
                                {this.props.gimmickData[id].name}
                              </span>
                            }
                          </React.Fragment>
                        );
                      }
                    )}
                  </React.Fragment>
                ) : (
                  <span
                    style={{
                      color: this.props.gimmickData[this.props.card.id].color
                    }}
                  >
                    {this.props.gimmickData[this.props.card.id].name}
                  </span>
                )}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {this.props.gimmickData[this.props.card.id].ids ? (
                  <React.Fragment>
                    {this.props.gimmickData[this.props.card.id].ids
                      .map(id => {
                        return this.props.gimmickData[id].description;
                      })
                      .join(" + ")}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {this.props.gimmickData[this.props.card.id].description}
                  </React.Fragment>
                )}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

export default CardBlock;
