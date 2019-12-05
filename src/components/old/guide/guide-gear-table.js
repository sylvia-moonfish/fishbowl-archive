import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import gears from "../../../../data/old/gears";
import materias from "../../../../data/old/materias";

const GuideGearTable = props => {
  const gearsUrl = url => {
    return (
      "https://sylvia-moonfish.github.io/fishbowl-assets/icons/gears/" + url
    );
  };

  const classes = makeStyles(() => ({
    avatar: {
      margin: "auto"
    }
  }))();

  return (
    <Grid item>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">장비</TableCell>
            <TableCell align="center" colSpan="5">
              마테리아
            </TableCell>
            <TableCell align="center">장비</TableCell>
            <TableCell align="center" colSpan="5">
              마테리아
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((d, i) => {
            return (
              <TableRow key={i}>
                {d.map((c, i) => {
                  return c.gearId === -1 ? (
                    <React.Fragment key={i}>
                      <TableCell />
                      <TableCell padding="none" />
                      <TableCell padding="none" />
                      <TableCell padding="none" />
                      <TableCell padding="none" />
                      <TableCell padding="none" />
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={i}>
                      <TableCell align="center">
                        <Tooltip
                          title={
                            <React.Fragment>
                              <Typography variant="body2">
                                {gears[c.gearId].name["ko"]}
                              </Typography>
                            </React.Fragment>
                          }
                        >
                          <Avatar
                            className={classes.avatar}
                            src={gearsUrl(c.gearId + ".png")}
                          />
                        </Tooltip>
                      </TableCell>
                      {c.materiaIds.map((m, i) => {
                        return (
                          <TableCell align="center" key={i} padding="none">
                            {m && m.length > 0 && (
                              <Tooltip
                                title={
                                  <React.Fragment>
                                    <Typography variant="body2">
                                      {materias[m].effect}
                                    </Typography>
                                  </React.Fragment>
                                }
                              >
                                <Chip label={materias[m].name} />
                              </Tooltip>
                            )}
                          </TableCell>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default GuideGearTable;
