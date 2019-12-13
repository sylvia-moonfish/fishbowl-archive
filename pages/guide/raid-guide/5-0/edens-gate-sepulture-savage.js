import Container from "@material-ui/core/Container";
import {
  blue,
  blueGrey,
  brown,
  green,
  purple,
  red,
  yellow
} from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import LaunchIcon from "@material-ui/icons/Launch";

import React from "react";

import ExpansionTitles from "../../../../data/expansion-titles";
import SiteInfo from "../../../../data/site-info";
import CenteredBlock from "../../../../src/components/blocks/centered-block";
import ExpansionPanelsBlock from "../../../../src/components/blocks/expansion-panels-block";
import GimmicksBlock from "../../../../src/components/blocks/gimmicks-block";
import ImageBlock from "../../../../src/components/blocks/image-block";
import InlineChip from "../../../../src/components/blocks/inline-chip";
import LoopingVideoBlock from "../../../../src/components/blocks/looping-video-block";
import TimelineBlock from "../../../../src/components/blocks/timeline-block";
import TimelineDialogBlock from "../../../../src/components/blocks/timeline-dialog-block";
import YoutubeFrameBlock from "../../../../src/components/blocks/youtube-frame-block";
import PageComponent from "../../../../src/components/page-component";

const pageData = {
  title: "희망의 동산 에덴 영웅: 각성편 4",
  description:
    "파이널 판타지 14 레이드 가이드 - 희망의 동산 에덴 영웅: 각성편 4",
  videoBaseUrl:
    "https://sylvia-moonfish.github.io/fishbowl-video-1/guide/raid-guide/shb/edens-gate-sepulture-savage"
};

