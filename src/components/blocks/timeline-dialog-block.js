import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import { withTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
        onClose={this.props.closeDialog}
        open={this.props.openedDialog === this.props.id}
        scroll="paper"
        TransitionComponent={Transition}
      >
        <AppBar position="static">
          <Toolbar variant="dense">
            {this.props.dialogHistory.length > 0 && (
              <IconButton onClick={this.props.closeDialog}>
                <ArrowBackIcon />
              </IconButton>
            )}
            <div
              style={{
                flexGrow: 1
              }}
            >
              <Typography variant="h6">
                {this.props.gimmickData[this.props.id].ids
                  ? this.props.gimmickData[this.props.id].ids
                      .map(id => {
                        return this.props.gimmickData[id].name;
                      })
                      .join(" + ")
                  : this.props.gimmickData[this.props.id].name}
              </Typography>
            </div>
            <IconButton onClick={this.props.closeDialog}>
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
