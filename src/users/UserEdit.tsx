import { makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';
import {
  BooleanInput, Edit,
  EditProps,
  ListButton, ReferenceArrayInput, required,
  SelectArrayInput,
  ShowButton, SimpleForm, TextInput,
  TopToolbar, useEditController, useTranslate
} from 'react-admin';
import { Organization } from '../utils/types';
import { validateEmail, validateNames } from '../utils/validations';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 40,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '3em',
  },
  form: {
    [theme.breakpoints.up('xs')]: {
      width: 400,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      marginTop: -30,
    },
  },
  inlineField: {
    display: 'inline-block',
    width: '100%',
  },
}));


interface Props extends EditProps {
  onCancel?: () => void;
}
const UserEditActions = (basePath: any, data: any) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Back" />
    <ShowButton basePath={basePath} record={data} />
  </TopToolbar>
);



export const UserEdit: FC<Props> = ({ onCancel, ...props }) => {

  const classes = useStyles();
  const controllerProps = useEditController<Organization>(props);
  const translate = useTranslate();
  if (!controllerProps.record) {
    return null;
  }


  return (
    <Edit
      actions={<UserEditActions />}
      {...props}
    >
      <SimpleForm>
        <TextInput
          source="name"
          validate={validateNames(2, 20)}
        />
        <TextInput
          source="email"
          validate={validateEmail}
        />
        <ReferenceArrayInput
          source="organizations"
          reference="organizations"

        >
          <SelectArrayInput
            optionText="name"
          />
        </ReferenceArrayInput>

        <BooleanInput
          source="isAdmin"
          validate={required()}
        />

      </SimpleForm>
    </Edit>
  );
};

