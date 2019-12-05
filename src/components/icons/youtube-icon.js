import SvgIcon from "@material-ui/core/SvgIcon";

import React from "react";

class YoutubeIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SvgIcon viewBox="0 0 64 64" {...this.props}>
        <path
          d="M 21.00,1.63
           C 14.54,4.01 8.65,8.00 5.00,14.00
             2.32,18.42 1.06,25.86 1.00,31.00
             0.95,36.04 1.75,43.41 3.82,48.00
             8.20,57.76 19.61,63.87 30.00,64.00
             42.58,64.15 52.09,61.20 59.39,50.00
             64.40,42.30 64.70,24.10 60.43,16.00
             58.10,11.59 52.34,5.99 48.00,3.53
             42.09,0.18 27.67,0.30 21.00,1.63 Z
           M 17.02,17.20
           C 17.02,17.20 40.00,17.20 40.00,17.20
             43.20,17.00 47.97,16.74 50.57,18.85
             55.25,22.66 55.16,41.39 50.57,45.26
             48.14,47.31 44.01,47.00 41.00,47.00
             41.00,47.00 23.00,47.00 23.00,47.00
             20.00,47.00 15.85,47.31 13.43,45.26
             11.33,43.48 11.01,40.56 10.59,38.00
             9.88,33.61 9.65,23.06 12.74,19.65
             14.08,18.17 15.27,17.99 17.02,17.20 Z
           M 29.00,27.00
           C 29.00,27.00 28.00,37.00 28.00,37.00
             28.00,37.00 37.00,33.00 37.00,33.00
             37.00,33.00 37.00,31.00 37.00,31.00
             37.00,31.00 29.00,27.00 29.00,27.00 Z"
        />
      </SvgIcon>
    );
  }
}

export default YoutubeIcon;