class EdensGateSepultureSavage extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedDialog: false,
      dialogHistory: []
    };
  }

  render() {
    const openDialog = (newDialogId, currentDialogId) => {
      if (currentDialogId) {
        this.state.dialogHistory.push(currentDialogId);
      }

      this.state.openedDialog = newDialogId;
      this.setState(this.state);
    };

    const closeDialog = () => {
      if (this.state.dialogHistory.length > 0) {
        this.state.openedDialog = this.state.dialogHistory.pop();
      } else {
        this.state.openedDialog = false;
      }

      this.setState(this.state);
    };

    const colorHue = this.props.currentTheme === "light" ? 800 : 200;

    const colors = {
      blue: blue[colorHue],
      blueGrey: blueGrey[colorHue],
      brown: brown[colorHue],
      green: green[colorHue],
      purple: purple[colorHue],
      red: red[colorHue],
      yellow: yellow[colorHue]
    };

    const colorTypes = {
      tank: colors.blue,
      heal: colors.green,
      dps: colors.red,
      anyone: colors.purple,
      everyone: colors.yellow,
      noOne: colors.brown,
      instruction: colors.blueGrey,
      warning: colors.red
    };

    const gimmickData = {
      bombBoulders: {
        name: "Bomb Boulders",
        description: "3줄 시한폭탄",
        color: colorTypes.everyone
      },
      crumblingDown: {
        name: "Crumbling Down",
        description: "거리 비례 피해 돌 소환",
        color: colorTypes.anyone
      },
      crumblingDownBombBouldersSeismicWave: {
        ids: ["crumblingDown", "bombBoulders", "seismicWave"]
      },
      earthenFist: {
        name: "Earthen Fist",
        description: "2연속 주먹질",
        color: colorTypes.everyone
      },
      earthenFistWeightOfTheLand: {
        ids: ["earthenFist", "weightOfTheLand"]
      },
      earthenFury: {
        name: "Earthen Fury",
        description: "거대 타이탄 광역기",
        color: colorTypes.heal
      },
      earthenGauntlets: {
        name: "Earthen Gauntlets",
        description: "산사태 형태로 변신",
        color: colorTypes.noOne
      },
      earthenWheels: {
        name: "Earthen Wheels",
        description: "자동차 형태로 변신",
        color: colorTypes.noOne
      },
      evilEarth: {
        name: "Evil Earth",
        description: "연속 폭발 장판",
        color: colorTypes.everyone
      },
      evilEarth1: {
        ids: ["evilEarth"]
      },
      faultLine: {
        name: "Fault Line",
        description: "직선 주행",
        color: colorTypes.everyone
      },
      faultLineMagnitude50: {
        ids: ["faultLine", "magnitude50"]
      },
      forceOfTheLand: {
        name: "Force of the Land",
        description: "오렌지색 네모 징",
        color: colorTypes.anyone
      },
      geocrush: {
        name: "Geocrush",
        description: "미니 타이탄 점프 + 넉백",
        color: colorTypes.noOne
      },
      landslide: {
        name: "Landslide",
        description: "T자형 공격 + 지뢰",
        color: colorTypes.everyone
      },
      magnitude50: {
        name: "Magnitude 5.0",
        description: "도넛 범위 공격",
        color: colorTypes.everyone
      },
      massiveLandslide: {
        name: "Massive Landslide",
        description: "산사태 + 세모네모 징",
        color: colorTypes.everyone
      },
      orogenesis: {
        name: "Orogenesis (미니 타이탄)",
        description: "미니 타이탄 거대화",
        color: colorTypes.noOne
      },
      pulseOfTheLand: {
        name: "Pulse of the Land",
        description: "노란색 세모 징",
        color: colorTypes.anyone
      },
      seismicWave: {
        name: "Seismic Wave",
        description: "큰 돌 뒤에 숨기",
        color: colorTypes.everyone
      },
      stonecrusher: {
        name: "Stonecrusher",
        description: "3연속 탱크 버스터",
        color: colorTypes.tank
      },
      voiceOfTheLand: {
        name: "Voice of the Land",
        description: "미니 타이탄 광역기",
        color: colorTypes.heal
      },
      weightOfTheLand: {
        name: "Weight of the Land",
        description: "랜덤 장판 8개",
        color: colorTypes.noOne
      },
      weightOfTheLandPulseOfTheLand: {
        ids: ["weightOfTheLand", "pulseOfTheLand"]
      }
    };

    const dummyGimmickData = {
      explosion: {
        name: "Explosion",
        description: "시한폭탄",
        color: colorTypes.noOne
      }
    };

    const gimmicks = Object.keys(gimmickData).filter(gimmick => {
      return !gimmickData[gimmick].ids;
    });

    const timelines = [
      [
        {
          id: "stonecrusher",
          timestamp: "0:11"
        },
        {
          id: "weightOfTheLandPulseOfTheLand",
          timestamp: "0:26"
        },
        {
          id: "evilEarth1",
          timestamp: "0:36"
        },
        {
          id: "forceOfTheLand",
          timestamp: "0:48"
        },
        {
          id: "voiceOfTheLand",
          timestamp: "0:51"
        },
        {
          id: "geocrush",
          timestamp: "1:01"
        },
        {
          instruction:
            "이후 무작위로 " +
            gimmickData.earthenGauntlets.name +
            " 혹은 " +
            gimmickData.earthenWheels.name +
            " 페이즈가 이어집니다.",
          color: colorTypes.instruction
        },
        {
          instruction:
            "여기서는 " +
            gimmickData.earthenGauntlets.name +
            " " +
            this.generatePostposition(gimmickData.earthenGauntlets.name, "가") +
            " 사용되었다고 가정하고 진행하겠습니다.",
          color: colorTypes.instruction
        },
        {
          id: "earthenGauntlets",
          timestamp: "1:10"
        },
        {
          id: "massiveLandslide",
          timestamp: "1:17"
        },
        {
          id: "voiceOfTheLand",
          timestamp: "1:27"
        },
        {
          id: "landslide",
          timestamp: "1:42"
        },
        {
          instruction:
            gimmickData.earthenGauntlets.name + " 페이즈가 끝났습니다.",
          color: colorTypes.instruction
        },
        {
          instruction:
            "미니 타이탄이 다시 기본 형태로 변신한 후 아래 기믹을 이어갑니다.",
          color: colorTypes.instruction
        },
        {
          id: "crumblingDownBombBouldersSeismicWave",
          timestamp: "2:08"
        },
        {
          id: "voiceOfTheLand",
          timestamp: "2:42"
        },
        {
          id: "stonecrusher",
          timestamp: "2:50"
        },
        {
          id: "geocrush",
          timestamp: "3:13"
        },
        {
          instruction:
            "이전에 " +
            gimmickData.earthenGauntlets.name +
            " " +
            this.generatePostposition(gimmickData.earthenGauntlets.name, "를") +
            " 사용했다면 " +
            gimmickData.earthenWheels.name +
            " " +
            this.generatePostposition(gimmickData.earthenWheels.name, "를") +
            ", " +
            gimmickData.earthenWheels.name +
            " " +
            this.generatePostposition(gimmickData.earthenWheels.name, "를") +
            " 사용했다면 " +
            gimmickData.earthenGauntlets.name +
            " " +
            this.generatePostposition(gimmickData.earthenGauntlets.name, "를") +
            " 사용합니다.",
          color: colorTypes.instruction
        },
        {
          instruction:
            "본 타임라인은 위에 " +
            gimmickData.earthenGauntlets.name +
            " 를 사용했다고 가정했으므로 " +
            gimmickData.earthenWheels.name +
            " " +
            this.generatePostposition(gimmickData.earthenWheels.name, "가") +
            " 사용됩니다.",
          color: colorTypes.instruction
        },
        {
          id: "earthenWheels",
          timestamp: "3:21"
        },
        {
          id: "faultLineMagnitude50",
          timestamp: "3:26"
        },
        {
          instruction: gimmickData.earthenWheels.name + " 페이즈가 끝났습니다.",
          color: colorTypes.instruction
        },
        {
          instruction:
            "이 시점에 미니 타이탄의 체력이 적어도 71% 이하인 것이 좋습니다.",
          color: colorTypes.warning
        },
        {
          instruction: "2 페이즈 - 거대 타이탄으로 이어집니다.",
          color: colorTypes.instruction
        }
      ],
      [
        {
          instruction: "페이즈 전환 중에는 타겟팅/공격이 불가능합니다.",
          color: colorTypes.instruction
        },
        {
          id: "orogenesis",
          timestamp: "3:50"
        },
        {
          instruction:
            "페이즈 전환이 끝나면 거대 타이탄이 맵 북쪽에 고정되며 후측 판정이 사라집니다.",
          color: colorTypes.instruction
        },
        {
          id: "earthenFury",
          timestamp: "4:17"
        },
        {
          id: "earthenFistWeightOfTheLand",
          timestamp: "4:31"
        }
      ]
    ];

    const dialogs = [
      {
        id: "bombBoulders",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/bomb-boulders/1.png"}
                width={300}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 작은 시한폭탄 돌덩어리들을 순차적으로 소환합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                시한폭탄들은 소환된 순서대로 폭발하며 피격당한 대상에게 큰 마법
                피해와 함께 "주는 피해 감소", "받는 피해 증가" 등의 디버프를
                거므로 꼭 피해주어야 합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                세로줄 총 3줄이 소환되며 항상 가운데줄이 가장 먼저 소환됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                즉 등장 가능한 시한폭탄의 조합은 다음과 같습니다. (각 아이콘의
                숫자가 등장 순서를 나타냅니다.)
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/bomb-boulders/2.png"}
                width={300}
              />
              <ImageBlock
                src={pageData.videoBaseUrl + "/bomb-boulders/3.png"}
                width={300}
              />
            </CenteredBlock>
          </React.Fragment>
        )
      },
      {
        id: "crumblingDown",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/crumbling-down/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="crumblingDown"
                  gimmickData={gimmickData}
                  id="crumblingDown"
                  openDialog={openDialog}
                />{" "}
                시전을 시작하는 순간 대상자 두 명의 머리 위에 빨간 징이
                표시됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                대상자는 총 2명으로 탱힐 중 1명과 딜러 중 1명이 무작위로
                선택됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/crumbling-down/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나는 순간 빨간 징 대상자 두 명의 발 밑에 거리 비례 피해
                징이 생성됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                동시에 첫 번째 대상자가 아니었던 나머지 6명의 파티원 중 무작위로
                탱힐 중 1명, 딜러 중 1명의 머리 위에 두 번째 빨간 징이
                표시됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이 빨간 징 역시 일정 시간이 지나면 사라지며 징 대상자의 발 밑에
                거리 비례 피해 징을 생성합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 거리 비례 피해 징의 위치에 커다란 돌덩어리가 낙하하며
                파티원 모두에게 강력한 거리 비례 마법 피해를 입힙니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "crumblingDownBombBouldersSeismicWave",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                이후 나올 기믹 처리를 위해 미니 타이탄을 미리 맵 중앙에 주차하고
                머리를 북쪽으로 돌려주면 좋습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/1.png"
                }
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="crumblingDown"
                  openDialog={openDialog}
                />{" "}
                처리를 위해 바닥징을 사용할 것입니다. 바닥징은 위와 같이
                찍혀있다고 가정합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="crumblingDown"
                  openDialog={openDialog}
                />
                ,{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="bombBoulders"
                  openDialog={openDialog}
                />
                ,{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="seismicWave"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.seismicWave.name, "가")}{" "}
                빠르게 순차적으로 등장하게 됩니다. 일단 등장하는 순서에 따라
                차근차근 하나씩 자세히 살펴본 후, 전체 타이밍을 살펴보도록
                하겠습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/2.png"
                }
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="crumblingDown"
                  openDialog={openDialog}
                />{" "}
                시전을 시작합니다. 빨간 징이 찍힌 탱힐은 A징 위에, 빨간 징이
                찍힌 딜러는 C징 위에 돌덩어리를 떨어트려줍니다. 빨간 징이 찍히지
                않은 플레이어들은 B 징과 D 징의 사이에 모여 A, C 징으로부터
                최대한 멀리 자리잡아 줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                빨간 징 대상자들은 바위를 깔고 나서 재빨리 본진에 합류합니다.{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="crumblingDown"
                  openDialog={openDialog}
                />{" "}
                시전이 끝나는 순간 돌덩어리의 위치는 고정되므로 시전 바가 끝나는
                것을 확인하자마자 곧바로 본진에 합류하면 됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/3.png"
                }
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                거리 비례 징이 나타남과 동시에 두 번째{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="crumblingDown"
                  openDialog={openDialog}
                />{" "}
                징이 표시됩니다. 자신이 징이 찍혔는지 재빨리 확인한 후 징이 찍힌
                탱힐은 B징 위에, 딜러는 D징 위에 돌덩어리를 떨어트려줍니다.
                나머지 파티원들은 그대로 B 징과 D 징의 사이에서 대기합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                빨간 징 대상자들은 빨간 징이 사라지는 순간 위치가 고정되므로
                징이 사라지자마자 바로 본진에 합류합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/4.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                A 징과 C 징에 돌덩어리가 떨어지며 파티원 모두에게 마법 피해를
                입힙니다. 돌덩어리가 떨어진 것을 확인하자마자 모두 미니 타이탄을
                가로질러 A 징과 C 징의 사이로 이동합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/5.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="bombBoulders"
                  openDialog={openDialog}
                />{" "}
                시전을 완료함과 동시에 A 징과 C 징의 돌덩어리 중 하나가 빛나기
                시작합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                빛나지 않는 돌덩어리 쪽으로 미니 타이탄을 데려갑니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                동시에 B 징과 D 징에서 거리 비례 징이 터지므로 힐업에
                유의해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/6.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄을 데려가면서 소환되는 시한폭탄의 순서를
                눈여겨봅시다. 언제나 가운뎃줄이 가장 먼저 소환됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                만약 A, C 징 쪽 시한폭탄이 2번째로 소환되었다면 회피하는 것이 꽤
                까다로울 수 있으므로 마음의 준비를 하세요.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/seismic-wave/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                돌덩어리 뒤에 숨어{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="seismicWave"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.seismicWave.name, "를")}{" "}
                피해줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이제 시한폭탄을 회피할 차례입니다. A, C 징 줄 시한폭탄이 가장
                마지막으로 소환되었다면 피하기가 수월하지만, A, C 징 줄
                시한폭탄이 2 번째로 소환되었다면 회피하는 타이밍이 꽤 빡빡한
                편입니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/7.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                1.{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="seismicWave"
                  openDialog={openDialog}
                />{" "}
                시전이 끝나자마자 A 징에서 살짝 남쪽, 시한폭탄 2개의 정가운데
                부근으로 이동.
              </Typography>
              <Typography variant="body2">
                2. 적개심 목록에서 첫 번째 시한폭탄의{" "}
                <InlineChip
                  currentId="explosion"
                  gimmickData={dummyGimmickData}
                  id="explosion"
                  openDialog={openDialog}
                />{" "}
                시전 바를 확인.
              </Typography>
              <Typography variant="body2">
                3. 첫 번째 시한폭탄의{" "}
                <InlineChip
                  currentId="explosion"
                  gimmickData={dummyGimmickData}
                  id="explosion"
                  openDialog={openDialog}
                />{" "}
                시전이 완료되자마자 동쪽으로 이동.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 폭발 모션을 보고 이동하면 늦습니다. 꼭 적개심 목록을 통해 시전
                바를 확인하고 시전이 완료되자마자 움직이는 습관을 들입시다.
              </Typography>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 너무 피하기 어렵다면 "전력 질주" 등을 사용하는 것도 좋은
                방법입니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">무편집 예시 영상: </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/crumbling-down-bomb-boulders-seismic-wave/8.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 기믹을 위해 미니 타이탄을 중앙에 주차해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                또한 곧{" "}
                <InlineChip
                  currentId="crumblingDownBombBouldersSeismicWave"
                  gimmickData={gimmickData}
                  id="stonecrusher"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.stonecrusher.name, "가")}{" "}
                이어지므로 탱교대를 해줍시다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "earthenFist",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-fist/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                거대 타이탄이 왼팔 혹은 오른팔에 기를 모으는 것을 2번 반복한 후,
                기를 모은 순서대로 팔을 내질러 맵의 절반을 덮는 공격을 하고 모든
                피격자를 크게 밀쳐내 낙사시킵니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                어느 팔에 어느 순서대로 기를 모을 지는 무작위로 정해지므로 거대
                타이탄의 모션을 보고 공격 위치를 판단해 회피해야 합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                어느 쪽 팔에 빛이 들어오는지를 잘 관찰한 후 순서를 기억해
                피해주세요!
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-fist/2.mp4"}
              />
            </CenteredBlock>
          </React.Fragment>
        )
      },
      {
        id: "earthenFury",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-fury/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                거대 타이탄이 사용하는 단발 광역기로 모든 파티원에게 약 8만
                정도의 강력한 마법 피해를 줍니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "earthenGauntlets",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-gauntlets/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 형태를 바꿉니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                시전 바나 기술 명칭이 보여지지 않으므로 타이탄의 모션을 보고
                판단해야 합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="earthenGauntlets"
                  gimmickData={gimmickData}
                  id="earthenGauntlets"
                  openDialog={openDialog}
                />{" "}
                의 경우 등 뒤의 바퀴가 양 손으로 가서 붙는 모션을 통해 확인할 수
                있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "earthenWheels",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/earthen-wheels/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 형태를 바꿉니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                시전 바나 기술 명칭이 보여지지 않으므로 타이탄의 모션을 보고
                판단해야 합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="earthenWheels"
                  gimmickData={gimmickData}
                  id="earthenWheels"
                  openDialog={openDialog}
                />{" "}
                의 경우 등 뒤의 바퀴가 양 발로 가서 붙는 모션을 통해 확인할 수
                있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "evilEarth",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/evil-earth/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이{" "}
                <InlineChip
                  currentId="evilEarth"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                시전을 시작하는 순간 바닥에 특수 장판이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/evil-earth/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나면 장판이 표시되었던 곳부터 폭발한 후, 위 영상처럼
                바깥쪽으로 한 칸씩 넓어져가면서 순차적으로 폭발합니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "evilEarth1",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                2개의{" "}
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                장판이 등장합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/evil-earth-1/1.mp4"}
              />
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/evil-earth-1/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                장판은 항상 2개가 대각선으로 마주 보는 위치에서 나타나므로, 위
                2가지의 조합 + 위 조합을 좌우반전한 버전 총 4가지 조합 중 하나가
                나오게 됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                위 영상에서 하얀 원으로 표시된 곳에 파티원 전원이 집합했다가
                함께 움직이면 쉽게 피할 수 있습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                *{" "}
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                회피 전{" "}
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                처리를 위해 산개한 상태이므로 집합 장소 반대쪽으로 산개한
                플레이어들은 "전력 질주"를 꼭 사용해주세요.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/evil-earth-1/3.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                일단{" "}
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                시전이 시작되면 장판이 시작하는 장소를 보고 파티 집합 장소가
                어디인지 재빨리 확인합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                처리가 끝나면 곧바로 집합 장소에 모두 집합합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 파티원 전원이 함께 움직여{" "}
                <InlineChip
                  currentId="evilEarth1"
                  gimmickData={gimmickData}
                  id="evilEarth"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.evilEarth.name, "를")}{" "}
                피해줍니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "faultLine",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/fault-line/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 직선으로 돌진하며 양 옆으로 충격파를 발생시켜 모든
                플레이어들을 크게 밀어냅니다. 돌진 경로 위에 있을 경우
                즉사합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 돌진 경로로부터 양 옆으로 한 칸씩 후속타가 발생하므로
                주의해주세요.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "faultLineMagnitude50",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="earthenWheels"
                  openDialog={openDialog}
                />{" "}
                이후 곧바로 시전 바 없이{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.pulseOfTheLand.name,
                  "와"
                )}{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.forceOfTheLand.name,
                  "를"
                )}{" "}
                사용합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                무작위로 한 명의 탱커, 한 명의 딜러, 한 명의 힐러에게{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시되고 나머지 파티원들에게는{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                징이 표시된 직후 미니 타이탄이{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="faultLine"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(gimmickData.faultLine.name, "을")}{" "}
                사용합니다. 정면으로 돌진하며 모든 플레이어를 자신의 양 옆으로
                밀어냅니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/3.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                자신의 징 색깔을 확인한 후 위와 같이 산개합니다. 이후 모든
                파티원들이{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="faultLine"
                  openDialog={openDialog}
                />{" "}
                에 의해 다음과 같이 밀려나게 됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/4.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                밀려난 후 징이 처리되고 후속타 판정이 끝날 때까지 시간이 살짝
                걸리기 때문에 밀려난 칸에서 잠깐 기다려주어야 합니다! 위
                그림에서 파랗게 표시된 부분이 후속타 공격 범위입니다. 징 처리와
                후속타 판정은 거의 동시에 일어납니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/5.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                징 처리와 후속타 판정이 끝났다면 모든 파티원들은 한 칸 위로
                이동해 다음 후속타를 피해줍니다. 이 때 미니 타이탄이 1어글자를
                향해 두 번째{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="faultLine"
                  openDialog="openDialog"
                />{" "}
                {this.generatePostposition(gimmickData.faultLine.name, "을")}{" "}
                사용하기 때문에 1어글자는 위 포지션으로 이동해 돌진 방향을
                유도해줍니다. 나머지 파티원들은 뺑소니 당하지 않도록
                주의해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이 두 번째{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="faultLine"
                  openDialog="openDialog"
                />{" "}
                {this.generatePostposition(gimmickData.faultLine.name, "은")}{" "}
                대상자에게 거리 비례 데미지를 주므로 위 그림처럼 거리를 최대한
                띄워주어야 합니다. 약 8만 정도의 꽤 아픈 물리 피해를 입히므로
                1어글자인 대상자는 빠른 포지셔닝을 위한 "전력 질주" 외에도
                "방벽", "원초의 직감" 등의 가벼운 생존기를 올려주는 것이
                좋습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 만약 1어글자가{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog="openDialog"
                />{" "}
                대상자였다면 빠른 포지셔닝이 힘들 수도 있습니다. 따라서 탱커들은
                처음 징이 생기자마자 재빨리 자신의 징 색깔을 확인 후 1어글자가{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog="openDialog"
                />{" "}
                징을 가지고 있다면 빠르게 탱교대를 해줍시다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/6.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                전체적인 타이밍은 위 영상을 참고해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/magnitude-50/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                이후 미니 타이탄이 곧바로{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="magnitude50"
                  openDialog={openDialog}
                />{" "}
                시전을 시작합니다. 모든 파티원들은 시전이 끝나기 전에 재빨리
                미니 타이탄의 타겟 원 안으로 들어와 공격을 회피해줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                동시에 모든 파티원들의 머리 위에{" "}
                <InlineChip
                  currentId="faultLineMagnitude50"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시됩니다. 전원 산개해서 처리해줍니다. 산개 예시는 아래와
                같습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/fault-line-magnitude-50/7.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 위 산개도는 예시일 뿐입니다. 서로 겹치지만 않는다면 어떻게
                산개하든 자유입니다. 자신과 자신의 파티원들이 가장 편하다고
                생각하는 산개 방법을 사용해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 기믹 처리를 위해 미니 타이탄을 맵 중앙에 주차해주세요.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "forceOfTheLand",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/force-of-the-land/1.png"}
                width={342}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="forceOfTheLand"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                대상자의 머리 위에는 오렌지색 네모 징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={720}
                src={pageData.videoBaseUrl + "/force-of-the-land/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                오렌지색 네모 징이 사라지는 시점에 대상 플레이어가 서 있는
                바닥에 돌이 떨어지며 피해를 입힙니다. 해당 바닥칸에 대상
                플레이어 혼자 서 있을 경우 즉사하게 되지만 1명 이상의 다른
                플레이어가 같이 있다면 약 4만 정도의 마법 피해를 입고 "받는 마법
                피해 증가" 디버프를 부여받습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/force-of-the-land/3.png"}
                width={300}
              />
              <ImageBlock
                src={pageData.videoBaseUrl + "/force-of-the-land/4.png"}
                width={300}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="forceOfTheLand"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                의 판정은 플레이어를 중심으로 이루어지는 것이 아니라 플레이어가
                밟고 있는 바닥의 네모 칸을 기준으로 이루어지는 것이므로, 함께
                맞을 플레이어들은 항상 바닥 칸을 잘 보고 같은 칸에 서 있도록
                합니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "geocrush",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/geocrush/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                타이탄이 모서리를 제외한 바깥 바닥칸 중 무작위로 한 칸을 골라
                바라보며{" "}
                <InlineChip
                  currentId="geocrush"
                  gimmickData={gimmickData}
                  id="geocrush"
                  openDialog={openDialog}
                />{" "}
                시전을 시작합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                타이탄이 바라보고 있는 바닥칸을 중심으로 화살표가 뻗어나가는
                모양의 장판이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/geocrush/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                이후 시전이 끝나면 바라보고 있던 바닥칸을 향해 점프해 착지하며
                모든 파티원들을 해당 칸의 바깥 방향으로 밀어냅니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                밀어내는 거리가 상당히 길기 때문에 해당 바닥칸 안쪽에 서 있지
                않으면 맵 바깥까지 밀려 낙사할 수 있으므로 주의해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                밀쳐내기 무효화 기술을 사용하거나 밀려나는 도중에 돌진 기술 등을
                사용해 밀려나는 것을 방지할 수 있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "landslide",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 맵의 동서남북 중 한 군데를 바라보며{" "}
                <InlineChip
                  currentId="landslide"
                  gimmickData={gimmickData}
                  id="landslide"
                  openDialog={openDialog}
                />{" "}
                시전을 시작합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/landslide/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나면 바라보고 있던 방향으로 점프해 착지하며 위 그림처럼
                T자 형태의 넉백 공격을 하게 됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/landslide/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나기 전에 타이탄이 바라보고 있는 방향을 확인 후 안전
                지역으로 이동해 T자 공격을 피해줍니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/landslide/3.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                이후 안전 지역에 후속타가 오므로 쟤빨리 안전 지역을 벗어나 미니
                타이탄 아래에 모두 모입니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 빙글 돌아 맵 중앙을 향하며 자신의 왼쪽 혹은 오른쪽
                맵 전부를 덮는 장판 공격을 시전합니다. 친절하게 바닥에 장판을
                보여주므로 간단하게 피해줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 공격하지 않은 영역에 후속타가 오므로 장판 공격을 피하고
                나서 재빨리 넘어가 후속타도 피해줍니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/landslide/4.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                장판 공격이 끝났을 때 쯤에 바닥의 돌덩이들이 빛나기 시작합니다.
                빛나는 돌덩이와 빛나지 않는 돌덩이의 위치를 확인합니다. 먼저
                빛나기 시작한 돌덩이가 먼저 폭발하므로 빛나지 않는 돌덩이의
                위치에 서 있어야 합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/landslide/5.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                만약 맵 모서리의 돌덩이들이 빛나고 있다면 그대로 현재 위치에서
                대기하고, 현재 위치의 돌덩이가 빛나고 있다면 후속타가 오지 않는
                맵 모서리 돌덩이 위로 이동합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 첫 번째로 빛나던 돌덩이들이 터지고 나면 맵 중앙으로 이동해
                나머지 돌덩이들의 폭발을 피해줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                아래는 맵 모서리의 돌덩이들이 빛나지 않고 현재 위치의 돌덩이가
                빛날 때의 예시 영상입니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/landslide/6.mp4"}
              />
            </CenteredBlock>
          </React.Fragment>
        )
      },
      {
        id: "magnitude50",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/magnitude-50/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                도넛 모양 범위 공격입니다. 미니 타이탄의 타겟 원 안으로 들어와
                피할 수 있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "massiveLandslide",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="earthenGauntlets"
                  openDialog={openDialog}
                />{" "}
                이후 곧바로 시전 바 없이{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.pulseOfTheLand.name,
                  "와"
                )}{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.forceOfTheLand.name,
                  "를"
                )}{" "}
                사용합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/massive-landslide/1.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                무작위로 한 명의 탱커, 한 명의 딜러, 한 명의 힐러에게{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시되고 나머지 파티원들에게는{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/massive-landslide/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                징이 처리된 직후 미니 타이탄이{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.massiveLandslide.name,
                  "를"
                )}{" "}
                사용합니다. 정면 직선 범위를 제외한 맵 전체를 덮는 범위 공격이며
                맞을 경우 맵 바깥으로 밀려나 낙사하게 됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/massive-landslide/3.png"}
                width={500}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                에서 안전한 바닥칸이 4칸 뿐이므로 위와 같이 산개해{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                {this.generatePostposition(
                  gimmickData.massiveLandslide.name,
                  "와"
                )}{" "}
                징을 동시에 처리합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colorTypes.warning
                }}
                variant="body2"
              >
                * 예외로{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                에 걸린 딜러가 원거리 딜러일 경우에는{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                에 걸린 탱커와 자리를 바꿔 탱커가 조금이나마 딜을 더 넣을 수
                있도록 할 수도 있습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/massive-landslide/4.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                이후{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                때 공격하지 않았던 정면 직선 범위로 푸른색 후속타가 오므로
                재빨리 피해줍니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/massive-landslide/5.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                전체적인 타이밍은 다음과 같습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                1.{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="geocrush"
                  openDialog={openDialog}
                />{" "}
                이후 징이 생기면 일단 자신의 징을 확인합니다.
              </Typography>
              <Typography variant="body2">
                2. 이후 타이탄이 형태를 바꾸는 모션을 통해 이어지는 페이즈가{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="earthenGauntlets"
                  openDialog={openDialog}
                />{" "}
                인지{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="earthenWheels"
                  openDialog={openDialog}
                />{" "}
                인지를 판단합니다.
              </Typography>
              <Typography variant="body2">
                3. 타이탄의 형태가{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="earthenGauntlets"
                  openDialog={openDialog}
                />{" "}
                인 것이 확인되면{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                처리를 위해 정해진 위치로 산개합니다.
              </Typography>
              <Typography variant="body2">
                4.{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                처리 이후 재빨리 이동해 후속타를 피해줍니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 기믹 처리를 위해 미니 타이탄을 맵 중앙에 주차해주세요.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "orogenesis",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/orogenesis/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                2 페이즈의 시작을 알리는 페이즈 전환 연출입니다. 미니 타이탄이
                거대 타이탄으로 변신합니다. 체력은 그대로 유지됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                거대 타이탄 상태에서는 맵 북쪽에 위치가 고정되며 후측 판정이
                사라집니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "pulseOfTheLand",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/pulse-of-the-land/1.png"}
                width={182}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="pulseOfTheLand"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                대상자의 머리 위에는 노란색 세모 징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/pulse-of-the-land/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                노란색 세모 징이 사라지는 시점에 해당 플레이어가 서 있는 바닥
                칸이 폭발하며 약 5만 정도의 마법 피해를 입게 됩니다. 또한 "받는
                마법 피해 증가" 디버프를 부여받으므로 다른 플레이어와 겹쳐 맞지
                않도록 해야 합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={pageData.videoBaseUrl + "/pulse-of-the-land/3.png"}
                width={300}
              />
              <ImageBlock
                src={pageData.videoBaseUrl + "/pulse-of-the-land/4.png"}
                width={300}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                <InlineChip
                  currentId="pulseOfTheLand"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                의 폭발 판정은 플레이어를 중심으로 이루어지는 것이 아니라
                플레이어가 밟고 있는 바닥의 네모 칸을 기준으로 이루어지는
                것이므로, 항상 바닥 칸을 잘 보고 다른 플레이어와 같은 칸에 서
                있지 않도록 합니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "seismicWave",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/seismic-wave/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                피격당할 경우 즉사하는 광역기입니다.{" "}
                <InlineChip
                  currentId="seismicWave"
                  gimmickData={gimmickData}
                  id="crumblingDown"
                  openDialog={openDialog}
                />{" "}
                에서 생성되는 커다란 돌덩어리 뒤에 숨어 피할 수 있습니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "stonecrusher",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/stonecrusher/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                1어글자를 총 3번 넓은 원형 범위로 타격하는 탱크 버스터입니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                각 타격마다 "물리 방어 감소" 디버프를 부여하므로 2번의 도발을
                통해 각 타격을 나눠맞거나 무적기로 처리할 수 있습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                첫 페이즈에 총 2번밖에 사용하지 않으므로 보통 탱커 둘이 돌아가며
                무적기로 처리하는 것이 일반적입니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                타격 범위가 넓은 편이므로 탱커 근처에 갔다가 휩쓸리지 않도록
                주의해주세요.
              </Typography>
            </Grid>
            <Grid item>
              <Divider variant="middle" />
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/stonecrusher/2.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                전사나 건브레이커의 경우 무적기의 지속 시간이 아슬아슬해서 3번의
                타격 전부를 커버할 수 없으므로 "보복" 등의 생존기를 사용해 첫
                타격을 맞고 이후 후속타를 무적기로 넘기는 것을 추천드립니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "voiceOfTheLand",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/voice-of-the-land/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                미니 타이탄이 사용하는 단발 광역기로 모든 파티원에게 약 5만
                정도의 마법 피해를 줍니다.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "weightOfTheLand",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/weight-of-the-land/1.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나면 무작위로 8칸의 바닥 위에 장판이 표시됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                표시된 장판은 일정 시간이 지나면 폭발합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                다른 기믹들과 섞여나오는 경우가 많으므로 기믹 처리 중 피격당하지
                않도록 주의해주세요.
              </Typography>
            </Grid>
          </React.Fragment>
        )
      },
      {
        id: "weightOfTheLandPulseOfTheLand",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                바닥에{" "}
                <InlineChip
                  currentId="weightOfTheLandPulseOfTheLand"
                  gimmickData={gimmickData}
                  id="weightOfTheLand"
                  openDialog={openDialog}
                />{" "}
                장판이 나타난 후 모든 파티원들의 머리 위에{" "}
                <InlineChip
                  currentId="weightOfTheLandPulseOfTheLand"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                징이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={
                  pageData.videoBaseUrl +
                  "/weight-of-the-land-pulse-of-the-land/1.mp4"
                }
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                기믹 발동 순서는{" "}
                <InlineChip
                  currentId="weightOfTheLandPulseOfTheLand"
                  gimmickData={gimmickData}
                  id="weightOfTheLand"
                  openDialog={openDialog}
                />{" "}
                →{" "}
                <InlineChip
                  currentId="weightOfTheLandPulseOfTheLand"
                  gimmickData={gimmickData}
                  id="pulseOfTheLand"
                  openDialog={openDialog}
                />{" "}
                순서이므로 일단 바닥 장판을 먼저 피하고 나서 산개 매크로
                위치대로 이동해 징을 처리해줍니다. 산개 위치는 아래와 같습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock
                src={
                  pageData.videoBaseUrl +
                  "/weight-of-the-land-pulse-of-the-land/2.png"
                }
                width={500}
              />
            </CenteredBlock>
          </React.Fragment>
        )
      }
    ];

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
                <CenteredBlock>
                  <Grid item>
                    <Typography variant="h6">{pageData.title}</Typography>
                  </Grid>
                </CenteredBlock>
                <CenteredBlock>
                  <img
                    src={
                      SiteInfo.assetsUrl +
                      "/raid-guide/edens-gate-sepulture-savage.png"
                    }
                    style={{
                      maxWidth: "376px",
                      width: "100%"
                    }}
                  />
                </CenteredBlock>
                <Grid item>
                  <Typography variant="body2">
                    연대기 퀘스트 'The Next Piece of the Puzzle'을 완료한 후,
                    아므 아렝 (X: 26.8, Y: 16.4) 에 위치한 NPC 'Lewrey' 에게
                    말을 걸어 개방할 수 있습니다.
                  </Typography>
                </Grid>
                <CenteredBlock>
                  <YoutubeFrameBlock
                    height="360"
                    src="https://www.youtube.com/embed/3kQqQ4WNqMQ"
                    width="576"
                  />
                </CenteredBlock>
                <Grid item>
                  <Typography variant="body2">
                    파이널 판타지 14 &lt;{ExpansionTitles.shb}&gt; 패치 5.05에
                    추가되는 8인 레이드, "{pageData.title}" 가이드입니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    요구 레벨은 80이며 최소 아이템 레벨 제한은 450입니다.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Typography variant="body2">
              * 아래 메뉴 중 열람하고자 하는 메뉴를 클릭하시면 내용을 펼치거나
              접을 수 있습니다.
            </Typography>
          </Grid>
          <Grid item>
            <ExpansionPanelsBlock
              expandedPanel={2}
              panels={[
                {
                  title: "기믹 살펴보기",
                  children: (
                    <React.Fragment>
                      <Grid item>
                        <Typography variant="body2">
                          * 기믹 이름을 클릭하면 상세 설명을 볼 수 있습니다.
                        </Typography>
                        <Typography
                          style={{
                            color: colors.red
                          }}
                          variant="body2"
                        >
                          * 등장하는 모든 기믹을 ㄱㄴㄷ순으로 정리해놓은
                          목록입니다. 기믹의 등장 순서 및 전체 공략을
                          열람하시려면 아래 페이즈별 타임라인을 참조해주세요!
                        </Typography>
                      </Grid>
                      <GimmicksBlock
                        gimmickData={gimmickData}
                        gimmicks={gimmicks}
                        openDialog={openDialog}
                      />
                    </React.Fragment>
                  )
                },
                {
                  title: "1 페이즈 타임라인 - 미니 타이탄",
                  children: (
                    <React.Fragment>
                      <Grid item>
                        <Typography variant="body2">
                          * 타임라인 내 기믹 이름을 클릭해 상세 공략을 볼 수
                          있습니다.
                        </Typography>
                        <Typography
                          style={{
                            color: colorTypes.warning
                          }}
                          variant="body2"
                        >
                          상세 공략 중 <LaunchIcon /> 아이콘이 붙어있는 기믹
                          이름의 경우 클릭해 더 자세한 내용을 열람할 수
                          있습니다.
                        </Typography>
                      </Grid>
                      <TimelineBlock
                        gimmickData={gimmickData}
                        openDialog={openDialog}
                        timeline={timelines[0]}
                      />
                    </React.Fragment>
                  )
                },
                {
                  title: "2 페이즈 타임라인 - 거대 타이탄",
                  children: (
                    <React.Fragment>
                      <Grid item>
                        <Typography variant="body2">
                          * 타임라인 내 기믹 이름을 클릭해 상세 공략을 볼 수
                          있습니다.
                        </Typography>
                        <Typography
                          style={{
                            color: colorTypes.warning
                          }}
                          variant="body2"
                        >
                          상세 공략 중 <LaunchIcon /> 아이콘이 붙어있는 기믹
                          이름의 경우 클릭해 더 자세한 내용을 열람할 수
                          있습니다.
                        </Typography>
                      </Grid>
                      <TimelineBlock
                        gimmickData={gimmickData}
                        openDialog={openDialog}
                        timeline={timelines[1]}
                      />
                    </React.Fragment>
                  )
                },
                {
                  title: "3 페이즈 타임라인 - 더블 타이탄",
                  children: <React.Fragment></React.Fragment>
                }
              ]}
            />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <CenteredBlock>
              <YoutubeFrameBlock
                height="360"
                src="https://www.youtube.com/embed/Dk-gt18mMBs"
                width="576"
              />
            </CenteredBlock>
          </Grid>
        </Grid>
        {dialogs.map((dialog, dialogIndex) => {
          return (
            <TimelineDialogBlock
              children={dialog.children}
              closeDialog={closeDialog}
              dialogHistory={this.state.dialogHistory}
              gimmickData={gimmickData}
              id={dialog.id}
              key={dialogIndex}
              openedDialog={this.state.openedDialog}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default EdensGateSepultureSavage;
