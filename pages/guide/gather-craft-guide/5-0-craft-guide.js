import React from "react";

import RedirectComponent from "../../../src/components/redirect-component";

class FiveZeroCraftGuide extends RedirectComponent {
  constructor(props) {
    super(props);
  }

  getRedirectUrl() {
    return "/guide/gather-craft-guide/5-0/craft-from-70";
  }
}

export default FiveZeroCraftGuide;
