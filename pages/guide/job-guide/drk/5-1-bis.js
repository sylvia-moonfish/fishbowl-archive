import RedirectComponent from "../../../../src/components/redirect-component";

class FiveOneBis extends RedirectComponent {
  constructor(props) {
    super(props);
  }

  getRedirectUrl() {
    return "/5.1/guide/bis-guide/drk";
  }
}

export default FiveOneBis;
