import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import { withTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";

import React from "react";

const Transition = React.forwardRef((props, ref) => {
  return <Grow {...props} ref={ref} />;
});
class TimelineDialogBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        onClose={this.props.onClose}
        open={this.props.openedDialog === this.props.id}
        scroll="paper"
        TransitionComponent={Transition}
      >
        <AppBar position="static">
          <Toolbar variant="dense">
            <div
              style={{
                flexGrow: 1
              }}
            >
              <Typography variant="h6">
                {this.props.gimmickData[this.props.id].name}
              </Typography>
            </div>
            <IconButton onClick={this.props.onClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent
          style={{
            padding: this.props.theme.spacing(3)
          }}
        >
          <div
            style={{
              minHeight: 24
            }}
          />
          <Grid container direction="column" spacing={5}>
            {this.props.children}
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withTheme(TimelineDialogBlock);
