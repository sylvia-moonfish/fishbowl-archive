import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";

import LinkIcon from "@material-ui/icons/Launch";

import React from "react";

class InlineChip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tooltip title={this.props.gimmickData[this.props.id].description}>
        {this.props.currentId !== this.props.id ? (
          <Chip
            component="span"
            icon={<LinkIcon />}
            label={this.props.gimmickData[this.props.id].name}
            onClick={() => {
              this.props.openDialog(this.props.id, this.props.currentId);
            }}
            size="small"
            style={{
              color: this.props.gimmickData[this.props.id].color
            }}
            variant="outlined"
          />
        ) : (
          <Chip
            component="span"
            label={this.props.gimmickData[this.props.id].name}
            size="small"
            style={{
              color: this.props.gimmickData[this.props.id].color
            }}
            variant="outlined"
          />
        )}
      </Tooltip>
    );
  }
}

export default InlineChip;
