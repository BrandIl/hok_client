import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronLeft } from "@material-ui/icons";
import React, { FC } from 'react';
import {
  BooleanInput,
  Create,
  CreateProps,
  Datagrid,
  FormDataConsumer,
  ListButton, ReferenceArrayInput, ReferenceManyField, required,
  SelectArrayInput,
  ShowButton, SimpleForm,
  TextField, TextInput,
  TopToolbar, useCreateController,
  useNotify,
  useRedirect,
  useRefresh, useTranslate
} from 'react-admin';
import { useStyles } from '../utils/styles';
import { Organization } from '../utils/types';
import { validateEmail, validateNames } from '../utils/validations';

// const useStyles = makeStyles(theme => ({
//   root: {
//     paddingTop: 40,
//   },
//   title: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     margin: '3em',
//   },
//   form: {
//     [theme.breakpoints.up('xs')]: {
//       width: 400,
//     },
//     [theme.breakpoints.down('xs')]: {
//       width: '100vw',
//       marginTop: -30,
//     },
//   },
//   inlineField: {
//     display: 'inline-block',
//     width: '100%',
//   },
// }));

const UserCreateActions = (basePath: any, data: any) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Back" />
    <ShowButton basePath={basePath} record={data} />
  </TopToolbar>
);


export const UserCreate: FC<CreateProps> = props => {

  const classes = useStyles();
  const controllerProps = useCreateController<Organization>(props);
  const translate = useTranslate();
  if (!controllerProps.record) {
    return null;
  }


  return (
    <Create
      actions={<UserCreateActions />}
      {...props}
    >
      <SimpleForm>

        <TextInput
          variant="standard"
          source="name"
          validate={validateNames(2, 20)}
        />
        <TextInput
          variant="standard"
          source="email"
          validate={validateEmail}
        />

        <BooleanInput
          source="isAdmin"
          validate={required()}
        />

        <ReferenceArrayInput
          source="organizations"
          reference="organizations"

        >
          <SelectArrayInput
            optionText="name"
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

