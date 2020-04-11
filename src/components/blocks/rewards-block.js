import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import React from "react";

import Items from "../../../data/items";
import Tomestones from "../../../data/tomestones";
import ExpansionPanelsBlock from "./expansion-panels-block";

class RewardsBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item>
        <Container maxWidth="sm">
          <Grid container direction="column" spacing={5}>
            {this.props.rewards.tomestones && (
              <Grid item>
                <TableContainer>
                  <Table size="small">
                    <TableBody>
                      {this.props.rewards.tomestones.map(
                        (tomestone, tomestoneIndex) => {
                          return (
                            <TableRow key={tomestoneIndex}>
                              <TableCell>
                                <Avatar
                                  src={Tomestones[tomestone.type].imageSrc}
                                  style={{
                                    margin: "auto",
                                  }}
                                />
                              </TableCell>
                              <TableCell>
                                {Tomestones[tomestone.type].name}
                              </TableCell>
                              <TableCell>{tomestone.amount}</TableCell>
                            </TableRow>
                          );
                        }
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            )}
            {this.props.rewards.autoItems && (
              <Grid item>
                <Grid
                  alignItems="center"
                  container
                  direction="column"
                  justify="center"
                  spacing={5}
                >
                  {this.props.rewards.autoItems.map(
                    (autoItem, autoItemIndex) => {
                      return (
                        <React.Fragment key={autoItemIndex}>
                          <Tooltip
                            title={
                              <React.Fragment>
                                <Typography variant="body2">
                                  {Items[autoItem].description}
                                </Typography>
                              </React.Fragment>
                            }
                          >
                            <Button
                              startIcon={
                                <Avatar src={Items[autoItem].imageSrc} />
                              }
                            >
                              {Items[autoItem].name}
                            </Button>
                          </Tooltip>
                        </React.Fragment>
                      );
                    }
                  )}
                </Grid>
              </Grid>
            )}
            {this.props.rewards.coffers && (
              <Grid item>
                <ExpansionPanelsBlock
                  expandedPanel={0}
                  panels={this.props.rewards.coffers.map(
                    (coffer, cofferIndex) => {
                      return {
                        title: "보물상자 " + (cofferIndex + 1),
                        children: (
                          <React.Fragment>
                            <Grid item>
                              <Grid
                                alignItems="center"
                                container
                                direction="column"
                                justify="center"
                                spacing={5}
                              >
                                {coffer.map((item, itemIndex) => {
                                  return (
                                    <React.Fragment key={itemIndex}>
                                      <Tooltip
                                        title={
                                          <React.Fragment>
                                            <Typography variant="body2">
                                              {Items[item].description}
                                            </Typography>
                                          </React.Fragment>
                                        }
                                      >
                                        <Button
                                          startIcon={
                                            <Avatar
                                              src={Items[item].imageSrc}
                                            />
                                          }
                                        >
                                          {Items[item].name}
                                        </Button>
                                      </Tooltip>
                                    </React.Fragment>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </React.Fragment>
                        ),
                      };
                    }
                  )}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Grid>
    );
  }
}

export default RewardsBlock;
