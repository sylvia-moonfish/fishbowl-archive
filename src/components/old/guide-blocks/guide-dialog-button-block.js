import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import React from "react";

import TranslatedComponent from "../translated-component";
import { getBlockComponent } from "../../utils/block-parser";
import { fetchIcon } from "../../utils/icon-parser";

const LeftAlignedButton = withStyles(() => ({
  label: {
    alignItems: "center",
    justifyContent: "flex-start"
  }
}))(Button);

class GuideDialogButtonBlock extends TranslatedComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <Grid item>
        <LeftAlignedButton
          color={this.props.color}
          onClick={() => {
            this.state.isOpen = true;
            this.setState(this.state);
          }}
          startIcon={fetchIcon(this.props.startIcon)}
          fullWidth={this.props.fullWidth}
          size={this.props.size}
          variant={this.props.variant}
        >
          {this.t(this.props.buttonText)}
        </LeftAlignedButton>
        {getBlockComponent(this.props.dialogBlock[0], this.props.language, {
          commonBlocks: this.props.commonBlocks,
          isOpen: this.state.isOpen,
          setIsOpen: v => {
            this.state.isOpen = v;
            this.setState(this.state);
          }
        })}
      </Grid>
    );
  }
}

export default GuideDialogButtonBlock;
