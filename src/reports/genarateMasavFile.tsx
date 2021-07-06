import { Card, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import {
  Button, fetchUtils, useNotify, useRefresh, useTranslate
} from 'react-admin';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      background: "secondry"
    },
    form: {
      margin: 80,
    },
    textButton: {
      backgroundColor: 'default',
      fontSize: 50,
    },
    textField: {

      fontSize: 50,
      margin: 15,
      lineHeight: 32,

    },

  }),
);

export const DispathCollection = () => {

  const [agreementDate, setAgreementDate] = useState("");

  const notify = useNotify();
  const refresh = useRefresh();
  const translate = useTranslate();
  const classes = useStyles();


  const agreement = async () => {

    try {

      const httpClient = fetchUtils.fetchJson;
      const apiUrl = `http://localhost:4000/api/agreement/${agreementDate.toString().substr(0, 10)}`;

      await httpClient(`${apiUrl}`, { method: "GET" });

      notify(translate("resources.agreement.notifications.collect_success"));
      refresh();
    } catch (error) {
      notify(`ארעה שגיאה!`)
    }

  };

  return (
    <Card
      className={classes.container}
    >

      < form noValidate
        className={classes.form}

      >
        <Button
          className={classes.textButton}
          disabled={agreementDate ? false : true}
          label={translate("resources.agreement.launchCollection")}
          href={`http://localhost:4000/api/agreement/${agreementDate.toString().substr(0, 10)}`}
        // onClick={agreement} 
        />
        <div />
        <TextField

          className={classes.textField}

          id="date"
          type="date"
          value={agreementDate}
          onChange={(e: any) => setAgreementDate(e.target.value)}
          defaultValue={agreementDate}
          InputProps={{
            classes: {
              input: classes.textField,
            },
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div />

      </form>


    </Card >

  )
};

