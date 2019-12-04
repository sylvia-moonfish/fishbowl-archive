import React from "react";

import RedirectComponent from "../../../src/components/redirect-component";

class KuganeOhashi extends RedirectComponent {
  constructor(props) {
    super(props);
  }

  getRedirectUrl() {
    return "/guide/trial-guide/4-5/kugane-ohashi";
  }
}

export default KuganeOhashi;
