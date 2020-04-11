import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import React from "react";

import TranslatedComponent from "../translated-component";
import { getBlockComponent } from "../../utils/block-parser";

const styles = () => ({
  fill: {
    width: "100%",
  },
});

class GuideCardsRowBlock extends TranslatedComponent {
  constructor(props) {
    super(props);

    this.state = {
      cards: props.cards,
    };
  }

  fetchVerticalPaths(startXs, startY, length, stroke, strokeWidth) {
    return (
      <React.Fragment>
        {startXs.map((startX, startXIndex) => {
          return (
            <path
              d={"M " + startX + " " + startY + " l 0 " + length}
              key={startXIndex}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          );
        })}
      </React.Fragment>
    );
  }

  fetchHorizontalPaths(startX, startYs, length, stroke, strokeWidth) {
    return (
      <React.Fragment>
        {startYs.map((startY, startYIndex) => {
          return (
            <path
              d={"M " + startX + " " + startY + " l " + length + " 0"}
              key={startYIndex}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          );
        })}
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Grid
            alignItems="center"
            container
            direction="row"
            justify="center"
            spacing={5}
          >
            {this.state.cards.map((card, cardIndex) => {
              const dialogBlock = this.props.commonBlocks[
                card.commonBlock[0].index
              ];

              return (
                <Grid item key={cardIndex} xs={4}>
                  <Card className={this.props.classes.fill}>
                    <CardActionArea
                      onClick={() => {
                        this.state.cards[cardIndex].isOpen = true;
                        this.setState(this.state);
                      }}
                    >
                      <CardMedia
                        autoPlay
                        component="video"
                        loop
                        muted
                        preload="auto"
                        src={dialogBlock.titleVideoSrc}
                      />
                      <CardContent>
                        <Typography align="center" variant="body1">
                          {this.t(dialogBlock.title)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  {getBlockComponent(dialogBlock, this.props.language, {
                    commonBlocks: this.props.commonBlocks,
                    isOpen: this.state.cards[cardIndex].isOpen,
                    setIsOpen: (v) => {
                      this.state.cards[cardIndex].isOpen = v;
                      this.setState(this.state);
                    },
                  })}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {this.props.nextRow && (
          <Grid item xs={12}>
            <Grid
              alignItems="center"
              container
              direction="row"
              justify="center"
              spacing={0}
            >
              <Grid item xs={8}>
                <svg width="100%" viewBox="0 0 100 10">
                  {this.props.cards.length === 1 &&
                    this.fetchVerticalPaths(
                      [50],
                      0,
                      5,
                      this.props.theme.palette.secondary.main,
                      0.5
                    )}
                  {this.props.cards.length === 2 &&
                    this.fetchVerticalPaths(
                      [25, 75],
                      0,
                      5,
                      this.props.theme.palette.secondary.main,
                      0.5
                    )}
                  {this.props.nextRow.cards.length === 1 &&
                    this.fetchVerticalPaths(
                      [50],
                      5,
                      5,
                      this.props.theme.palette.secondary.main,
                      0.5
                    )}
                  {this.props.nextRow.cards.length === 2 &&
                    this.fetchVerticalPaths(
                      [25, 75],
                      5,
                      5,
                      this.props.theme.palette.secondary.main,
                      0.5
                    )}
                  {this.props.cards.length !==
                    this.props.nextRow.cards.length &&
                    this.fetchHorizontalPaths(
                      25,
                      [5],
                      50,
                      this.props.theme.palette.secondary.main,
                      0.5
                    )}
                </svg>
              </Grid>
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withTheme(GuideCardsRowBlock));
