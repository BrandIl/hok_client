import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { FC } from 'react';
import {
  BooleanInput,
  EditContextProvider, EditProps, ReferenceArrayInput, required, SelectArrayInput, SimpleForm, TextInput,
  useEditController, useTranslate
} from 'react-admin';
import { Customer, User } from '../utils/types';
import { validateEmail, validateNames } from '../utils/validations';


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 40,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1em',
  },
  form: {
    [theme.breakpoints.up('xs')]: {
      width: 600,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      marginTop: -30,
    },
  },
  formInput: {
    display: 'inline-block',
    marginInlineEnd: 20,
  },
}));

interface Props extends EditProps {
  onCancel: () => void;
}



export const UserEdit: FC<Props> = ({ onCancel, ...props }) => {
  const classes = useStyles(props);
  const controllerProps = useEditController<User>(props);
  const translate = useTranslate();

  if (!controllerProps.record) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h6">
          {translate('resources.users.details')}
        </Typography>
        <IconButton onClick={onCancel}>
          <CloseIcon />
        </IconButton>
      </div>
      <EditContextProvider value={controllerProps}>
        <SimpleForm
          className={classes.form}
          basePath={controllerProps.basePath}
          record={controllerProps.record}
          save={controllerProps.save}
          version={controllerProps.version}
          redirect="list"
          resource="users"
        >
          <TextInput
            source="name"
            formClassName={classes.formInput}
            validate={validateNames(2, 20)}
            variant="standard"
          />
          <TextInput
            source="email"
            validate={validateEmail}
            variant="standard"

          />
          <ReferenceArrayInput
            source="organizations"
            reference="organizations"
            variant="standard"


          >
            <SelectArrayInput
              optionText="name"
              variant="standard"

            />
          </ReferenceArrayInput>

          <BooleanInput
            source="isAdmin"
            validate={required()}
            variant="standard"

          />

        </SimpleForm>
      </EditContextProvider>
    </div >
  );
};


