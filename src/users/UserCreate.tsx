import React, { FC } from 'react';
import {
    Create,
    CreateProps,
    TextInput,
    required,
    email,
    FormTab,
    TabbedForm,
    useCreateController,
    useTranslate,
    CreateContextProvider,
    Datagrid,
    ReferenceManyField,
    SimpleForm,
    TextField,
    useNotify,
    useRedirect,
    useRefresh,
    ListButton,
    ShowButton,
    TopToolbar,
} from 'react-admin';
import { Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Organization } from '../types';
import CloseIcon from '@material-ui/icons/Close';
import { ChevronLeft } from "@material-ui/icons";

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


const requiredValidate = [required()];
interface Props extends CreateProps {
  onCancel?: () => void;
}
const UserCreateActions = ( basePath:any , data:any) => (
    <TopToolbar>
      <ListButton basePath={basePath} label="Back" icon={<ChevronLeft />} />
      <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
  );
  
  const Aside = (record:any) => (
    <div style={{ width: 200, margin: "1em" }}>
      <Typography variant="h6">Post details</Typography>
      {record && (
        <Typography variant="body2">Creation date: {record.name}</Typography>
      )}
    </div>
  );

export const UserCreate: FC<Props> = ({ onCancel, ...props }) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
  
    const onFailure = (error:Error) => {
      notify(`Could not Create post: ${error.message}`);
      redirect("/users");
      refresh();
    };
    const classes = useStyles();
    const controllerProps = useCreateController<Organization>(props);
    const translate = useTranslate();
    if (!controllerProps.record) {
        return null;
    }
 
  
    return (
      <Create
        onFailure={onFailure}
        aside={<Aside />}
        actions={<UserCreateActions />}
        title="עדכון משתמש"
        {...props}
      >
        <SimpleForm>
          <TextInput disabled source="name" />
          <TextInput source="email" />
          <TextInput source="password" />
          <TextInput source="isAdmin" />
          <ReferenceManyField
            label="organizations"
            reference="organizations"
            target="organizationId"
          >
            <Datagrid>
              <TextField source="id" />
            </Datagrid>
          </ReferenceManyField>
          <TextInput source="organizations" />
        </SimpleForm>
      </Create>
    );
  };

   