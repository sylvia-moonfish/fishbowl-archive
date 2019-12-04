import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import LanguageContext from "../../contexts/language";

import en from "../../translations/components/guide/guide-gear-table/en";
import ko from "../../translations/components/guide/guide-gear-table/ko";
import gears from "../../data/gears";

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
    <LanguageContext.Consumer>
      {languageContext => {
        const messages = {
          en: en,
          ko: ko
        };
        const translate = id => {
          return messages[languageContext.language][id];
        };

        return (
          <Grid item>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">{translate("gear")}</TableCell>
                  <TableCell align="center" colSpan="5">
                    {translate("materia")}
                  </TableCell>
                  <TableCell align="center">{translate("gear")}</TableCell>
                  <TableCell align="center" colSpan="5">
                    {translate("materia")}
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
                                      {
                                        gears[c.gearId].name[
                                          languageContext.language
                                        ]
                                      }
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
                                <TableCell
                                  align="center"
                                  key={i}
                                  padding="none"
                                >
                                  {m}
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
      }}
    </LanguageContext.Consumer>
  );
};

export default GuideGearTable;
{
  /*

                            <TableBody>
                              <TableRow>
                                <TableCell align="center" variant="head">{translate('main-hand')}</TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                              </TableRow>
                              <TableRow>
                                <TableCell align="center" variant="head">{translate('head')}</TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell align="center" variant="head">{translate('off-hand')}</TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell align="center" variant="head">{translate('body')}</TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell align="center" variant="head">{translate('ears')}</TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell align="center" variant="head">{translate('hands')}</TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell align="center" variant="head">{translate('neck')}</TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell align="center" variant="head">{translate('waist')}</TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell align="center" variant="head">{translate('wrists')}</TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                                <TableCell padding="none">
                                {translate('cp-materia-short')+translate('materia-5')}
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </Grid>
  */
}
