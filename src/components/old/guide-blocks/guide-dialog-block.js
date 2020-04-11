import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";

import React from "react";

import TranslatedComponent from "../translated-component";
import { getBlockComponent } from "../../utils/block-parser";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide {...props} direction="up" ref={ref} />;
});

const styles = (theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  title: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
});

class GuideDialogBlock extends TranslatedComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog
        fullWidth={true}
        keepMounted
        maxWidth="md"
        onClose={() => {
          this.props.setIsOpen(false);
        }}
        open={this.props.isOpen}
        TransitionComponent={Transition}
        scroll="paper"
      >
        <DialogTitle className={this.props.classes.title} disableTypography>
          {this.props.title && this.props.title.length > 0 && (
            <Typography variant="h6">{this.t(this.props.title)}</Typography>
          )}
          <IconButton
            className={this.props.classes.closeButton}
            onClick={() => {
              this.props.setIsOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={true}>
          <Grid container direction="column" spacing={5}>
            {this.props.blocks.map((block, blockIndex) => {
              return (
                <React.Fragment key={blockIndex}>
                  {getBlockComponent(block, this.props.language, {
                    commonBlocks: this.props.commonBlocks,
                  })}
                </React.Fragment>
              );
            })}
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(GuideDialogBlock);
