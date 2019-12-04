import Head from "next/head";
import Router from "next/router";
import React, { useEffect } from "react";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import GuideCaption from "../../../../src/components/old/guide/guide-caption";
import GuideCard from "../../../../src/components/old/guide/guide-card";
import GuideCenteredItem from "../../../../src/components/old/guide/guide-centered-item";
import GuideLoopVideo from "../../../../src/components/old/guide/guide-loop-video";
import GuideNormalText from "../../../../src/components/old/guide/guide-normal-text";
import GuideTitle from "../../../../src/components/old/guide/guide-title";
import GuideYtFrame from "../../../../src/components/old/guide/guide-yt-frame";

import en from "../../../../src/translations/pages/guide/trial-guide/kugane-ohashi/en";
import ko from "../../../../src/translations/pages/guide/trial-guide/kugane-ohashi/ko";

const KuganeOhashi = props => {
  const assetUrl = url => {
    return "https://sylvia-moonfish.github.io/fishbowl-assets/" + url;
  };

  const videoUrl = url => {
    return (
      "https://sylvia-moonfish.github.io/fishbowl-video-1/guide/trial-guide/kugane-ohashi/" +
      url
    );
  };

  const classes = makeStyles(() => ({
    fill: {
      width: "100%",
      maxWidth: 376
    }
  }))();

  const messages = {
    en: en,
    ko: ko
  };
  const translate = id => {
    return messages["ko"][id];
  };
  const pageTitle = translate("page-title");
  const pageDescription = translate("page-description");

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
      <Container maxWidth="md">
        <Grid container spacing={5} direction="column">
          <GuideTitle>{translate("title")}</GuideTitle>
          <GuideCenteredItem>
            <img
              className={classes.fill}
              src={assetUrl("trial-guide/kugane-ohashi.png")}
            />
          </GuideCenteredItem>
          <GuideNormalText>
            새로운 외전 퀘스트 '힐디브랜드 외전: 홍련편'을 진행하는 과정에서
            개방 후 도전할 수 있습니다.
            <br />
            <br />
            외전 퀘스트 '쉴 새 없는 무기 괴도'를 완료한 후, 쿠가네{" "}
            <GuideCaption>(X: 10.5, Y: 8.1)</GuideCaption> 에 위치한 NPC '마슈
            마카라카'로부터 새로운 외전 퀘스트 '숨겨진 증거품'을 시작할 수
            있습니다.
          </GuideNormalText>
          <GuideYtFrame
            title="intro"
            src="https://www.youtube.com/embed/76e2Nk7wkl0?rel=0"
          />
          <GuideNormalText>
            파이널 판타지 14 &lt;홍련의 해방자&gt; 패치 4.56에 추가되는 8인
            토벌전, 진 요우진보 토벌전 가이드입니다. '힐디브랜드 외전: 홍련편'
            내용 일부 스포일러가 포함되어 있는 토벌전이므로 유의해주세요!
            <br />
            <br />
            딱히 바닥징이 필요없는 토벌전입니다. 그럼 시작해볼까요!
          </GuideNormalText>
          <Grid item>
            <Divider />
          </Grid>
          <GuideTitle>1 페이즈</GuideTitle>
          <GuideCard title="Inoshikacho">
            <GuideLoopVideo src={videoUrl("1.mp4")} />
            <GuideNormalText>
              4마리의 나비가 랜덤한 플레이어 4명의 자리에 착지한 후 원형 장판
              공격을 합니다. 가뿐하게 피해주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Metta-giri">
            <GuideLoopVideo src={videoUrl("2.mp4")} />
            <GuideNormalText>
              파티 전체 광역기입니다. 약 2만의 데미지를 줍니다.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Unveiling">
            <GuideLoopVideo src={videoUrl("3.mp4")} />
            <GuideNormalText>
              1 페이즈의 각 기믹을 순서대로 한 번씩 사용한 후, 보스가 맵
              중앙으로 이동합니다.
              <br />
              <br />
              이후 대사와 함께 잠시 타겟 불가능이 되었다가 길가메쉬로 변해
              나타납니다. 체력과 적개심은 그대로 유지됩니다.
            </GuideNormalText>
          </GuideCard>
          <GuideCenteredItem>
            <Typography variant="h6">1 페이즈 플레이 영상</Typography>
          </GuideCenteredItem>
          <GuideYtFrame
            title="phase1"
            src="https://www.youtube.com/embed/tFZesZWJVvY?rel=0"
          >
            Inoshikacho -&gt; Metta-giri -&gt; Unveiling
          </GuideYtFrame>
          <Grid item>
            <Divider />
          </Grid>
          <GuideTitle>2 페이즈</GuideTitle>
          <GuideCard title="Yukikaze">
            <GuideLoopVideo src={videoUrl("4.mp4")} />
            <GuideNormalText>
              격자 모양 범위 공격을 2번 연속해서 사용합니다. 바닥을 잘 보고
              피해주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Gekko + Kasha">
            <GuideLoopVideo src={videoUrl("5.mp4")} />
            <GuideNormalText>
              모든 플레이어에게 노란 범위 징이 생깁니다. 이후 범위 징이 터지고
              나서 바로 그 자리에 도넛 모양 장판이 생깁니다.
              <br />
              <br />
              노란 범위 징 때 적당히 산개하여 도넛 모양 장판을 피하기 쉽도록
              배치해줍시다. 장판이 터질 때까지 시간적 여유가 있으므로 차분하게
              피해주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Bitter End">
            <GuideLoopVideo src={videoUrl("6.mp4")} />
            <GuideNormalText>
              캐스팅 없이 사용하는 탱크버스터입니다. 약 1만 5천 정도의 데미지를
              주며 보스 전방 부채꼴 범위 공격이므로 탱커의 근처에 가지 않도록
              합니다.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Tiny Song">
            <GuideLoopVideo src={videoUrl("7.mp4")} />
            <GuideNormalText>
              모든 플레이어의 머리 위에 빨간 삼각형 징이 생깁니다. 삼각형 징이
              터질 때 1명 이상의 다른 플레이어와 겹쳐 서 있어야 합니다. 판정이
              꽤 넉넉하므로 적당히 모여주세요.
              <br />
              <br />
              기믹 처리에 실패할 경우 소형화 디버프에 걸려 받는 데미지가
              증가하고 주는 데미지가 감소합니다.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Dragon's Lair">
            <GuideLoopVideo src={videoUrl("8.mp4")} />
            <GuideNormalText>
              맵을 가로지르는 용머리들을 소환합니다. 용머리에 닿으면 데미지와
              함께 받는 피해 증가 디버프가 걸리므로 잘 피해줍니다. 생각보다
              용머리의 판정 범위가 넓으므로 주의해주세요.
            </GuideNormalText>
            <GuideLoopVideo src={videoUrl("9.mp4")} />
            <GuideNormalText>
              용머리들은 맵 반대편에 도달하면 사라진 후 약 2만 5천 정도의 파티
              전체 데미지를 줍니다.
            </GuideNormalText>
          </GuideCard>
          <GuideNormalText>
            보스의 체력을 일정 수준 이하로 만들면 맵 중앙으로 이동한 후 타겟
            불가능이 되면서 다음 페이즈로 넘어갑니다.
          </GuideNormalText>
          <GuideCenteredItem>
            <Typography variant="h6">2 페이즈 플레이 영상</Typography>
          </GuideCenteredItem>
          <GuideYtFrame
            title="phase2"
            src="https://www.youtube.com/embed/B4MSJgTrxzw?rel=0"
          >
            Yukikaze -&gt; (Gekko + Kasha) -&gt; Bitter End -&gt; Tiny Song
            -&gt; Dragon's Lair -&gt; 이후 무작위 반복
          </GuideYtFrame>
          <Grid item>
            <Divider />
          </Grid>
          <GuideTitle>3 페이즈</GuideTitle>
          <GuideCard title="Giga Jump">
            <GuideLoopVideo src={videoUrl("10.mp4")} />
            <GuideNormalText>
              탱커 두 명의 머리 위에 플레어 징이 표시됩니다. MT는 맵의 북서쪽,
              ST는 맵의 북동쪽 구석으로 이동하고 나머지 파티원들은 맵의 남쪽에
              모여주도록 합니다.
              <br />
              <br />
              이후 둘로 나뉘어진 보스가 각각 MT와 ST가 있는 위치에 거리 비례
              범위 공격을 합니다. 탱커는 이후 각자 자신의 위치에 생성된 쫄의
              적개심을 끌어주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Bitter End">
            <GuideLoopVideo src={videoUrl("11.mp4")} />
            <GuideNormalText>
              2 페이즈에서 사용하던 캐스팅없는 범위 탱크 버스터입니다. 각 쫄이
              주기적으로 사용하므로 힐러들은 탱커들의 체력에 유의해주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Gekko + Kasha">
            <GuideLoopVideo src={videoUrl("12.mp4")} />
            <GuideNormalText>
              2 페이즈 때와 같습니다. 바닥에 표시되는 범위를 잘 보고 피해주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Kasha + Gekko">
            <GuideLoopVideo src={videoUrl("13.mp4")} />
            <GuideNormalText>
              순서를 반대로 해서 플레이어들의 발 밑에 도넛 범위가 먼저 생긴 후,
              그 다음 노란 범위 징이 생깁니다. 도넛 범위를 잘 피해준 후, 노란
              범위 징을 겹쳐 맞지 않도록 산개해주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideLoopVideo src={videoUrl("14.mp4")} />
          <GuideNormalText>
            보스의 게이지가 전부 차기 전에 두 마리의 쫄을 전부 제거하면 쌓인
            게이지량에 비례한 전체 데미지를 주며 다음 페이즈로 넘어갑니다.
          </GuideNormalText>
          <GuideCenteredItem>
            <Typography variant="h6">3 페이즈 플레이 영상</Typography>
          </GuideCenteredItem>
          <GuideYtFrame
            title="phase3"
            src="https://www.youtube.com/embed/rZbhTwEB8SM?rel=0"
          >
            Giga Jump -&gt; Bitter End -&gt; (Gekko + Kasha) -&gt; (Kasha +
            Gekko) -&gt; Bitter End -&gt; 이후 무작위 반복
          </GuideYtFrame>
          <Grid item>
            <Divider />
          </Grid>
          <GuideTitle>4 페이즈</GuideTitle>
          <GuideCard title="Giga Jump">
            <GuideLoopVideo src={videoUrl("15.mp4")} />
            <GuideNormalText>
              MT의 머리 위에 플레어 징이 표시됩니다. MT는 보스를 맵의 북쪽에
              떨궈주고 나머지 플레이어들은 MT와 적당한 거리를 유지해주세요.
              플레어 징이 사라지고 나면 MT의 위치에 보스가 재등장하며 모든
              플레이어들에게 거리 비례 데미지를 줍니다.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Electrogenetic Force">
            <GuideLoopVideo src={videoUrl("16.mp4")} />
            <GuideNormalText>
              전기 구슬들이 4x4 형태로 맵 전체를 덮습니다. 항상 보스와 가까운
              곳에 전기 구슬이 없는 빈 공간이 하나 있으므로 재빨리 빈 곳을
              찾아서 전기 구슬들의 공격을 피해주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Enchain">
            <GuideLoopVideo src={videoUrl("17.mp4")}>
              보스와 가까운 곳에서 속박되면 Iron Chain의 방어력과 체력이
              상승하니 주의!
            </GuideLoopVideo>
            <GuideNormalText>
              탱커 2명과 힐러 2명에게 빨간 징을 찍은 후, 캐스팅이 끝나면 징이
              찍힌 플레이어들을 속박합니다. 속박된 플레이어들의 주위에 Iron
              Chain이 나타나는데, 속박되지 않은 플레이어들은 이 Iron Chain을
              공격해 제거해서 속박을 풀어줄 수 있습니다.
              <br />
              <br />
              보스에게서 멀리 떨어져 있을 수록 Iron Chain의 방어력이 낮아지므로
              탱커와 힐러는 속박당하기 전에 최대한 보스에게서 멀리 떨어져주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Hell's Gate">
            <GuideLoopVideo src={videoUrl("18.mp4")} />
            <GuideNormalText>
              Enchain 직후 캐스팅을 시작하며 캐스팅이 끝났을 때 아직 Iron
              Chain이 풀리지 않은 플레이어들을 즉사시킵니다. 캐스팅이 끝나기
              전에 모든 Iron Chain을 제거해주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Masamune -&gt; Zanma Zanmai -&gt; Epic Stormsplitter">
            <GuideLoopVideo src={videoUrl("19.mp4")} />
            <GuideNormalText>
              보스가 맵의 북쪽 혹은 남쪽을 향해 돌진 공격을 합니다. 이후 Zanma
              Zanmai를 시전해 모든 플레이어들의 체력을 1로 만듭니다.
            </GuideNormalText>
            <GuideLoopVideo src={videoUrl("20.mp4")} />
            <GuideNormalText>
              연달아서 Epic Stormsplitter를 시전합니다. 청록색 직사각형 장판이
              표시된 후, 이어서 좁은 직사각형 범위를 제외한 맵 전체를 덮는
              장판이 표시됩니다. 청록색 장판이 사라지는 것을 차분하게
              기다렸다가, 사라진 것을 확인하고 나면 바로 좁은 직사각형 안으로
              이동해 두 번째 공격을 피해주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Dragon's Lair + Electrogenetic Force">
            <GuideLoopVideo src={videoUrl("21.mp4")} />
            <GuideNormalText>
              2 페이즈 때와 마찬가지로 맵 한쪽 끝에 맵을 가로지르는 용머리들을
              소환합니다. 이후 모든 플레이어들의 발 밑에 전기 구슬이 생성됩니다.
              전기 구슬이 폭발할 때까지 꽤 시간이 있으므로 용머리에 부딪히지
              않게 주의해서 용머리와 전기 구슬을 피해주세요.
            </GuideNormalText>
          </GuideCard>
          <GuideCard title="Dragon's Lair + Tiny Song">
            <GuideLoopVideo src={videoUrl("22.mp4")} />
            <GuideNormalText>
              용머리들이 소환되고 나서 모든 플레이어의 머리 위에 빨간 징이
              찍힙니다. 용머리들을 주의하면서 한 곳에 모여 맞도록 합니다.
            </GuideNormalText>
          </GuideCard>
          <GuideLoopVideo src={videoUrl("23.mp4")} />
          <GuideNormalText>
            그 외 2 페이즈에서 사용하던 Yukikaze, Gekko + Kasha 역시 사용합니다.
            대처법은 2 페이즈 때와 같습니다.
          </GuideNormalText>
          <GuideCenteredItem>
            <Typography variant="h6">4 페이즈 플레이 영상</Typography>
          </GuideCenteredItem>
          <GuideYtFrame
            title="phase4"
            src="https://www.youtube.com/embed/uFtgFT6DZHI?rel=0"
          >
            Giga Jump -&gt; Electrogenetic Force -&gt; Enchain -&gt; Hell's Gate
            -&gt; (Masamune -&gt; Zanma Zanmai -&gt; Epic Stormsplitter) -&gt;
            (Dragon's Lair + Electrogenetic Force) -&gt; Bitter End x 2 -&gt;
            Yukikaze -&gt; (Gekko + Kasha) -&gt; (Dragon's Lair + Tiny Song)
            -&gt; 이후 무작위 반복
          </GuideYtFrame>
          <Grid item>
            <Divider />
          </Grid>
          <GuideYtFrame
            title="outro"
            src="https://www.youtube.com/embed/TfiyGGqdrn4?rel=0"
          />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default KuganeOhashi;
