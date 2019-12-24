import Grid from "@material-ui/core/Grid";

import React from "react";

import CardBlock from "./card-block";

class CardsBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <Grid container direction="row" spacing={5}>
          {this.props.cards.map((card, cardIndex) => {
            return (
              <React.Fragment key={cardIndex}>
                <CardBlock
                  card={card}
                  gimmickData={this.props.gimmickData}
                  openDialog={this.props.openDialog}
                />
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default CardsBlock;
