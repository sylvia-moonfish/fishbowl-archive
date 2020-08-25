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
          actionCard={this.props.actionCard}
          Actions={this.props.Actions}
        />
        <CraftActionMacroTabs
          actionMacro={this.props.actionMacro}
          Actions={this.props.Actions}
        />
      </React.Fragment>
    );
  }
}

export default CraftActionDisplay;
