import AppBar from "@material-ui/core/AppBar";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
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
                    <TableCell></TableCell>
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
                    <TableCell>
                      평균 DPS가 가장 높지만 글쿨이 많이 느림. 사용 시 주의
                      요망.
                    </TableCell>
                    <TableCell>9007.64</TableCell>
                    <TableCell>2.45초</TableCell>
                    <TableCell>Popoto Salad</TableCell>
                    <TableCell>15%</TableCell>
                    <TableCell>24.9%</TableCell>
                    <TableCell>2.4%</TableCell>
                  </TableRow>
                  <TableRow
                    hover
                    onClick={() => {
                      alert("test");
                    }}
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <TableCell>
                      글쿨 2.42초로 최적화된 장비 세트. 나이트만 키울 경우 추천.
                    </TableCell>
                    <TableCell>8975.95</TableCell>
                    <TableCell>2.42초</TableCell>
                    <TableCell>Robe Lettuce Salad</TableCell>
                    <TableCell>15%</TableCell>
                    <TableCell>24.5%</TableCell>
                    <TableCell>2.4%</TableCell>
                  </TableRow>
                  <TableRow
                    hover
                    onClick={() => {
                      alert("test");
                    }}
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <TableCell>
                      글쿨 2.40초로 최적화된 장비 세트. 4탱 공용 세트로 사용
                      가능.
                    </TableCell>
                    <TableCell>8967.80</TableCell>
                    <TableCell>2.40초</TableCell>
                    <TableCell>Robe Lettuce Salad</TableCell>
                    <TableCell>14%</TableCell>
                    <TableCell>24.5%</TableCell>
                    <TableCell>2%</TableCell>
                  </TableRow>
                  <TableRow
                    hover
                    onClick={() => {
                      alert("test");
                    }}
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <TableCell>
                      글쿨 2.40초 불굴 장비 세트. 절 알렉산더 진도 빼기 생존
                      특화용.
                    </TableCell>
                    <TableCell>8907.50</TableCell>
                    <TableCell>2.40초</TableCell>
                    <TableCell>Robe Lettuce Salad</TableCell>
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
            <Grid container direction="column" spacing={5}></Grid>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default FiveOneBis;
