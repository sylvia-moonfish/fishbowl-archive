import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";
import LaunchIcon from "@material-ui/icons/Launch";

import React from "react";

import SiteInfo from "../../../../data/site-info";
import PageComponent from "../../../../src/components/page-component";

const transition = React.forwardRef((props, ref) => {
  return <Grow {...props} ref={ref} />;
});

const pageData = {
  title: "나이트 가이드 - 5.1 BiS",
  description: "파이널 판타지 14 나이트 가이드 - 5.1 BiS"
};

class FiveOneBis extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedDialog: -1
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
                      <Typography variant="h5">{pageData.title}</Typography>
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
                        src={SiteInfo.assetsUrl + "/job-guide/pld.png"}
                        style={{
                          maxWidth: 128,
                          width: "100%"
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.1 기준 나이트의 Best-In-Slot 장비 세트 목록입니다.
                    아래 표에서 열람하고자 하는 세트 목록을 클릭해주세요.
                  </Typography>
                  <br />
                  <li>
                    DPS 계산 자료 출처:{" "}
                    <Chip
                      color="secondary"
                      component="span"
                      icon={<LaunchIcon />}
                      label="Allagan Studies"
                      onClick={() => {
                        window && window.open("https://discord.gg/rkDkxQW");
                      }}
                      size="small"
                      variant="outlined"
                    />
                  </li>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <Hidden mdDown>
                      <TableCell />
                    </Hidden>
                    <TableCell>평균 DPS</TableCell>
                    <TableCell>글로벌 쿨다운</TableCell>
                    <TableCell>음식</TableCell>
                    <TableCell>직격 확률</TableCell>
                    <TableCell>극대 확률</TableCell>
                    <TableCell>불굴 추가 방어력</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    hover
                    onClick={() => {
                      this.state.openedDialog = 0;
                      this.setState(this.state);
                    }}
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <Hidden mdDown>
                      <TableCell>
                        평균 DPS가 가장 높지만 글쿨이 많이 느림. 사용 시 주의
                        요망.
                      </TableCell>
                    </Hidden>
                    <TableCell>9007.64</TableCell>
                    <TableCell>2.45초</TableCell>
                    <TableCell>포포토 샐러드</TableCell>
                    <TableCell>15%</TableCell>
                    <TableCell>24.9%</TableCell>
                    <TableCell>2.4%</TableCell>
                  </TableRow>
                  <TableRow
                    hover
                    onClick={() => {
                      this.state.openedDialog = 1;
                      this.setState(this.state);
                    }}
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <Hidden mdDown>
                      <TableCell>
                        글쿨 2.42초로 최적화된 장비 세트. 나이트만 키울 경우
                        추천.
                      </TableCell>
                    </Hidden>
                    <TableCell>8975.95</TableCell>
                    <TableCell>2.42초</TableCell>
                    <TableCell>요술양배추 샐러드</TableCell>
                    <TableCell>15%</TableCell>
                    <TableCell>24.5%</TableCell>
                    <TableCell>2.4%</TableCell>
                  </TableRow>
                  <TableRow
                    hover
                    onClick={() => {
                      this.state.openedDialog = 2;
                      this.setState(this.state);
                    }}
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <Hidden mdDown>
                      <TableCell>
                        글쿨 2.40초로 최적화된 장비 세트. 4탱 공용 세트로 사용
                        가능.
                      </TableCell>
                    </Hidden>
                    <TableCell>8967.80</TableCell>
                    <TableCell>2.40초</TableCell>
                    <TableCell>요술양배추 샐러드</TableCell>
                    <TableCell>14%</TableCell>
                    <TableCell>24.5%</TableCell>
                    <TableCell>2%</TableCell>
                  </TableRow>
                  <TableRow
                    hover
                    onClick={() => {
                      this.state.openedDialog = 3;
                      this.setState(this.state);
                    }}
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <Hidden mdDown>
                      <TableCell>
                        글쿨 2.40초 불굴 장비 세트. 절 알렉산더 진도 빼기 생존
                        특화용.
                      </TableCell>
                    </Hidden>
                    <TableCell>8907.50</TableCell>
                    <TableCell>2.40초</TableCell>
                    <TableCell>요술양배추 샐러드</TableCell>
                    <TableCell>1%</TableCell>
                    <TableCell>24.5%</TableCell>
                    <TableCell>3.4%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          onClose={() => {
            this.state.openedDialog = -1;
            this.setState(this.state);
          }}
          open={this.state.openedDialog === 0}
          scroll="paper"
          TransitionComponent={transition}
        >
          <AppBar position="static">
            <Toolbar variant="dense">
              <div
                style={{
                  flexGrow: 1
                }}
              >
                <Typography variant="body1">
                  평균 DPS가 가장 높지만 글쿨이 많이 느림. 사용 시 주의 요망.
                </Typography>
              </div>
              <IconButton
                onClick={() => {
                  this.state.openedDialog = -1;
                  this.setState(this.state);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent
            style={{
              minHeight: 24
            }}
          >
            <Grid container direction="column" spacing={5}>
              <Grid item />
              <Grid item>
                <li>
                  시뮬레이션 상 DPS는 가장 높지만 글로벌 쿨다운이 2.45초로 꽤
                  느린 편입니다. 따라서 인터넷 핑이 좋지 않거나 스킬 로테이션이
                  아직 최적화되지 않은 전투에서는 높은 DPS를 뽑아내기가 더
                  어려울 수도 있습니다. 극대가 높고 기시가 낮은 장비 세트이므로
                  음식은 "포포토 샐러드"를 섭취해줍니다.
                </li>
              </Grid>
              <Grid item>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2} />
                        <TableCell align="center">종류</TableCell>
                        <TableCell align="center">이름</TableCell>
                        <TableCell align="center" colSpan={2}>
                          마테리아
                        </TableCell>
                        <TableCell align="center">필요 재화</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow selected>
                        <TableCell>무기</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-bastard-sword.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 바스타드소드</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>4층 낱장 x 5</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>방패</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-shield.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 방패</TableCell>
                        <TableCell colSpan={2} />
                        <TableCell>4층 낱장 x 3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>머리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-helm-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 투구</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>
                          환상 석판 495개 +<br />
                          암영 강화섬유
                          <br />
                          (3층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>몸통</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-cuirass-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 전투흉갑</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>
                          환상 석판 825개 +<br />
                          암영 강화섬유
                          <br />
                          (3층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>손</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-gauntlets-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 건틀릿</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>2층 낱장 x 6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>허리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-tassets-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 허리갑옷</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>다리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-breeches-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 바지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>
                          환상 석판 825개 +<br />
                          암영 강화섬유
                          <br />
                          (3층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>발</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-greaves-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 갑주장화</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>기시 (신속)</TableCell>
                        <TableCell>2층 낱장 x 6</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>귀걸이</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-earring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 귀걸이</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>1층 낱장 x 4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>목걸이</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-necklace-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 목걸이</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>팔찌</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-bracelet-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 팔찌</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>1층 낱장 x 4</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>반지</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-ring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 반지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>1층 낱장 x 4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>반지</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-ring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 반지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          onClose={() => {
            this.state.openedDialog = -1;
            this.setState(this.state);
          }}
          open={this.state.openedDialog === 1}
          scroll="paper"
          TransitionComponent={transition}
        >
          <AppBar position="static">
            <Toolbar variant="dense">
              <div
                style={{
                  flexGrow: 1
                }}
              >
                <Typography variant="body1">
                  글쿨 2.42초로 최적화된 장비 세트. 나이트만 키울 경우 추천.
                </Typography>
              </div>
              <IconButton
                onClick={() => {
                  this.state.openedDialog = -1;
                  this.setState(this.state);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent
            style={{
              minHeight: 24
            }}
          >
            <Grid container direction="column" spacing={5}>
              <Grid item />
              <Grid item>
                <li>
                  글로벌 쿨다운을 2.42초로 맞추고 나이트의 스킬 로테이션에 따라
                  DPS를 최적화한 장비 세트입니다. 나이트가 아닌 다른 방어 직업이
                  사용하기엔 조금 비효율적일 수 있습니다. 섭취 음식으로는
                  "포포토 샐러드"보다 "요술양배추 샐러드"의 효율이 더 좋습니다.
                </li>
              </Grid>
              <Grid item>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2} />
                        <TableCell align="center">종류</TableCell>
                        <TableCell align="center">이름</TableCell>
                        <TableCell align="center" colSpan={2}>
                          마테리아
                        </TableCell>
                        <TableCell align="center">필요 재화</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow selected>
                        <TableCell>무기</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-bastard-sword.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 바스타드소드</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>4층 낱장 x 5</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>방패</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-shield.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 방패</TableCell>
                        <TableCell colSpan={2} />
                        <TableCell>4층 낱장 x 3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>머리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-helm-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 투구</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>
                          환상 석판 495개 +<br />
                          암영 강화섬유
                          <br />
                          (3층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>몸통</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-mail-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 갑옷</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>4층 낱장 x 8</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>손</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-gauntlets-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 건틀릿</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>2층 낱장 x 6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>허리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-tassets-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 허리갑옷</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>다리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-breeches-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 바지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>
                          환상 석판 825개 +<br />
                          암영 강화섬유
                          <br />
                          (3층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>발</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-greaves-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 갑주장화</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>2층 낱장 x 6</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>귀걸이</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-earring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 귀걸이</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>1층 낱장 x 4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>목걸이</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-necklace-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 목걸이</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>팔찌</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-bracelet-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 팔찌</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>1층 낱장 x 4</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>반지</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-ring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 반지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>의지 (야망)</TableCell>
                        <TableCell>1층 낱장 x 4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>반지</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-ring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 반지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          onClose={() => {
            this.state.openedDialog = -1;
            this.setState(this.state);
          }}
          open={this.state.openedDialog === 2}
          scroll="paper"
          TransitionComponent={transition}
        >
          <AppBar position="static">
            <Toolbar variant="dense">
              <div
                style={{
                  flexGrow: 1
                }}
              >
                <Typography variant="body1">
                  글쿨 2.40초로 최적화된 장비 세트. 4탱 공용 세트로 사용 가능.
                </Typography>
              </div>
              <IconButton
                onClick={() => {
                  this.state.openedDialog = -1;
                  this.setState(this.state);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent
            style={{
              minHeight: 24
            }}
          >
            <Grid container direction="column" spacing={5}>
              <Grid item />
              <Grid item>
                <li>
                  글로벌 쿨다운을 2.4초로 맞춰 나이트가 아닌 다른 방어
                  직업으로도 사용하기 편하도록 최적화한 장비 세트입니다.
                  "요술양배추 샐러드"를 섭취합니다.
                </li>
              </Grid>
              <Grid item>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2} />
                        <TableCell align="center">종류</TableCell>
                        <TableCell align="center">이름</TableCell>
                        <TableCell align="center" colSpan={2}>
                          마테리아
                        </TableCell>
                        <TableCell align="center">필요 재화</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow selected>
                        <TableCell>무기</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-bastard-sword.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 바스타드소드</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>4층 낱장 x 5</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>방패</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-shield.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 방패</TableCell>
                        <TableCell colSpan={2} />
                        <TableCell>4층 낱장 x 3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>머리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-helm-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 투구</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>
                          환상 석판 495개 +<br />
                          암영 강화섬유
                          <br />
                          (3층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>몸통</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-mail-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 갑옷</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>4층 낱장 x 8</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>손</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-gauntlets-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 건틀릿</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>2층 낱장 x 6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>허리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-tassets-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 허리갑옷</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>다리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-breeches-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 바지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>
                          환상 석판 825개 +<br />
                          암영 강화섬유
                          <br />
                          (3층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>발</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-greaves-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 갑주장화</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>2층 낱장 x 6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>귀걸이</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-earring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 귀걸이</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>목걸이</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-necklace-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 목걸이</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>팔찌</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-bracelet-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 팔찌</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>1층 낱장 x 4</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>반지</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-ring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 반지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>의지 (야망)</TableCell>
                        <TableCell>1층 낱장 x 4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>반지</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-ring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 반지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          onClose={() => {
            this.state.openedDialog = -1;
            this.setState(this.state);
          }}
          open={this.state.openedDialog === 3}
          scroll="paper"
          TransitionComponent={transition}
        >
          <AppBar position="static">
            <Toolbar variant="dense">
              <div
                style={{
                  flexGrow: 1
                }}
              >
                <Typography variant="body1">
                  글쿨 2.40초 불굴 장비 세트. 절 알렉산더 진도 빼기 생존 특화용.
                </Typography>
              </div>
              <IconButton
                onClick={() => {
                  this.state.openedDialog = -1;
                  this.setState(this.state);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent
            style={{
              minHeight: 24
            }}
          >
            <Grid container direction="column" spacing={5}>
              <Grid item />
              <Grid item>
                <li>
                  글로벌 쿨다운 2.4초 세트에서 직격을 빼고 불굴을 높여 절 난이도
                  트라이에 대비한 장비 세트입니다. "요술양배추 샐러드"를
                  섭취합니다.
                </li>
              </Grid>
              <Grid item>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2} />
                        <TableCell align="center">종류</TableCell>
                        <TableCell align="center">이름</TableCell>
                        <TableCell align="center" colSpan={2}>
                          마테리아
                        </TableCell>
                        <TableCell align="center">필요 재화</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow selected>
                        <TableCell>무기</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-bastard-sword.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 바스타드소드</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>직격 (심안)</TableCell>
                        <TableCell>4층 낱장 x 5</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>방패</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-shield.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 방패</TableCell>
                        <TableCell colSpan={2} />
                        <TableCell>4층 낱장 x 3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>머리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-helm-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 투구</TableCell>
                        <TableCell>의지 (야망)</TableCell>
                        <TableCell>불굴 (강유)</TableCell>
                        <TableCell>
                          환상 석판 495개 +<br />
                          암영 강화섬유
                          <br />
                          (3층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>몸통</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-mail-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 갑옷</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>4층 낱장 x 8</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>손</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-gauntlets-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 건틀릿</TableCell>
                        <TableCell>의지 (야망)</TableCell>
                        <TableCell>불굴 (강유)</TableCell>
                        <TableCell>2층 낱장 x 6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>허리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-tassets-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 허리갑옷</TableCell>
                        <TableCell>불굴 (강유)</TableCell>
                        <TableCell>불굴 (강유)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>다리</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-breeches-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 바지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>
                          환상 석판 825개 +<br />
                          암영 강화섬유
                          <br />
                          (3층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>발</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-greaves-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 갑주장화</TableCell>
                        <TableCell>불굴 (강유)</TableCell>
                        <TableCell>불굴 (강유)</TableCell>
                        <TableCell>2층 낱장 x 6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>귀걸이</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-earring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 귀걸이</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>의지 (야망)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>목걸이</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-necklace-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 목걸이</TableCell>
                        <TableCell>의지 (야망)</TableCell>
                        <TableCell>의지 (야망)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>팔찌</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-bracelet-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 팔찌</TableCell>
                        <TableCell>불굴 (강유)</TableCell>
                        <TableCell>불굴 (강유)</TableCell>
                        <TableCell>1층 낱장 x 4</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>반지</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/edengrace-ring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>영웅 레이드</TableCell>
                        <TableCell>에덴의 은총 수호자 반지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>의지 (야망)</TableCell>
                        <TableCell>1층 낱장 x 4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>반지</TableCell>
                        <TableCell>
                          <Avatar
                            src={
                              SiteInfo.assetsUrl +
                              "/icons/items/augmented-deepshadow-ring-of-fending.png"
                            }
                          />
                        </TableCell>
                        <TableCell>석판 보강</TableCell>
                        <TableCell>보강된 암영 수호자 반지</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>극대 (무략)</TableCell>
                        <TableCell>
                          환상 석판 375개 +<br />
                          암영 경화약
                          <br />
                          (2층 낱장 x 4)
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default FiveOneBis;
