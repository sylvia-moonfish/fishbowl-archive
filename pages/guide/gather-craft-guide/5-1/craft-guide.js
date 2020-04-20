import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import React from "react";

import Actions from "../../../../data/5-1-craft-actions";
import Items from "../../../../data/5-1-craft-items";
import Materials from "../../../../data/5-1-craft-materials";
import SiteInfo from "../../../../data/site-info";
import CraftActionDisplay from "../../../../src/components/guide/craft-action-display";
import CraftGearDisplay from "../../../../src/components/guide/craft-gear-display";
import CraftGearStats from "../../../../src/components/guide/craft-gear-stats";
import CraftMaterialDisplay from "../../../../src/components/guide/craft-material-display";
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
                    본 가이드는 제작직 80레벨을 갓 달성하신 모험가분들의 스펙
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
                  <Typography variant="h6">80레벨 - 첫 장비</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    NPC에게서 구입할 수 있는 NQ 장비들로 최소 스펙을
                    맞추어줍니다.
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        아이템 레벨 430제 주도구와 부도구: 크리스타리움(X:9.3
                        Y:14.4)에 위치한 NPC 베르나르스에게 구입.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        아이템 레벨 430제 방어구와 벨트: 크리스타리움(X:8.5
                        Y:13.4)에 위치한 NPC 도다드에게 구입.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        아이템 레벨 290제 악세서리: 쿠가네(X:11.8 Y:12.2)에
                        위치한 NPC 우라케에게 구입.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        명인의 마테리다: 검은장막 숲 북부삼림(X:24.9 Y:22.7)에
                        위치한 NPC 이크살족 만물상에게 이크살족 야만퀘 보상으로
                        얻는 화폐로 교환 가능.
                      </Typography>
                    </li>
                  </ul>
                </Grid>
                <CraftGearDisplay gearSet={gearSets[0]} Items={Items} />
                <Grid item>
                  <Typography variant="body2">
                    위 장비를 전부 갖추었을 시 달성 가능한 스펙은 다음과
                    같습니다.
                  </Typography>
                </Grid>
                <CraftGearStats gearSet={gearSets[0]} Items={Items} />
                <Grid item>
                  <Typography variant="body2">
                    8개의 제작직 전부 위 스펙을 갖추고 난 후 다음 단계로
                    넘어가주세요.
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    아이템 레벨 430제 HQ 악세서리를 제작할 차례입니다. 제작을
                    위해 모아야 하는 재료들은 다음과 같습니다.
                  </Typography>
                </Grid>
                <CraftMaterialDisplay
                  craftMaterials={[
                    {
                      label: "크리스탈",
                      materials: [
                        {
                          id: "wind-crystal",
                          amount: 91,
                        },
                        {
                          id: "fire-crystal",
                          amount: 35,
                        },
                        {
                          id: "lightning-crystal",
                          amount: 41,
                        },
                      ],
                    },
                    {
                      label: "채집",
                      materials: [
                        {
                          id: "dwarven-cotton-boll",
                          amount: 20,
                        },
                        {
                          id: "dimythrite-sand",
                          amount: 32,
                        },
                        {
                          id: "iridescent-cocoon",
                          amount: 8,
                        },
                        {
                          id: "effervescent-water",
                          amount: 2,
                        },
                        {
                          id: "mythrite-sand",
                          amount: 8,
                        },
                      ],
                    },
                  ]}
                  Materials={Materials}
                />
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    다음으로 악세서리 제작에 사용될 초품 재료들을 제작해야
                    합니다. 아래 매크로들을 사용해 지정된 물품들을 제작해주세요.
                  </Typography>
                </Grid>
                <CraftMaterialDisplay
                  craftMaterials={[
                    {
                      label: "제작할 물품",
                      materials: [
                        {
                          id: "dwarven-cotton-thread",
                          amount: 15,
                        },
                      ],
                    },
                  ]}
                  Materials={Materials}
                />
                <CraftActionDisplay
                  craftActions={[
                    "careful-synthesis",
                    "careful-synthesis",
                    "careful-synthesis",
                  ]}
                  Actions={Actions}
                />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default CraftGuide;
