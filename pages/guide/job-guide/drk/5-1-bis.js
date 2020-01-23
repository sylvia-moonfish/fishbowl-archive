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

import Items from "../../../../data/5-1-bis-items";
import SiteInfo from "../../../../data/site-info";
import PageComponent from "../../../../src/components/page-component";

const transition = React.forwardRef((props, ref) => {
    return <Grow {...props} ref={ref} />;
});

const pageData = {
    title: "암흑기사 가이드 - 5.1 BiS",
    description: "파이널 판타지 14 암흑기사 가이드 - 5.1 BiS"
};

const gearSets = [
    {
        description: "글쿨 2.43초 세트. 글쿨이 많이 느리니 사용 시 주의 요망.",
        dps: 0,
        gcd: 0,
        foodId: "popotoSalad",
        dh: 0,
        ch: 0,
        ten: 0,
        dialog: {
            intro:
                '시뮬레이션 상 DPS는 가장 높지만 글로벌 쿨다운이 2.45초로 꽤 느린 편입니다. 따라서 인터넷 핑이 좋지 않거나 스킬 로테이션이 아직 최적화되지 않은 전투에서는 높은 DPS를 뽑아내기가 어려울 수도 있습니다. 극대가 높고 기시가 낮은 장비 세트이므로 음식은 "포포토 샐러드"를 섭취해줍니다.',
            gears: [
                {
                    itemId: "edengraceBastardSword",
                    materiaIds: ["ch", "dh"]
                },
                {
                    itemId: "edengraceShield",
                    materiaIds: []
                },
                {
                    itemId: "augmentedDeepshadowHelmOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowCuirassOfFending",
                    materiaIds: ["ch", "ch"]
                },
                {
                    itemId: "edengraceGauntletsOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowTassetsOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowBreechesOfFending",
                    materiaIds: ["ch", "ch"]
                },
                {
                    itemId: "edengraceGreavesOfFending",
                    materiaIds: ["dh", "sks"]
                },
                {
                    itemId: "edengraceEarringOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowNecklaceOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "edengraceBraceletOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "edengraceRingOfFending",
                    materiaIds: ["ch", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowRingOfFending",
                    materiaIds: ["ch", "ch"]
                }
            ]
        }
    },
    {
        description: "글쿨 2.42초 세트. 나이트만 키울 경우 추천.",
        dps: 8975.95,
        gcd: 2.42,
        foodId: "robeLettuceSalad",
        dh: 15,
        ch: 24.5,
        ten: 2.4,
        dialog: {
            intro:
                '글로벌 쿨다운을 2.42초로 맞추고 나이트의 스킬 로테이션에 따라 DPS를 최적화한 장비 세트입니다. 나이트가 아닌 다른 방어 직업이 사용하기엔 조금 비효율적일 수 있습니다. 섭취 음식으로는 "포포토 샐러드"보다 "요술양배추 샐러드"의 효율이 더 좋습니다.',
            gears: [
                {
                    itemId: "edengraceBastardSword",
                    materiaIds: ["ch", "dh"]
                },
                {
                    itemId: "edengraceShield",
                    materiaIds: []
                },
                {
                    itemId: "augmentedDeepshadowHelmOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "edengraceMailOfFending",
                    materiaIds: ["ch", "ch"]
                },
                {
                    itemId: "edengraceGauntletsOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowTassetsOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowBreechesOfFending",
                    materiaIds: ["ch", "ch"]
                },
                {
                    itemId: "edengraceGreavesOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "edengraceEarringOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowNecklaceOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "edengraceBraceletOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "edengraceRingOfFending",
                    materiaIds: ["ch", "det"]
                },
                {
                    itemId: "augmentedDeepshadowRingOfFending",
                    materiaIds: ["ch", "ch"]
                }
            ]
        }
    },
    {
        description: "글쿨 2.4초 세트. 4탱 공용으로 사용 가능.",
        dps: 8967.8,
        gcd: 2.4,
        foodId: "robeLettuceSalad",
        dh: 14,
        ch: 24.5,
        ten: 2,
        dialog: {
            intro:
                '글로벌 쿨다운을 2.4초로 맞춰 나이트가 아닌 다른 방어 직업으로도 사용하기 편하도록 최적화한 장비 세트입니다. "요술양배추 샐러드"를 섭취합니다.',
            gears: [
                {
                    itemId: "edengraceBastardSword",
                    materiaIds: ["ch", "dh"]
                },
                {
                    itemId: "edengraceShield",
                    materiaIds: []
                },
                {
                    itemId: "augmentedDeepshadowHelmOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "edengraceMailOfFending",
                    materiaIds: ["ch", "ch"]
                },
                {
                    itemId: "edengraceGauntletsOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowTassetsOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowBreechesOfFending",
                    materiaIds: ["ch", "ch"]
                },
                {
                    itemId: "edengraceGreavesOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowEarringOfFending",
                    materiaIds: ["ch", "dh"]
                },
                {
                    itemId: "augmentedDeepshadowNecklaceOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "edengraceBraceletOfFending",
                    materiaIds: ["dh", "dh"]
                },
                {
                    itemId: "edengraceRingOfFending",
                    materiaIds: ["ch", "det"]
                },
                {
                    itemId: "augmentedDeepshadowRingOfFending",
                    materiaIds: ["ch", "ch"]
                }
            ]
        }
    },
    {
        description: "글쿨 2.4초 불굴 세트. 절 알렉산더용.",
        dps: 8907.5,
        gcd: 2.4,
        foodId: "robeLettuceSalad",
        dh: 1,
        ch: 24.5,
        ten: 3.4,
        dialog: {
            intro:
                '글로벌 쿨다운 2.4초 세트에서 직격을 빼고 불굴을 높여 절 난이도 트라이에 대비한 장비 세트입니다. "요술양배추 샐러드"를 섭취합니다.',
            gears: [
                {
                    itemId: "edengraceBastardSword",
                    materiaIds: ["ch", "dh"]
                },
                {
                    itemId: "edengraceShield",
                    materiaIds: []
                },
                {
                    itemId: "augmentedDeepshadowHelmOfFending",
                    materiaIds: ["det", "ten"]
                },
                {
                    itemId: "edengraceMailOfFending",
                    materiaIds: ["ch", "ch"]
                },
                {
                    itemId: "edengraceGauntletsOfFending",
                    materiaIds: ["det", "ten"]
                },
                {
                    itemId: "augmentedDeepshadowTassetsOfFending",
                    materiaIds: ["ten", "ten"]
                },
                {
                    itemId: "augmentedDeepshadowBreechesOfFending",
                    materiaIds: ["ch", "ch"]
                },
                {
                    itemId: "edengraceGreavesOfFending",
                    materiaIds: ["ten", "ten"]
                },
                {
                    itemId: "augmentedDeepshadowEarringOfFending",
                    materiaIds: ["ch", "det"]
                },
                {
                    itemId: "augmentedDeepshadowNecklaceOfFending",
                    materiaIds: ["det", "det"]
                },
                {
                    itemId: "edengraceBraceletOfFending",
                    materiaIds: ["ten", "ten"]
                },
                {
                    itemId: "edengraceRingOfFending",
                    materiaIds: ["ch", "det"]
                },
                {
                    itemId: "augmentedDeepshadowRingOfFending",
                    materiaIds: ["ch", "ch"]
                }
            ]
        }
    }
];

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
                                                src={SiteInfo.assetsUrl + "/job-guide/drk.png"}
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
                                        패치 5.1 기준 암흑기사의 Best-In-Slot 장비 세트 목록입니다.
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
                                    {gearSets.map((gearSet, gearSetIndex) => {
                                        return (
                                            <TableRow
                                                hover
                                                key={gearSetIndex}
                                                onClick={() => {
                                                    this.state.openedDialog = gearSetIndex;
                                                    this.setState(this.state);
                                                }}
                                                style={{
                                                    cursor: "pointer"
                                                }}
                                            >
                                                <Hidden mdDown>
                                                    <TableCell>{gearSet.description}</TableCell>
                                                </Hidden>
                                                <TableCell>{gearSet.dps}</TableCell>
                                                <TableCell>{gearSet.gcd} 초</TableCell>
                                                <TableCell>{Items[gearSet.foodId].name}</TableCell>
                                                <TableCell>{gearSet.dh} %</TableCell>
                                                <TableCell>{gearSet.ch} %</TableCell>
                                                <TableCell>{gearSet.ten} %</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                {gearSets.map((gearSet, gearSetIndex) => {
                    return (
                        <Dialog
                            fullWidth={true}
                            key={gearSetIndex}
                            maxWidth="md"
                            onClose={() => {
                                this.state.openedDialog = -1;
                                this.setState(this.state);
                            }}
                            open={this.state.openedDialog === gearSetIndex}
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
                                            {gearSet.description}
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
                            <DialogContent>
                                <Grid container direction="column" spacing={5}>
                                    <Grid item />
                                    <Grid item>
                                        <li>{gearSet.dialog.intro}</li>
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
                                                    {gearSet.dialog.gears.map((gear, gearId) => {
                                                        const item = Items[gear.itemId];

                                                        if (!item)
                                                            return <div key={gearId}>{gear.itemId}</div>;

                                                        return (
                                                            <TableRow
                                                                key={gearId}
                                                                selected={item.from === "영웅 레이드"}
                                                            >
                                                                <TableCell>{item.type}</TableCell>
                                                                <TableCell>
                                                                    <Avatar
                                                                        src={SiteInfo.assetsUrl + item.iconSrc}
                                                                    />
                                                                </TableCell>
                                                                <TableCell>{item.from}</TableCell>
                                                                <TableCell>{item.name}</TableCell>
                                                                {gear.materiaIds.length === 2 ? (
                                                                    gear.materiaIds.map(
                                                                        (materiaId, materiaIdIndex) => {
                                                                            if (!Items[materiaId])
                                                                                return (
                                                                                    <div key={materiaIdIndex}>
                                                                                        {materiaId}
                                                                                    </div>
                                                                                );

                                                                            return (
                                                                                <TableCell key={materiaIdIndex}>
                                                                                    {Items[materiaId].name}
                                                                                </TableCell>
                                                                            );
                                                                        }
                                                                    )
                                                                ) : (
                                                                    <TableCell colSpan={2} />
                                                                )}
                                                                <TableCell>
                                                                    {item.required
                                                                        .split("\n")
                                                                        .map((str, strIndex) => {
                                                                            return (
                                                                                <p
                                                                                    key={strIndex}
                                                                                    style={{
                                                                                        margin: 0
                                                                                    }}
                                                                                >
                                                                                    {str}
                                                                                </p>
                                                                            );
                                                                        })}
                                                                </TableCell>
                                                            </TableRow>
                                                        );
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </Grid>
                            </DialogContent>
                        </Dialog>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default FiveOneBis;
