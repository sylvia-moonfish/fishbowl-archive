import React from "react";

import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const GuideTab = (props) => {
  const [tab, setTab] = React.useState(0);

  return (
    <Grid item>
      <Tabs
        onChange={(e, v) => {
          setTab(v);
        }}
        value={tab}
        variant="scrollable"
      >
        {props.labels.map((l, i) => {
          return <Tab key={i} label={l} />;
        })}
      </Tabs>
      {props.tabs[tab]}
    </Grid>
  );
};

export default GuideTab;
