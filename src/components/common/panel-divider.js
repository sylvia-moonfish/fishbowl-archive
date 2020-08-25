import Divider from "@material-ui/core/Divider";
import { withTheme } from "@material-ui/core/styles";

import React from "react";

class PanelDivider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Divider
        style={{
          borderBottomWidth: 0,
          borderColor: this.props.theme.palette.secondary.main,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderStyle: "solid",
          borderTopWidth: 1,
          margin: "25px 3px 25px 3px",
        }}
      />
    );
  }
}

export default withTheme(PanelDivider);
