import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './styles';

type Props = {
    open: boolean;
    setOpen: any;
}

export const CustomizeSnackbar: React.FC<Props> = ({ open, setOpen }) => {
    const classes = useStyles();
    const handleClose: any = (event:any, reason:any) => {
        if(reason === 'clickaway') return;

        setOpen(false);
    }
    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
                    Transaction successfully created.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}
