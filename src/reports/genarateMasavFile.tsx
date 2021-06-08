import { FormControl } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { FC, useState } from 'react';
import {
  Button, EditProps,
  fetchUtils, required,
  useNotify,
  useRedirect,
  useRefresh
} from 'react-admin';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

export const GenerateMasavFile: FC<EditProps> = props => {

  const [agreementDate, setAgreementDate] = useState(new Date().toISOString().substr(0, 10));
  const classes = useStyles(props);
  const requiredValidate = [required()];

  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = (message: string, path: string) => {
    notify(message)
    redirect(path);
    refresh();
  };
  const genarte = () => {
    try {
      // const date_agreement=15
      const httpClient = fetchUtils.fetchJson;
      const apiUrl = `http://127.0.0.1:4000/api/agreement/${agreementDate}`;

      const res = httpClient(`${apiUrl}`, { method: "POST" }).then(({ json }) => (
        {
          data: json,
        })

      );
      console.log(res);
      notify(`הדוח נוצר בהצלחה!`);
      redirect('/agreement');
      refresh();
    } catch (error) {
      notify(`ארעה שגיאה!`)
    }

  };

  return (
    <FormControl>

      <TextField
        id="date"
        value={agreementDate}
        onChange={e => setAgreementDate(e.target.value)}
        label="בחר תאריך גביה"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}

      />
      <Button color="primary" onClick={genarte} label="דוח מסב" ></Button>
    </FormControl>


  );

};

