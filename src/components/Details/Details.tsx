import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

type Props = {
    title: string;
}

const Details: React.FC<Props> = ({ title }) => {
    const classes = useStyles();
    const { total, chartDate } = useTransactions(title);
    return (
        <Card className={ title ==='Income' ? classes.income : classes.expense }>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartDate} />
            </CardContent>
        </Card>
    )
}


export default Details;