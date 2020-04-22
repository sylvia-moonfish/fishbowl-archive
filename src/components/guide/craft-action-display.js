import React from "react";

import CraftActionCard from "./craft-action-card";
import CraftActionMacroTabs from "./craft-action-macro-tabs";

class CraftActionDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <CraftActionCard
          craftActions={this.props.craftActions}
          Actions={this.props.Actions}
        />
        <CraftActionMacroTabs
          craftActions={this.props.craftActions}
          Actions={this.props.Actions}
        />
      </React.Fragment>
    );
  }
}

export default CraftActionDisplay;
