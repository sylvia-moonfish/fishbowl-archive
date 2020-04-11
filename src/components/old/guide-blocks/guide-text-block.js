import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import React from "react";

import TranslatedComponent from "../translated-component";

const styles = () => ({
  link: {
    color: "inherit",
  },
});

class GuideTextBlock extends TranslatedComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <Typography variant={this.props.variant}>
          {this.props.text.map((t, tIndex) => {
            let payload = <div>Unrecognized text block.</div>;

            if (t.component === "multi-string") {
              payload = this.t([t]);
            } else if (t.component === "guide-text-block-anchor") {
              if (t.newWindow) {
                payload = (
                  <a
                    className={this.props.classes.link}
                    href={t.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {this.t(t.text)}
                  </a>
                );
              } else {
                payload = (
                  <a className={this.props.classes.link} href={t.href}>
                    {this.t(t.text)}
                  </a>
                );
              }
            }

            return <React.Fragment key={tIndex}>{payload}</React.Fragment>;
          })}
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(styles)(GuideTextBlock);
