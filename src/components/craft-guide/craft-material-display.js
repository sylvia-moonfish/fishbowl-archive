import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import React from "react";

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
                      const materialInfo = this.props.Items[material.id];
                      if (!materialInfo) {
                        console.log(material.id);
                        return <div />;
                      }

                      if (material.hq && !materialInfo.hq) {
                        console.log(material.id);
                        return <div />;
                      }

                      return (
                        <Grid item key={materialIndex}>
                          <Chip
                            avatar={
                              <Avatar
                                alt=""
                                src={
                                  material.hq
                                    ? materialInfo.hq.iconSrc
                                    : materialInfo.iconSrc
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
