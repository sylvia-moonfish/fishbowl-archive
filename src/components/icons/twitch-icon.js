import SvgIcon from "@material-ui/core/SvgIcon";

import React from "react";

class TwitchIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SvgIcon viewBox="0 0 48 54" {...this.props}>
        <path d="M43.999 24.627L36.001 32.202H27.999L20.9973 38.8333V32.202H11.999V3.78933H43.999V24.627ZM9.99855 0L0 9.46965V43.5663H11.999V53.0359L21.9976 43.5663H29.9995L48 26.518V0H9.99855ZM38.0015 10.719H34.0004V22.0823H38.0015V10.719ZM23.0025 10.6722H27.0036V22.037H23.0025V10.6722Z"></path>
      </SvgIcon>
    );
  }
}

export default TwitchIcon;
