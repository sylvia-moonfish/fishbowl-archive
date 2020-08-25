import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import TextField from "@material-ui/core/TextField";

import React from "react";

import CraftActionMacroTexts from "./craft-action-macro-texts";

class CraftActionMacroTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      waitTime: 0,
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
              inputProps={{
                min: 0,
              }}
              label="매크로 추가 딜레이"
              onChange={(e) => {
                this.state.waitTime = e.target.valueAsNumber;
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
          <CraftActionMacroTexts
            actionMacro={this.props.actionMacro}
            Actions={this.props.Actions}
            language={["ko", "en", "ja"][this.state.tab]}
            waitTime={this.state.waitTime}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default CraftActionMacroTabs;
