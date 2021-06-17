import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC, useState } from 'react';
import {
  AutocompleteInput,
  Button, DateInput, EditProps,
  fetchUtils, ReferenceInput, required, useNotify,
  useRedirect,
  useRefresh
} from 'react-admin';
import { EmailKeys } from '../utils/email';
import emailjs from 'emailjs-com';


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
      const apiUrl = `http://localhost:4000/api/agreement/${agreementDate}`;

      const res = httpClient(`${apiUrl}`, { method: "GET" }).then(({ json }) => (
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

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm(`gmail`, EmailKeys.TEMPLATE_ID, e.target, EmailKeys.USER_ID)
      .then((result) => {
        alert(`Message Sent, We will get back to you shortly",${result.text}`);
      },
        (error: Error) => {
          alert(`An error occurred, Please try again", ${error.message}`);
        });
  };

  return (
    <>
      <Button label="genarte" onClick={genarte} />
      <ReferenceInput label="Post" source="post_id" reference="posts">
        <AutocompleteInput optionText="title" />
      </ReferenceInput>
      <DateInput source="" />
      {/* <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form> */}
    </>



  )
};

