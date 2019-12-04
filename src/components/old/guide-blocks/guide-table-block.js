import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import React from "react";

import TranslatedComponent from "../translated-component";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText
  }
}))(TableCell);

class GuideTableBlock extends TranslatedComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <Grid item>
        <Table size="small">
          <TableHead>
            <TableRow>
              {this.props.columns.map((column, columnIndex) => {
                return (
                  <StyledTableCell key={columnIndex}>
                    {this.t(column.value)}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.rows.map((row, rowIndex) => {
              return (
                <TableRow key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => {
                    return (
                      <TableCell key={cellIndex}>
                        {this.t(cell.value)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    );
  }
}

export default GuideTableBlock;
