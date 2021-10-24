import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import Details from './components/Details/Details';
import useStyles from './styles';
import Main from './components/Main/Main';

const App: React.FC = () => {
    const classes = useStyles();
    const { speechState } = useSpeechContext();
    const main: any = useRef(null);

    const executeScroll = () => main.current.scrollIntoView()

    useEffect(() => {
        if (speechState === SpeechState.Recording) {
            executeScroll();
        }
    }, [speechState]);

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={4} className={classes.mobile}>
                    <Details title="Income" />
                </Grid>
                <Grid ref={main} item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last}>
                    <Details title="Expense" />
                </Grid>
                <PushToTalkButtonContainer>
                    <PushToTalkButton />
                </PushToTalkButtonContainer>
            </Grid>
        </div>
    );
};

export default App;