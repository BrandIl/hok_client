import { Box, Card, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import { Button, useTranslate } from 'react-admin';
import payment from './payment.svg';





const useStyles = makeStyles(theme => ({
    root: {
        background:
            theme.palette.type === 'dark'
                ? '#535353'
                : `linear-gradient(to left, #8975fb 0%,#48e2b6 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,

        color: '#fff',
        padding: 20,
        marginTop: theme.spacing(2),
        marginBottom: '1em',
    },
    media: {
        background: `url(${payment}) top right / cover`,
        // marginLeft: 'auto',
    },
    actions: {
        [theme.breakpoints.down('md')]: {
            padding: 0,
            flexWrap: 'wrap',
            '& a': {
                marginTop: '1em',
                marginLeft: '0!important',
                marginRight: '1em',
            },
        },
    },
}));

const Welcome: FC = () => {
    const translate = useTranslate();
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <Box display="flex">
                    <Box flex="1">
                        <Typography align="center" variant="h1" component="h2" gutterBottom >
                            {/* {translate('Welcome')} */}
                        </Typography>
                        <Box maxWidth="40em">
                            <Typography variant="body1" component="p" gutterBottom>

                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Card>
            <Box component="span" m={1}>
                <Button />
            </Box>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="./welcome_illustration.svg"
                title="Contemplative Reptile"
            />
            <Box
                component="span" m={1}
                display={{ xs: 'none', sm: 'none', md: 'block' }}
                className={classes.media}
                width="16em"
                height="49em"
                overflow="hidden"
            />
            <Typography className={classes.media} variant="h1" component="h2">
                h1. Heading
            </Typography>
        </>
    );
};

export default Welcome;
