import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import React from "react";

import Items from "../../../../data/5-1-craft-items";
import SiteInfo from "../../../../data/site-info";
import CraftGearDisplayTable from "../../../../src/components/guide/craft-gear-display-table";
import CraftGearStatsTable from "../../../../src/components/guide/craft-gear-stats-table";
import PageComponent from "../../../../src/components/page-component";

const pageData = {
  title: "5.1 제작 가이드",
  description: "파이널 판타지 14 패치 5.1 제작 가이드.",
};

const gearSets = [
  {
    gears: [
      {
        itemId: "dwarvenMythrilSaw",
        materiaIds: [],
      },
      {
        itemId: "dwarvenCottonBeret",
        materiaIds: ["cp3", "cp3"],
      },
      {
        itemId: "dwarvenMythrilClawHammer",
        materiaIds: [],
      },
      {
        itemId: "dwarvenCottonJacket",
        materiaIds: [],
      },
      {
        itemId: "zelkovaEarrings",
        materiaIds: [],
      },
      {
        itemId: "swallowskinFingerlessGloves",
        materiaIds: [],
      },
      {
        itemId: "zelkovaNecklace",
        materiaIds: [],
      },
      {
        itemId: "swallowskinToolBelt",
        materiaIds: [],
      },
      {
        itemId: "zelkovaBracelets",
        materiaIds: [],
      },
      {
        itemId: "dwarvenCottonTrousers",
        materiaIds: [],
      },
      {
        itemId: "zelkovaRing",
        materiaIds: [],
      },
      {
        itemId: "swallowskinShoes",
        materiaIds: [],
      },
      {
        itemId: "zelkovaRing",
        materiaIds: [],
      },
    ],
  },
];

class CraftGuide extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      snackbar: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.generateHead(
          pageData.title + " | " + SiteInfo.siteTitle,
          pageData.description
        )}
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <Container maxWidth="md">
              <Grid container direction="column" spacing={5}>
                <Grid item>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    justify="center"
                    spacing={5}
                  >
                    <Grid item>
                      <Typography variant="h6">{pageData.title}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    justify="center"
                    spacing={5}
                  >
                    <Grid item>
                      <img
                        src={SiteInfo.assetsUrl + "/patch-banners/shb/5.1.png"}
                        style={{
                          maxWidth: 880,
                          width: "100%",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    패치 5.1에서는 채집/제작 시스템에 대대적인 개편이 가해졌으며
                    신규 2.5성 아이템 레벨 460 제작/채집 방어구와 주/부도구가
                    추가되었습니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    또한 이후 패치 5.11에서는 이슈가르드 재건 컨텐츠와 함께
                    새로운 제작법들이 추가되었습니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    본 가이드는 제작직 80 레벨을 갓 달성하신 모험가분들의 스펙
                    업을 위한 단계별 장비/금단 및 매크로로 구성되어 있습니다.
                    패치 5.1 이전에 이미 제작직 80 레벨을 달성하고 일정 수준
                    이상의 스펙 업을 마치신 모험가분들께서는 각 단계별로 기재된
                    필요 스펙을 체크하시고 자신의 스펙에 알맞는 단계에서부터
                    시작하시면 됩니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    문의사항 및 피드백은 트위터(
                    <a
                      href="https://twitter.com/sylvia_moonfish"
                      target="_blank"
                    >
                      https://twitter.com/sylvia_moonfish
                    </a>
                    ) DM 혹은 이메일(sylvia.moonfish@gmail.com)로 부탁드립니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Typography variant="h6">80 레벨</Typography>
                </Grid>
                <CraftGearStatsTable gearSet={gearSets[0]} Items={Items} />
                <CraftGearDisplayTable gearSet={gearSets[0]} Items={Items} />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default CraftGuide;
