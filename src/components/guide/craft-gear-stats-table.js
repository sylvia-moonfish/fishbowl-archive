import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import React from "react";

class CraftGearStatsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spec = {
      cra: 0,
      con: 0,
      cp: this.props.Items.defaultCp,
    };

    this.props.gearSet.gears.forEach((gear) => {
      const item = this.props.Items[gear.itemId];

      if (item.cra) spec.cra += item.cra;
      if (item.con) spec.con += item.con;
      if (item.cp) spec.cp += item.cp;

      gear.materiaIds.forEach((materiaId) => {
        const materia = this.props.Items[materiaId];

        if (materia.cra) spec.cra += materia.cra;
        if (materia.con) spec.con += materia.con;
        if (materia.cp) spec.cp += materia.cp;
      });
    });

    return (
      <Grid item>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>작업 숙련도</TableCell>
              <TableCell>가공 숙련도</TableCell>
              <TableCell>CP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{spec.cra}</TableCell>
              <TableCell>{spec.con}</TableCell>
              <TableCell>{spec.cp}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    );
  }
}

export default CraftGearStatsTable;
