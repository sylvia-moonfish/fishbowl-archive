import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import TextField from "@material-ui/core/TextField";

import React from "react";

class CraftActionMacroTabs extends React.Component {
  constructor(props) {
    super(props);

    const macros = ["ko", "en", "ja"].map((l) => {
      return this.props.craftActions.map((craftAction) => {
        return this.props.Actions[craftAction].macroName[l];
      });
    });

    this.state = {
      additionalWaitTime: 0,
      macros: macros,
      tab: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Grid item>
          <form noValidate>
            <TextField
              color="secondary"
              defaultValue={0}
              label="매크로 추가 딜레이"
              onChange={(e) => {
                this.state.additionalWaitTime = e.target.valueAsNumber;
                this.setState(this.state);
              }}
              type="number"
            />
          </form>
        </Grid>
        <Grid item>
          <Tabs
            onChange={(e, v) => {
              this.state.tab = v;
              this.setState(this.state);
            }}
            value={this.state.tab}
            variant="scrollable"
          >
            <Tab label="KO" />
            <Tab label="EN" />
            <Tab label="JA" />
          </Tabs>
          {JSON.stringify(this.state.macros[this.state.tab])}
        </Grid>
      </React.Fragment>
    );
  }
}

export default CraftActionMacroTabs;
