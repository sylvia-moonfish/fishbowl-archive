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
      //openedDialog: 'crumblingDown',
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
      massiveLandslide: {
        name: "Massive Landslide",
        description: "산사태 + 세모네모 징",
        color: colorTypes.everyone
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
          timestamp: "0:35"
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
            " 가 사용되었다고 가정하고 진행하겠습니다.",
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
        }
      ]
    ];

    const dialogs = [
      {
        id: "crumblingDown",
        children: <React.Fragment></React.Fragment>
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
                타이탄이{" "}
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
                />
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
                를 피해줍니다.
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
                와{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="forceOfTheLand"
                  openDialog={openDialog}
                />{" "}
                를 사용합니다.
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
                징이 처리된 직후 타이탄이{" "}
                <InlineChip
                  currentId="massiveLandslide"
                  gimmickData={gimmickData}
                  id="massiveLandslide"
                  openDialog={openDialog}
                />{" "}
                를 사용합니다. 정면 직선 범위를 제외한 맵 전체를 덮는 범위
                공격이며 맞을 경우 맵 바깥으로 밀려나 낙사하게 됩니다.
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
                와 징을 동시에 처리합니다.
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
                          * 기믹 이름을 클릭하면 상세 공략을 볼 수 있습니다.
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
                  title: "2 페이즈 - 거대 타이탄",
                  children: <React.Fragment></React.Fragment>
                },
                {
                  title: "3 페이즈 - 더블 타이탄",
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
