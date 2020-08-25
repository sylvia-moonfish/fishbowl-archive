import LinearProgress from "@material-ui/core/LinearProgress";

import React from "react";

class RedirectComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.location.replace(this.getRedirectUrl());
    }
  }

  getRedirectUrl() {
    throw new Error("getRedirectUrl is not implemented.");
  }

  render() {
    return (
      <React.Fragment>
        <LinearProgress color="secondary" />
        <div>이동중...</div>
      </React.Fragment>
    );
  }
}

export default RedirectComponent;
