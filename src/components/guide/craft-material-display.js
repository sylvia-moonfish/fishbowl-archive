import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import React from "react";

import SiteInfo from "../../../data/site-info";

class CraftMaterialDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <Grid container direction="column" spacing={3}>
          {this.props.craftMaterials.map(
            (craftMaterial, craftMaterialIndex) => {
              return (
                <Grid item key={craftMaterialIndex}>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography variant="body2">
                        {craftMaterial.label + ": "}
                      </Typography>
                    </Grid>
                    {craftMaterial.materials.map((material, materialIndex) => {
                      const materialInfo = this.props.Materials[material.id];

                      return (
                        <Grid item key={materialIndex}>
                          <Chip
                            avatar={
                              <Avatar
                                src={
                                  SiteInfo.assetsUrl +
                                  (material.hq
                                    ? materialInfo.hqIconSrc
                                    : materialInfo.iconSrc)
                                }
                              />
                            }
                            label={
                              materialInfo.name +
                              (material.hq ? " HQ " : " ") +
                              material.amount +
                              "개"
                            }
                            variant="outlined"
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            }
          )}
        </Grid>
      </Grid>
    );
  }
}
export default CraftMaterialDisplay;
