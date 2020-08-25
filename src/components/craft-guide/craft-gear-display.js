import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import React from "react";

class CraftGearDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <Grid container spacing={2}>
          {this.props.gearSet.gears.map((gear, gearIndex) => {
            const item = this.props.Items[gear.itemId];
            if (!item) {
              console.log(gear.itemId);
              return <div />;
            }
            const hqItem = item.hq;

            const gearCard = (
              <Grid item xs={6}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar
                        alt=""
                        src={gear.hq ? hqItem.iconSrc : item.iconSrc}
                        variant="rounded"
                      />
                    }
                    subheader={"아이템 레벨 " + item.itemLevel}
                    title={item.name}
                  />
                  <Table size="small">
                    <TableBody>
                      {gear.materiaIds.map((materiaId, materiaIdIndex) => {
                        const materia = this.props.Items[materiaId];
                        if (!materia) {
                          console.log(materiaId);
                          return <div />;
                        }

                        return (
                          <TableRow key={materiaIdIndex}>
                            <TableCell
                              style={{
                                height: 24,
                                width: 24,
                              }}
                            >
                              <Avatar
                                alt=""
                                src={materia.iconSrc}
                                style={{
                                  height: 24,
                                  width: 24,
                                }}
                              />
                            </TableCell>
                            <TableCell align="left">
                              <Typography variant="caption">
                                {materia.name}
                              </Typography>
                            </TableCell>
                            <TableCell align="left">
                              <Typography variant="caption">
                                {materia.description}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Card>
              </Grid>
            );

            return (
              <React.Fragment key={gearIndex}>
                {gearIndex === 1 && <Grid item xs={6}></Grid>}
                {gearCard}
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default CraftGearDisplay;
