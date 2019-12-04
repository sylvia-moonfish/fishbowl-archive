import Head from "next/head";
import Router from "next/router";
import React, { useEffect } from "react";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import CloseIcon from "@material-ui/icons/Close";

import GuideCenteredItem from "../../../../src/components/old/guide/guide-centered-item";
import GuideMacro from "../../../../src/components/old/guide/guide-macro";
import GuideNormalText from "../../../../src/components/old/guide/guide-normal-text";
import GuideRotationCard from "../../../../src/components/old/guide/guide-rotation-card";
import GuideSubTitle from "../../../../src/components/old/guide/guide-sub-title";
import GuideTab from "../../../../src/components/old/guide/guide-tab";
import GuideTitle from "../../../../src/components/old/guide/guide-title";

import en from "../../../../src/translations/pages/guide/gather-craft-guide/5-0-craft-guide/en";
import ja from "../../../../src/translations/pages/guide/gather-craft-guide/5-0-craft-guide/ja";
import ko from "../../../../src/translations/pages/guide/gather-craft-guide/5-0-craft-guide/ko";
import attributesEn from "../../../../src/translations/special/attributes/en";
import attributesKo from "../../../../src/translations/special/attributes/ko";
import actionsEn from "../../../../src/translations/special/actions/en";
import actionsJa from "../../../../src/translations/special/actions/ja";
import actionsKo from "../../../../src/translations/special/actions/ko";
import macroTime from "../../../../data/old/macro-time";

