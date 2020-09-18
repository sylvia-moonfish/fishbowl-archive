import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

import Head from "next/head";

import PropTypes from 'prop-types';

import React from "react";

import SiteInfo from "data/site-info";

const useStyles = makeStyles(theme => ({
    copyrightTypography: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
}));

const PageComponent = props => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Head>
                <title key="title">{props.title}</title>
                <meta content={props.description} key="description" name="description" />

                <meta content={props.title} key="og-title" property="og:title" />

                <meta
                    content={props.description}
                    key="og-description"
                    property="og:description"
                />

                <meta content={props.title} key="twitter-title" name="twitter:title" />
                <meta
                    content={props.description}
                    key="twitter-description"
                    name="twitter:description"
                />
            </Head>
            <Grid container direction="column" spacing={5}>
                <props.Component {...props.pageProps} />
                <Grid item>
            <Grid container justify="center">
                <Typography
                            align="center"
                            className={classes.copyrightTypography}
                    paragraph
                    variant="caption"
                >
                    {SiteInfo.siteTitle} ⓒ {SiteInfo.copyrightYear} {SiteInfo.author}. All
          Rights Reserved.
        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
        </React.Fragment>
    );
};

PageComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired
};

export default PageComponent;
