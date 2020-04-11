import React from "react";

import TextField from "@material-ui/core/TextField";

const GuideMacro = (props) => {
  const onClick = (e) => {
    e.target.select(e.target);
    document.execCommand("copy");
    props.onClick();
  };

  return (
    <React.Fragment>
      {props.macros.map((macro, i) => {
        return (
          <TextField
            fullWidth={true}
            InputProps={{ readOnly: true, onClick: onClick }}
            key={i}
            label={macro.label}
            margin="normal"
            multiline
            value={macro.value}
            variant="outlined"
          />
        );
      })}
    </React.Fragment>
  );
};

export default GuideMacro;
