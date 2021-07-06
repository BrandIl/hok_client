import { Box, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import React, { createElement, FC, useState } from 'react';
import { Link, useTranslate } from 'react-admin';
import cartouche from './cartouche.png';
import cartoucheDark from './cartoucheDark.png';

const useStyles = makeStyles(theme => ({
  card: {
    minHeight: 52,
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  main: (props: Props) => ({
    overflow: 'inherit',
    padding: 16,
    background: `url(${theme.palette.type === 'dark' ? cartoucheDark : cartouche
      }) no-repeat`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .icon': {
      color: theme.palette.type === 'dark' ? 'inherit' : '#FFF',
    },

  }),
  title: {},
}));

interface Props {
  value?: string;
}

const GenerateCharges: FC<Props> = ({ value }) => {
  const translate = useTranslate();
  const classes = useStyles({});

  const [date, setDate] = useState(new Date())
  return (
    <span>

      <Card className={classes.card}>
        <Link to={`/agreement/${date}`}>
          <div className={classes.main}>
            <Box textAlign="left">
              <Typography
                className={classes.title}
                color="textSecondary"
                variant="h5"
              >
                'זיכויים'
              </Typography>
            </Box>
            <Box width="3em" className="icon">
              {createElement(CreditCardIcon, { fontSize: 'large' })}
            </Box>

          </div>
        </Link>
        <TextField
          id="date"
          label={translate("choose date")}
          type="date"
          value={date}
          placeholder="First Name"
          onChange={e => setDate(e.target.value as unknown as Date)}
          defaultValue={new Date()}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Card>

      {date.toString()}
    </span >
  );
};

export default GenerateCharges;
