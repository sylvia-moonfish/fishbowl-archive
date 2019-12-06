import Container from "@material-ui/core/Container";
import { blue, blueGrey, deepPurple, red } from "@material-ui/core/colors";
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
      openedDialog: false
    };
  }

  render() {
    const colors = {
      red: this.props.currentTheme === "light" ? red[800] : red[200],
      deepPurple:
        this.props.currentTheme === "light" ? deepPurple[800] : deepPurple[200],
      blue: this.props.currentTheme === "light" ? blue[800] : blue[200],
      blueGrey:
        this.props.currentTheme === "light" ? blueGrey[800] : blueGrey[200]
    };

    const gimmickTypeColors = {
      tankBuster: colors.red,
      partyBuster: colors.deepPurple,
      gimmick: colors.blue,
      instruction: colors.blueGrey
    };

    const gimmickData = {
      earthenGauntlets: {
        name: "Earthen Gauntlets",
        description: "산사태 형태로 변신",
        color: gimmickTypeColors.gimmick
      },
      evilEarth: {
        name: "Evil Earth",
        description: "연속 폭발 장판",
        color: gimmickTypeColors.gimmick
      },
      forceOfTheLand: {
        name: "Force of the Land",
        description: "오렌지색 네모 징",
        color: gimmickTypeColors.gimmick
      },
      geocrush: {
        name: "Geocrush",
        description: "미니 타이탄 점프 + 넉백",
        color: gimmickTypeColors.gimmick
      },
      massiveLandslide: {
        name: "Massive Landslide",
        description: "산사태 + 세모네모 징",
        color: gimmickTypeColors.gimmick
      },
      stonecrusher: {
        name: "Stonecrusher",
        description: "3연속 탱크 버스터",
        color: gimmickTypeColors.tankBuster
      },
      voiceOfTheLand: {
        name: "Voice of the Land",
        description: "미니 타이탄 광역기",
        color: gimmickTypeColors.partyBuster
      },
      weightOfTheLandPulseOfTheLand: {
        name: "Weight of the Land + Pulse of the Land",
        description: "바닥 장판 + 노란색 세모 징",
        color: gimmickTypeColors.gimmick
      }
    };

    const gimmicks = [
      "earthenGauntlets",
      "evilEarth",
      "forceOfTheLand",
      "geocrush",
      "massiveLandslide",
      "stonecrusher",
      "voiceOfTheLand"
    ];

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
          id: "evilEarth",
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
            "이후 무작위로 Earthen Gauntlets 혹은 Earthen Wheels 페이즈가 이어집니다.",
          color: gimmickTypeColors.instruction
        },
        {
          instruction:
            "여기서는 Earthen Gauntlets가 사용되었다고 가정하고 진행하겠습니다.",
          color: gimmickTypeColors.instruction
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
        }
      ]
    ];

    const dialogs = [
      {
        id: "earthenGauntlets",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/23.mp4"}
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
                "Earthen Gauntlets" 의 경우 등 뒤의 바퀴가 양 손으로 가서 붙는
                모션을 통해 확인할 수 있습니다.
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
              <ImageBlock src={pageData.videoBaseUrl + "/11.png"} width={500} />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                타이탄이 "Evil Earth" 시전을 시작하는 순간 바닥에 2개의 "Evil
                Earth" 장판이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/12.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                시전이 끝나면 장판이 표시되었던 곳부터 폭발한 후, 위 영상처럼
                바깥쪽으로 한 칸씩 넓어져가면서 순차적으로 폭발합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/13.mp4"}
              />
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/14.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                "Evil Earth" 장판은 항상 2개가 대각선으로 마주 보는 위치에서
                나타나므로, 위 2가지의 조합 + 위 조합을 좌우반전한 버전 총 4가지
                조합 중 하나가 나오게 됩니다.
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
                  color: colors.red
                }}
                variant="body2"
              >
                * "Evil Earth" 회피 전 "Pulse of the Land (노란색 세모 징)"
                처리를 위해 산개한 상태이므로 집합 장소 반대쪽으로 산개한
                플레이어들은 "전력 질주"를 꼭 사용해주세요.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/15.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                일단 "Evil Earth" 시전이 시작되면 장판이 시작하는 장소를 보고
                파티 집합 장소가 어디인지 재빨리 확인합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                "Pulse of the Land (노란색 세모 징)" 처리가 끝나면 곧바로 집합
                장소에 모두 집합합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 파티원 전원이 함께 움직여 "Evil Earth" 를 피해줍니다.
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
              <ImageBlock src={pageData.videoBaseUrl + "/16.png"} width={342} />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                "Force of the Land" 대상자의 머리 위에는 오렌지색 네모 징이
                표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={720}
                src={pageData.videoBaseUrl + "/17.mp4"}
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
              <ImageBlock src={pageData.videoBaseUrl + "/18.png"} width={300} />
              <ImageBlock src={pageData.videoBaseUrl + "/19.png"} width={300} />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                "Force of the Land" 의 판정은 플레이어를 중심으로 이루어지는
                것이 아니라 플레이어가 밟고 있는 바닥의 네모 칸을 기준으로
                이루어지는 것이므로, 함께 맞을 플레이어들은 항상 바닥 칸을 잘
                보고 같은 칸에 서 있도록 합니다.
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
              <ImageBlock src={pageData.videoBaseUrl + "/21.png"} width={500} />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                타이탄이 모서리를 제외한 바깥 바닥칸 중 무작위로 한 칸을 골라
                바라보며 "Geocrush" 시전을 시작합니다.
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
                src={pageData.videoBaseUrl + "/22.mp4"}
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
        id: "massiveLandslide",
        children: (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2">
                "Earthen Gauntlets" 이후 곧바로 시전 바 없이 "Massive Landslide"
                와 "Pulse of the Land (노란색 세모 징)", "Force of the Land
                (오렌지색 네모 징)" 를 사용합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                무작위로 한 명의 탱커, 한 명의 딜러, 한 명의 힐러에게 "Pulse of
                the Land (노란색 세모 징)" 이 표시되고 나머지 파티원들에게는
                "Force of the Land (오랜지색 네모 징)" 이 표시됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이와 동시에 타이탄이 "Massive Landslide" 를 사용합니다. 정면
                직선 범위를 제외한 맵 전체를 덮는 범위 공격이며 맞을 경우 맵
                바깥으로 밀려나 낙사하게 됩니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                "Massive Landslide" 에서 안전한 바닥칸이 4칸 뿐이므로 위와 같이
                산개해 "Massive Landslide" 와 징을 동시에 처리합니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: colors.red
                }}
                variant="body2"
              >
                * 예외로 노란색 세모 징에 걸린 딜러가 원거리 딜러일 경우에는
                노란색 세모 징에 걸린 탱커와 자리를 바꿔 탱커가 조금이나마 딜을
                더 넣을 수 있도록 할 수도 있습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                이후 "Massive Landslide" 때 공격하지 않았던 정면 직선 범위로
                후속타가 오므로 재빨리 피해줍니다.
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
                src={pageData.videoBaseUrl + "/2.mp4"}
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
                src={pageData.videoBaseUrl + "/3.mp4"}
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
                src={pageData.videoBaseUrl + "/20.mp4"}
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
        id: "weightOfTheLandPulseOfTheLand",
        children: (
          <React.Fragment>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/4.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                "Weight of the Land" 를 시전합니다. 시전이 끝나면 무작위로 8칸의
                바닥 위에 장판이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock src={pageData.videoBaseUrl + "/5.png"} width={182} />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                이후 모든 파티원들의 머리 위에 "Pulse of the Land" 징 (노란색
                세모 모양) 이 표시됩니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/6.mp4"}
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
              <ImageBlock src={pageData.videoBaseUrl + "/7.png"} width={300} />
              <ImageBlock src={pageData.videoBaseUrl + "/8.png"} width={300} />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                "Pulse of the Land" 의 폭발 판정은 플레이어를 중심으로
                이루어지는 것이 아니라 플레이어가 밟고 있는 바닥의 네모 칸을
                기준으로 이루어지는 것이므로, 항상 바닥 칸을 잘 보고 다른
                플레이어와 같은 칸에 서 있지 않도록 합니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <LoopingVideoBlock
                height={360}
                src={pageData.videoBaseUrl + "/9.mp4"}
              />
            </CenteredBlock>
            <Grid item>
              <Typography variant="body2">
                기믹 발동 순서는 "Weight of the Land (8개 바닥 장판)" → "Pulse
                of the Land (노란색 세모 징)" 순서이므로 일단 바닥 장판을 먼저
                피하고 나서 산개 매크로 위치대로 이동해 "Pulse of the Land" 를
                처리해줍니다. 산개 위치는 아래와 같습니다.
              </Typography>
            </Grid>
            <CenteredBlock>
              <ImageBlock src={pageData.videoBaseUrl + "/10.png"} width={500} />
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
                        onClick={dialogId => {
                          this.state.openedDialog = dialogId;
                          this.setState(this.state);
                        }}
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
                        onClick={dialogId => {
                          this.state.openedDialog = dialogId;
                          this.setState(this.state);
                        }}
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
              gimmickData={gimmickData}
              id={dialog.id}
              key={dialogIndex}
              onClose={() => {
                this.state.openedDialog = false;
                this.setState(this.state);
              }}
              openedDialog={this.state.openedDialog}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default EdensGateSepultureSavage;
