import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";

import AppsIcon from "@material-ui/icons/Apps";
import ListIcon from "@material-ui/icons/List";

import React from "react";

import CardsBlock from "./cards-block";
import TimelineBlock from "./timeline-block";

class GimmickSelectiveListBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMode: "cards"
    };
  }

  render() {
    return (
      <React.Fragment>
        <Grid item>
          <ButtonGroup variant="contained">
            <Button
              color={this.state.currentMode === "cards" ? "primary" : "default"}
              onClick={() => {
                this.state.currentMode = "cards";
                this.setState(this.state);
              }}
              startIcon={<AppsIcon />}
            >
              카드로 보기
            </Button>
            <Button
              color={this.state.currentMode === "list" ? "primary" : "default"}
              onClick={() => {
                this.state.currentMode = "list";
                this.setState(this.state);
              }}
              startIcon={<ListIcon />}
            >
              목록으로 보기
            </Button>
          </ButtonGroup>
        </Grid>
        {this.state.currentMode === "cards" && (
          <CardsBlock
            cards={this.props.gimmicks}
            gimmickData={this.props.gimmickData}
            openDialog={this.props.openDialog}
          />
        )}
        {this.state.currentMode === "list" && (
          <TimelineBlock
            gimmickData={this.props.gimmickData}
            openDialog={this.props.openDialog}
            timeline={this.props.gimmicks}
          />
        )}
      </React.Fragment>
    );
  }
}

export default GimmickSelectiveListBlock;
