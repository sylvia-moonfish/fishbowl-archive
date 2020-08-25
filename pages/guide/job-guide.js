import RedirectComponent from "../../src/components/redirect-component";

class JobGuide extends RedirectComponent {
  constructor(props) {
    super(props);
  }

  getRedirectUrl() {
    return "/5.1/guide/bis-guide";
  }
}

export default JobGuide;
