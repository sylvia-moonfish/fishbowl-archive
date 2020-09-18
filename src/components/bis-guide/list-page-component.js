import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { withRouter } from "next/router";

import React from "react";

import SiteInfo from "../../../data/site-info";
import PageComponent from "../../../src/components/page-component";

const styles = (theme) => ({
    banner: {
        maxWidth: 440,
        width: "100%",
    },
});

class ListPageComponent extends PageComponent {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.pageData) {
            throw new Error('pageData is not implemented.');
        }

        if (!this.jobs) {
            throw new Error('jobs is not implemented.');
        }

        return (
            <React.Fragment>
                {this.generateHead(
                    this.pageData.title + " | " + SiteInfo.siteTitle,
                    this.pageData.description
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
                                    >
                                        <Grid item>
                                            <Typography variant="h5">{this.pageData.title}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid
                                        alignItems="center"
                                        container
                                        direction="row"
                                        justify="center"
                                    >
                                        <Grid item>
                                            <img
                                                alt=""
                                                className={this.props.classes.banner}
                                                src={this.pageData.bannerSrc}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" spacing={5}>
                                        <Grid item xs={6}>
                                            <Card>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar
                                                            alt=""
                                                            src="/icons/jobs/tank.png"
                                                            variant="square"
                                                        />
                                                    }
                                                    title="방어 역할군"
                                                />
                                                <CardContent>
                                                    <List component="div" dense>
                                                        {this.jobs.tanks.map((tank, tankIndex) => {
                                                            return (
                                                                <ListItem
                                                                    button
                                                                    disabled={tank.disabled}
                                                                    key={tankIndex}
                                                                    onClick={() => {
                                                                        this.props.router.push(
                                                                            this.props.router.pathname +
                                                                            "/" +
                                                                            tank.initial
                                                                        );
                                                                    }}
                                                                >
                                                                    <ListItemAvatar>
                                                                        <Avatar
                                                                            alt=""
                                                                            src={`/icons/jobs/${tank.initial}.png`}
                                                                            variant="square"
                                                                        />
                                                                    </ListItemAvatar>
                                                                    <ListItemText
                                                                        primary={tank.name}
                                                                        secondary={tank.initial.toUpperCase()}
                                                                    />
                                                                </ListItem>
                                                            );
                                                        })}
                                                    </List>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Card>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar
                                                            alt=""
                                                            src="/icons/jobs/healer.png"
                                                            variant="square"
                                                        />
                                                    }
                                                    title="회복 역할군"
                                                />
                                                <CardContent>
                                                    <List component="div" dense>
                                                        {this.jobs.healers.map((healer, healerIndex) => {
                                                            return (
                                                                <ListItem
                                                                    button
                                                                    disabled={healer.disabled}
                                                                    key={healerIndex}
                                                                    onClick={() => {
                                                                        this.props.router.push(
                                                                            this.props.router.pathname +
                                                                            "/" +
                                                                            healer.initial
                                                                        );
                                                                    }}
                                                                >
                                                                    <ListItemAvatar>
                                                                        <Avatar
                                                                            alt=""
                                                                            src={`/icons/jobs/${healer.initial}.png`}
                                                                            variant="square"
                                                                        />
                                                                    </ListItemAvatar>
                                                                    <ListItemText
                                                                        primary={healer.name}
                                                                        secondary={healer.initial.toUpperCase()}
                                                                    />
                                                                </ListItem>
                                                            );
                                                        })}
                                                    </List>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    alt=""
                                                    src="/icons/jobs/dps.png"
                                                    variant="square"
                                                />
                                            }
                                            title="공격 역할군"
                                        />
                                        <CardContent>
                                            <Grid container direction="row" spacing={5}>
                                                <Grid item xs={6}>
                                                    <List component="div" dense>
                                                        <ListSubheader component="div">
                                                            근거리 공격
                            </ListSubheader>
                                                        {this.jobs.melees.map((melee, meleeIndex) => {
                                                            return (
                                                                <ListItem
                                                                    button
                                                                    disabled={melee.disabled}
                                                                    key={meleeIndex}
                                                                    onClick={() => {
                                                                        this.props.router.push(
                                                                            this.props.router.pathname +
                                                                            "/" +
                                                                            melee.initial
                                                                        );
                                                                    }}
                                                                >
                                                                    <ListItemAvatar>
                                                                        <Avatar
                                                                            alt=""
                                                                            src={`/icons/jobs/${melee.initial}.png`}
                                                                            variant="square"
                                                                        />
                                                                    </ListItemAvatar>
                                                                    <ListItemText
                                                                        primary={melee.name}
                                                                        secondary={melee.initial.toUpperCase()}
                                                                    />
                                                                </ListItem>
                                                            );
                                                        })}
                                                    </List>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Grid container direction="column" spacing={5}>
                                                        <Grid item>
                                                            <List component="div" dense>
                                                                <ListSubheader component="div">
                                                                    원거리 물리 공격
                                </ListSubheader>
                                                                {this.jobs.physicalRanged.map(
                                                                    (physicalRanged, physicalRangedIndex) => {
                                                                        return (
                                                                            <ListItem
                                                                                button
                                                                                disabled={physicalRanged.disabled}
                                                                                key={physicalRangedIndex}
                                                                                onClick={() => {
                                                                                    this.props.router.push(
                                                                                        this.props.router.pathname +
                                                                                        "/" +
                                                                                        physicalRanged.initial
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <ListItemAvatar>
                                                                                    <Avatar
                                                                                        alt=""
                                                                                        src={`/icons/jobs/${physicalRanged.initial}.png`}
                                                                                        variant="square"
                                                                                    />
                                                                                </ListItemAvatar>
                                                                                <ListItemText
                                                                                    primary={physicalRanged.name}
                                                                                    secondary={physicalRanged.initial.toUpperCase()}
                                                                                />
                                                                            </ListItem>
                                                                        );
                                                                    }
                                                                )}
                                                            </List>
                                                        </Grid>
                                                        <Grid item>
                                                            <List component="div" dense>
                                                                <ListSubheader component="div">
                                                                    원거리 마법 공격
                                </ListSubheader>
                                                                {this.jobs.magicalRanged.map(
                                                                    (magicalRanged, magicalRangedIndex) => {
                                                                        return (
                                                                            <ListItem
                                                                                button
                                                                                disabled={magicalRanged.disabled}
                                                                                key={magicalRangedIndex}
                                                                                onClick={() => {
                                                                                    this.props.router.push(
                                                                                        this.props.router.pathname +
                                                                                        "/" +
                                                                                        magicalRanged.initial
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <ListItemAvatar>
                                                                                    <Avatar
                                                                                        alt=""
                                                                                        src={`/icons/jobs/${magicalRanged.initial}.png`}
                                                                                        variant="square"
                                                                                    />
                                                                                </ListItemAvatar>
                                                                                <ListItemText
                                                                                    primary={magicalRanged.name}
                                                                                    secondary={magicalRanged.initial.toUpperCase()}
                                                                                />
                                                                            </ListItem>
                                                                        );
                                                                    }
                                                                )}
                                                            </List>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item>{this.generateFooter()}</Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(withRouter(ListPageComponent));