const FiveZeroCraftGuide = props => {
  const assetsUrl = url => {
    return "https://sylvia-moonfish.github.io/fishbowl-assets/" + url;
  };

  const classes = makeStyles(() => ({
    fill: {
      width: "100%",
      maxWidth: 880
    },
    link: {
      color: "inherit"
    }
  }))();

  const [snackbar, setSnackbar] = React.useState(false);

  const messages = {
    en: en,
    ja: ja,
    ko: ko
  };

  const translate = id => {
    return messages["ko"][id];
  };
  const pageTitle = translate("page-title");
  const pageDescription = translate("page-description");

  const attributes = {
    en: attributesEn,
    ko: attributesKo
  };
  const attributesTranslate = id => {
    return attributes["ko"][id];
  };

  const actions = {
    en: actionsEn,
    ja: actionsJa,
    ko: actionsKo
  };
  const concatActions = (arr, lang, keyword, wait) => {
    return arr
      .map((a, i) => {
        return (
          keyword +
          " " +
          (lang !== "ja" ? '"' : "") +
          actions[lang][a] +
          (lang !== "ja" ? '"' : "") +
          (wait ? " <wait." + macroTime[a] + ">" : "") +
          "\n"
        );
      })
      .join("");
  };
  const seventyMacros = [];
  ["en", "ja", "ko"].forEach(l => {
    seventyMacros[l] = [];

    seventyMacros[l].push({
      label: messages[l]["cross-class-setup"],
      value:
        "/aaction clear\n" +
        concatActions(
          ["muscle-memory", "comfort-zone", "ingenuity-2", "piece-by-piece"],
          l,
          "/aaction",
          false
        ) +
        "/echo " +
        messages[l]["cross-class-setup-finish"] +
        " <se.1>"
    });

    seventyMacros[l].push({
      label: messages[l]["macro-1"],
      value:
        concatActions(
          [
            "muscle-memory",
            "comfort-zone",
            "inner-quiet",
            "manipulation-2",
            "ingenuity-2",
            "steady-hand-2",
            "prudent-touch",
            "prudent-touch",
            "prudent-touch",
            "prudent-touch",
            "piece-by-piece",
            "observe",
            "focused-touch",
            "comfort-zone"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["macro-1-finish"] +
        " <se.1>"
    });

    seventyMacros[l].push({
      label: messages[l]["macro-2"],
      value:
        concatActions(
          [
            "observe",
            "focused-touch",
            "observe",
            "focused-touch",
            "observe",
            "focused-touch",
            "steady-hand",
            "ingenuity-2"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["check-condition"] +
        " <se.1>"
    });

    seventyMacros[l].push({
      label: messages[l]["if-not-excellent"],
      value:
        concatActions(
          [
            "great-strides",
            "byregot's-blessing",
            "careful-synthesis-3",
            "careful-synthesis-3",
            "careful-synthesis-3"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["craft-finish"] +
        " <se.1>"
    });

    seventyMacros[l].push({
      label: messages[l]["if-excellent"],
      value:
        concatActions(
          [
            "byregot's-blessing",
            "careful-synthesis-3",
            "careful-synthesis-3",
            "careful-synthesis-3"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["craft-finish"] +
        " <se.1>"
    });
  });
  const seventyOneMacros = [];
  ["en", "ja", "ko"].forEach(l => {
    seventyOneMacros[l] = [];

    seventyOneMacros[l].push({
      label: messages[l]["cross-class-setup"],
      value:
        "/aaction clear\n" +
        concatActions(
          ["muscle-memory", "waste-not-2", "ingenuity-2", "piece-by-piece"],
          l,
          "/aaction",
          false
        ) +
        "/echo " +
        messages[l]["cross-class-setup-finish"] +
        " <se.1>"
    });

    seventyOneMacros[l].push({
      label: messages[l]["macro-1"],
      value:
        concatActions(
          [
            "muscle-memory",
            "inner-quiet",
            "waste-not-2",
            "ingenuity-2",
            "steady-hand-2",
            "preparatory-touch",
            "preparatory-touch",
            "preparatory-touch",
            "preparatory-touch",
            "piece-by-piece",
            "steady-hand",
            "ingenuity-2"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["check-condition"] +
        " <se.1>"
    });

    seventyOneMacros[l].push({
      label: messages[l]["if-not-excellent"],
      value:
        concatActions(
          [
            "great-strides",
            "byregot's-blessing",
            "name-of-the-elements",
            "brand-of-the-elements",
            "careful-synthesis-3"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["craft-finish"] +
        " <se.1>"
    });

    seventyOneMacros[l].push({
      label: messages[l]["if-excellent"],
      value:
        concatActions(
          [
            "byregot's-blessing",
            "name-of-the-elements",
            "brand-of-the-elements",
            "careful-synthesis-3"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["craft-finish"] +
        " <se.1>"
    });
  });
  const seventySixMacros = [];
  ["en", "ja", "ko"].forEach(l => {
    seventySixMacros[l] = [];

    seventySixMacros[l].push({
      label: messages[l]["cross-class-setup"],
      value:
        "/aaction clear\n" +
        concatActions(
          ["muscle-memory", "ingenuity-2", "careful-synthesis-2"],
          l,
          "/aaction",
          false
        ) +
        "/echo " +
        messages[l]["cross-class-setup-finish"] +
        " <se.1>"
    });

    seventySixMacros[l].push({
      label: messages[l]["macro-1"],
      value:
        concatActions(
          [
            "muscle-memory",
            "inner-quiet",
            "manipulation-2",
            "ingenuity-2",
            "delicate-synthesis",
            "delicate-synthesis",
            "delicate-synthesis",
            "delicate-synthesis",
            "observe",
            "focused-touch",
            "steady-hand-2",
            "ingenuity-2",
            "preparatory-touch",
            "preparatory-touch"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["check-condition"] +
        " <se.1>"
    });

    seventySixMacros[l].push({
      label: messages[l]["if-not-excellent"],
      value:
        concatActions(
          ["great-strides", "byregot's-blessing", "careful-synthesis-2"],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["craft-finish"] +
        " <se.1>"
    });

    seventySixMacros[l].push({
      label: messages[l]["if-excellent"],
      value:
        concatActions(
          ["byregot's-blessing", "careful-synthesis-2"],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["craft-finish"] +
        " <se.1>"
    });
  });
  const eightyMacros = [];
  ["en", "ja", "ko"].forEach(l => {
    eightyMacros[l] = [];

    eightyMacros[l].push({
      label: messages[l]["cross-class-setup"],
      value:
        "/aaction clear\n" +
        concatActions(
          ["muscle-memory", "ingenuity-2", "waste-not", "careful-synthesis-2"],
          l,
          "/aaction",
          false
        ) +
        "/echo " +
        messages[l]["cross-class-setup-finish"] +
        " <se.1>"
    });

    eightyMacros[l].push({
      label: messages[l]["macro-1"],
      value:
        concatActions(
          [
            "muscle-memory",
            "inner-quiet",
            "manipulation-2",
            "ingenuity-2",
            "waste-not",
            "delicate-synthesis",
            "delicate-synthesis",
            "delicate-synthesis",
            "delicate-synthesis",
            "observe",
            "focused-touch",
            "steady-hand-2",
            "ingenuity-2",
            "preparatory-touch"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["macro-1-finish"] +
        " <se.1>"
    });

    eightyMacros[l].push({
      label: messages[l]["macro-2"],
      value:
        concatActions(["preparatory-touch"], l, "/ac", true) +
        "/echo " +
        messages[l]["check-condition"] +
        " <se.1>"
    });

    eightyMacros[l].push({
      label: messages[l]["if-not-excellent"],
      value:
        concatActions(
          [
            "great-strides",
            "byregot's-blessing",
            "careful-synthesis-2",
            "careful-synthesis-2"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["craft-finish"] +
        " <se.1>"
    });

    eightyMacros[l].push({
      label: messages[l]["if-excellent"],
      value:
        concatActions(
          ["byregot's-blessing", "careful-synthesis-2", "careful-synthesis-2"],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["craft-finish"] +
        " <se.1>"
    });
  });

  const eightyTwoStarMacros = [];
  ["en", "ja", "ko"].forEach(l => {
    eightyTwoStarMacros[l] = [];

    eightyTwoStarMacros[l].push({
      label: messages[l]["cross-class-setup"],
      value:
        "/aaction clear\n" +
        concatActions(
          ["comfort-zone", "ingenuity", "innovation", "careful-synthesis-2"],
          l,
          "/aaction",
          false
        ) +
        "/echo " +
        messages[l]["cross-class-setup-finish"] +
        " <se.1>"
    });

    eightyTwoStarMacros[l].push({
      label: messages[l]["macro-1"],
      value:
        concatActions(
          [
            "comfort-zone",
            "inner-quiet",
            "ingenuity",
            "innovation",
            "delicate-synthesis",
            "delicate-synthesis",
            "delicate-synthesis",
            "manipulation-2",
            "ingenuity",
            "innovation",
            "delicate-synthesis",
            "delicate-synthesis",
            "delicate-synthesis",
            "delicate-synthesis"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["macro-1-finish"] +
        " <se.1>"
    });

    eightyTwoStarMacros[l].push({
      label: messages[l]["macro-2"],
      value:
        concatActions(
          [
            "great-strides",
            "steady-hand-2",
            "ingenuity",
            "preparatory-touch",
            "prudent-touch"
          ],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["check-condition"] +
        " <se.1>"
    });

    eightyTwoStarMacros[l].push({
      label: messages[l]["if-not-excellent"],
      value:
        concatActions(
          ["great-strides", "byregot's-blessing", "careful-synthesis-2"],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["craft-finish"] +
        " <se.1>"
    });

    eightyTwoStarMacros[l].push({
      label: messages[l]["if-excellent"],
      value:
        concatActions(
          ["byregot's-blessing", "careful-synthesis-2"],
          l,
          "/ac",
          true
        ) +
        "/echo " +
        messages[l]["craft-finish"] +
        " <se.1>"
    });
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta content={pageDescription} key="description" name="description" />
        <meta content={pageTitle} key="og-title" property="og:title" />
        <meta
          content={pageDescription}
          key="og-description"
          property="og:description"
        />
        <meta content={pageTitle} key="twitter-title" name="twitter:title" />
        <meta
          content={pageDescription}
          key="twitter-description"
          name="twitter:description"
        />
      </Head>
      <Snackbar
        action={[
          <IconButton
            color="primary"
            key="close"
            onClick={() => {
              setSnackbar(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        ]}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={2000}
        message={<span>{translate("message-copied")}</span>}
        onClose={(e, r) => {
          if (r === "timeout") {
            setSnackbar(false);
          }
        }}
        open={snackbar}
      />
      <Container maxWidth="md">
        <Grid container direction="column" spacing={5}>
          <GuideTitle>{translate("title")}</GuideTitle>
          <GuideCenteredItem>
            <img
              className={classes.fill}
              src={assetsUrl("/patch-banners/shb/5.0.png")}
            />
          </GuideCenteredItem>
          <GuideNormalText>{translate("guide-text-1")}</GuideNormalText>
          <Grid item>
            <Divider />
          </Grid>
          <GuideSubTitle>{translate("guide-sub-title-1")}</GuideSubTitle>
          <GuideNormalText>{translate("guide-text-2")}</GuideNormalText>
          <GuideTab
            labels={[translate("recommended-stats")]}
            tabs={[
              <Grid container direction="column" spacing={5}>
                <Grid item>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>{translate("attributes")}</TableCell>
                        <TableCell>{translate("required-number")}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell variant="head">
                          {attributesTranslate("craftsmanship")}
                        </TableCell>
                        <TableCell>1686</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell variant="head">
                          {attributesTranslate("control")}
                        </TableCell>
                        <TableCell>1649</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell variant="head">
                          {attributesTranslate("cp")}
                        </TableCell>
                        <TableCell>493</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
                <Grid item>
                  <GuideNormalText>
                    {translate("guide-text-3")}
                    <a
                      className={classes.link}
                      href="https://ffxiv.ariyala.com/1AI2N"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      https://ffxiv.ariyala.com/1AI2N
                    </a>
                  </GuideNormalText>
                </Grid>
                {/*<GuideGearTable data={[[{
                        gearId: 22884,
                        materiaIds: [1, 2, 3, 4, 5]
                      }, {
                        gearId: -1,
                        materiaIds: []
                      }]]} />*/}
              </Grid>
            ]}
          />
          <Grid item>
            <Divider />
          </Grid>
          <GuideSubTitle>{translate("level")} 70</GuideSubTitle>
          <GuideNormalText>{translate("guide-text-4")}</GuideNormalText>
          <GuideRotationCard
            baseUrl="https://sylvia-moonfish.github.io/fishbowl-assets/icons/craft/"
            data={[
              "muscle-memory",
              "comfort-zone",
              "inner-quiet",
              "manipulation-2",
              "ingenuity-2",
              "steady-hand-2",
              "prudent-touch",
              "prudent-touch",
              "prudent-touch",
              "prudent-touch",
              "piece-by-piece",
              "observe",
              "focused-touch",
              "comfort-zone",
              "observe",
              "focused-touch",
              "observe",
              "focused-touch",
              "observe",
              "focused-touch",
              "steady-hand",
              "ingenuity-2",
              "great-strides",
              "byregots-blessing",
              "careful-synthesis-3",
              "careful-synthesis-3",
              "careful-synthesis-3"
            ]}
          />
          <Grid item>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{translate("recipe-level")}</TableCell>
                  <TableCell>{translate("minimum-stats")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell rowSpan="3">71</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 1638
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 1536</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 479</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <GuideTab
            labels={["KO", "EN", "JA", "TC"]}
            tabs={["ko", "en", "ja"]
              .map((l, i) => {
                return (
                  <GuideMacro
                    key={i}
                    onClick={() => {
                      setSnackbar(true);
                    }}
                    macros={seventyMacros[l]}
                  />
                );
              })
              .concat(
                <GuideMacro
                  onClick={() => {
                    setSnackbar(true);
                  }}
                  macros={[
                    {
                      label: "TeamCraft Import",
                      value:
                        '["muscleMemory","comfortZone","innerQuiet","manipulation2","ingenuity2","steadyHand2","prudentTouch","prudentTouch","prudentTouch","prudentTouch","pieceByPiece","observe","focusedTouch","comfortZone","observe","focusedTouch","observe","focusedTouch","observe","focusedTouch","steadyHand","ingenuity2","greatStrides","byregotsBlessing","carefulSynthesis3","carefulSynthesis3","carefulSynthesis3"]'
                    }
                  ]}
                />
              )}
          />
          <Grid item>
            <Divider />
          </Grid>
          <GuideSubTitle>{translate("level")} 71</GuideSubTitle>
          <GuideNormalText>{translate("guide-text-5")}</GuideNormalText>
          <GuideRotationCard
            baseUrl="https://sylvia-moonfish.github.io/fishbowl-assets/icons/craft/"
            data={[
              "muscle-memory",
              "inner-quiet",
              "waste-not-2",
              "ingenuity-2",
              "steady-hand-2",
              "preparatory-touch",
              "preparatory-touch",
              "preparatory-touch",
              "preparatory-touch",
              "piece-by-piece",
              "steady-hand",
              "ingenuity-2",
              "great-strides",
              "byregots-blessing",
              "name-of-the-elements",
              "brand-of-the-elements",
              "careful-synthesis-3"
            ]}
          />
          <Grid item>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{translate("recipe-level")}</TableCell>
                  <TableCell>{translate("minimum-stats")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell rowSpan="3">72</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 1387
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 1356</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 476</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan="3">73</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 1445
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 1422</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 476</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan="3">74</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 1479
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 1461</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 476</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan="3">75</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 1514
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 1500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 476</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan="3">76</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 1549
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 1539</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 476</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan="3">77</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 1583
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 1578</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 476</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <GuideTab
            labels={["KO", "EN", "JA", "TC"]}
            tabs={["ko", "en", "ja"]
              .map((l, i) => {
                return (
                  <GuideMacro
                    key={i}
                    onClick={() => {
                      setSnackbar(true);
                    }}
                    macros={seventyOneMacros[l]}
                  />
                );
              })
              .concat(
                <GuideMacro
                  onClick={() => {
                    setSnackbar(true);
                  }}
                  macros={[
                    {
                      label: "TeamCraft Import",
                      value:
                        '["muscleMemory","innerQuiet","wasteNot2","ingenuity2","steadyHand2","preparatoryTouch","preparatoryTouch","preparatoryTouch","preparatoryTouch","pieceByPiece","steadyHand","ingenuity2","greatStrides","byregotsBlessing","nameOfEarth","brandOfEarth","carefulSynthesis3"]'
                    }
                  ]}
                />
              )}
          />
          <Grid item>
            <Divider />
          </Grid>
          <GuideSubTitle>{translate("level")} 76</GuideSubTitle>
          <GuideNormalText>{translate("guide-text-6")}</GuideNormalText>
          <GuideRotationCard
            baseUrl="https://sylvia-moonfish.github.io/fishbowl-assets/icons/craft/"
            data={[
              "muscle-memory",
              "inner-quiet",
              "manipulation-2",
              "ingenuity-2",
              "delicate-synthesis",
              "delicate-synthesis",
              "delicate-synthesis",
              "delicate-synthesis",
              "observe",
              "focused-touch",
              "steady-hand-2",
              "ingenuity-2",
              "preparatory-touch",
              "preparatory-touch",
              "great-strides",
              "byregots-blessing",
              "careful-synthesis-2"
            ]}
          />
          <Grid item>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{translate("recipe-level")}</TableCell>
                  <TableCell>{translate("minimum-stats")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell rowSpan="3">78</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 1614
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 1375</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 490</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan="3">79</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 1652
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 1422</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 490</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <GuideTab
            labels={["KO", "EN", "JA", "TC"]}
            tabs={["ko", "en", "ja"]
              .map((l, i) => {
                return (
                  <GuideMacro
                    key={i}
                    onClick={() => {
                      setSnackbar(true);
                    }}
                    macros={seventySixMacros[l]}
                  />
                );
              })
              .concat(
                <GuideMacro
                  onClick={() => {
                    setSnackbar(true);
                  }}
                  macros={[
                    {
                      label: "TeamCraft Import",
                      value:
                        '["muscleMemory","innerQuiet","manipulation2","ingenuity2","delicateSynthesis","delicateSynthesis","delicateSynthesis","delicateSynthesis","observe","focusedTouch","steadyHand2","ingenuity2","preparatoryTouch","preparatoryTouch","greatStrides","byregotsBlessing","carefulSynthesis2"]'
                    }
                  ]}
                />
              )}
          />
          <Grid item>
            <Divider />
          </Grid>
          <GuideSubTitle>{translate("level")} 80</GuideSubTitle>
          <GuideNormalText>{translate("guide-text-7")}</GuideNormalText>
          <GuideRotationCard
            baseUrl="https://sylvia-moonfish.github.io/fishbowl-assets/icons/craft/"
            data={[
              "muscle-memory",
              "inner-quiet",
              "manipulation-2",
              "ingenuity-2",
              "waste-not",
              "delicate-synthesis",
              "delicate-synthesis",
              "delicate-synthesis",
              "delicate-synthesis",
              "observe",
              "focused-touch",
              "steady-hand-2",
              "ingenuity-2",
              "preparatory-touch",
              "preparatory-touch",
              "great-strides",
              "byregots-blessing",
              "careful-synthesis-2",
              "careful-synthesis-2"
            ]}
          />
          <GuideNormalText>
            <u>{translate("guide-text-8")}</u>
          </GuideNormalText>
          <Grid item>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{translate("recipe-level")}</TableCell>
                  <TableCell>{translate("minimum-stats")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell rowSpan="3">80</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 1636
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 1560</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 546</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <GuideTab
            labels={["KO", "EN", "JA", "TC"]}
            tabs={["ko", "en", "ja"]
              .map((l, i) => {
                return (
                  <GuideMacro
                    key={i}
                    onClick={() => {
                      setSnackbar(true);
                    }}
                    macros={eightyMacros[l]}
                  />
                );
              })
              .concat(
                <GuideMacro
                  onClick={() => {
                    setSnackbar(true);
                  }}
                  macros={[
                    {
                      label: "TeamCraft Import",
                      value:
                        '["muscleMemory","innerQuiet","manipulation2","ingenuity2","wasteNot","delicateSynthesis","delicateSynthesis","delicateSynthesis","delicateSynthesis","observe","focusedTouch","steadyHand2","ingenuity2","preparatoryTouch","preparatoryTouch","greatStrides","byregotsBlessing","carefulSynthesis2","carefulSynthesis2"]'
                    }
                  ]}
                />
              )}
          />
          <Grid item>
            <Divider />
          </Grid>
          <GuideSubTitle>{translate("guide-text-9")}</GuideSubTitle>
          <GuideNormalText>{translate("guide-text-10")}</GuideNormalText>
          <GuideTab
            labels={[translate("recommended-melding")]}
            tabs={[
              <Grid container direction="column" spacing={5}>
                <Grid item>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>{translate("attributes")}</TableCell>
                        <TableCell>{translate("stats")}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell variant="head">
                          {attributesTranslate("craftsmanship")}
                        </TableCell>
                        <TableCell>2177</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell variant="head">
                          {attributesTranslate("control")}
                        </TableCell>
                        <TableCell>2020</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell variant="head">
                          {attributesTranslate("cp")}
                        </TableCell>
                        <TableCell>541</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
                <Grid item>
                  <GuideNormalText>
                    {translate("guide-text-3")}
                    <a
                      className={classes.link}
                      href="https://ffxiv.ariyala.com/19TTD"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      https://ffxiv.ariyala.com/19TTD
                    </a>
                  </GuideNormalText>
                </Grid>
                <GuideNormalText>{translate("guide-text-12")}</GuideNormalText>
              </Grid>
            ]}
          />
          <Grid item>
            <Divider />
          </Grid>
          <GuideSubTitle>80★★</GuideSubTitle>
          <GuideNormalText>
            위 80 금단을 마치고 나서 사용할 수 있는 2성 제작법용 매크로입니다.
          </GuideNormalText>
          <GuideRotationCard
            baseUrl="https://sylvia-moonfish.github.io/fishbowl-assets/icons/craft/"
            data={[
              "comfort-zone",
              "inner-quiet",
              "ingenuity",
              "innovation",
              "delicate-synthesis",
              "delicate-synthesis",
              "delicate-synthesis",
              "manipulation-2",
              "ingenuity",
              "innovation",
              "delicate-synthesis",
              "delicate-synthesis",
              "delicate-synthesis",
              "delicate-synthesis",
              "great-strides",
              "steady-hand-2",
              "ingenuity",
              "preparatory-touch",
              "prudent-touch",
              "great-strides",
              "byregots-blessing",
              "careful-synthesis-2"
            ]}
          />
          <GuideNormalText>
            <u>
              해당 제작 로테이션을 사용하려면 HQ "해물 피수프" 를 드셔야 합니다.
              HQ "해물 피수프" 는 위 레벨 80 제작 매크로를 사용해 제작할 수
              있습니다.
            </u>
          </GuideNormalText>
          <Grid item>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{translate("recipe-level")}</TableCell>
                  <TableCell>{translate("minimum-stats")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell rowSpan="3">80★★</TableCell>
                  <TableCell>
                    {attributesTranslate("craftsmanship")}: 2175
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("control")}: 2018</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{attributesTranslate("cp")}: 536</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <GuideTab
            labels={["KO", "EN", "JA", "TC"]}
            tabs={["ko", "en", "ja"]
              .map((l, i) => {
                return (
                  <GuideMacro
                    key={i}
                    onClick={() => {
                      setSnackbar(true);
                    }}
                    macros={eightyTwoStarMacros[l]}
                  />
                );
              })
              .concat(
                <GuideMacro
                  onClick={() => {
                    setSnackbar(true);
                  }}
                  macros={[
                    {
                      label: "TeamCraft Import",
                      value:
                        '["comfortZone","innerQuiet","ingenuity","innovation","delicateSynthesis","delicateSynthesis","delicateSynthesis","manipulation2","ingenuity","innovation","delicateSynthesis","delicateSynthesis","delicateSynthesis","delicateSynthesis","greatStrides","steadyHand2","ingenuity","preparatoryTouch","prudentTouch","greatStrides","byregotsBlessing","carefulSynthesis2"]'
                    }
                  ]}
                />
              )}
          />
          <Grid item>
            <Divider />
          </Grid>
          <GuideSubTitle>이 다음엔 뭘 하나요?</GuideSubTitle>
          <GuideNormalText>
            여유가 생기면 5.1을 대비해 장신구 및 벨트를 미리 금단해놓는 것이
            좋습니다.
          </GuideNormalText>
          <GuideNormalText>
            금단 예제:{" "}
            <a
              className={classes.link}
              href="https://ffxiv.ariyala.com/1B486"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://ffxiv.ariyala.com/1B486
            </a>
          </GuideNormalText>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default FiveZeroCraftGuide;
