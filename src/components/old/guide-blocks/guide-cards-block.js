import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import React from "react";

import TranslatedComponent from "../translated-component";
import { getBlockComponent } from "../../utils/block-parser";

const styles = () => ({
  fill: {
    width: "100%"
  }
});

class GuideCardsBlock extends TranslatedComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className={this.props.classes.fill} item>
        <Grid className={this.props.classes.fill} container>
          {this.props.rows.map((row, rowIndex) => {
            return (
              <React.Fragment key={rowIndex}>
                {getBlockComponent(row, this.props.language, {
                  commonBlocks: this.props.commonBlocks,
                  nextRow:
                    rowIndex + 1 < this.props.rows.length
                      ? this.props.rows[rowIndex + 1]
                      : null
                })}
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GuideCardsBlock);
