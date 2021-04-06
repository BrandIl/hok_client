import { useCallback } from 'react';
import { List,
         Datagrid, 
         TextField, 
         EmailField, 
         Edit, SimpleShowLayout,
         SimpleForm, Show,
         TextInput,ReferenceArrayField,
         Create,ChipField,
         useMutation,SingleFieldList,
         ReferenceManyField,
         ListButton,BooleanField,EditButton,
         useNotify, useRefresh, useRedirect,
        } from 'react-admin';


import { ChevronLeft }from '@material-ui/icons';
import { Typography }from '@material-ui/core';

import { TopToolbar, ShowButton } from 'react-admin';

const UserEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} label="Back" icon={<ChevronLeft />} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const Aside = ({ record }) => (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant="h6">Post details</Typography>
        {record && (
            <Typography variant="body2">
                Creation date: {record.name}
            </Typography>
        )}
    </div>
);

export const UserList = props => (
    <List  sort={{ field: 'name', order: 'DESC' }} {...props}>
        <Datagrid rowClick="edit">
            <TextField label=  "שם משתמש" source="name" />
            <EmailField label="כתובת מייל" source="email" />
            <BooleanField label="מנהל?"  source="isAdmin" />
            <ReferenceArrayField label="ארגונים" reference="organizations" source="organizations">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>

       
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const UserShow = props => (
    <Show title = "H" {...props}>
        <SimpleShowLayout  >
            <TextField label= "שם משתמש" source="name" />
            <EmailField label="כתובת מייל" source="email" />
            <BooleanField label="מנהל?"  source="isAdmin" />

            <ReferenceArrayField label="ארגונים" reference="organizations" source="organizations">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            </SimpleShowLayout>

    </Show>
);



export const UserEdit = (props) =>{ 

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onFailure = (error) => {
        notify(`Could not edit post: ${error.message}`)
        redirect('/users');
        refresh();
    };

   return ( <Edit  onFailure={onFailure} aside={<Aside />} actions ={<UserEditActions />} title="User edition" {...props}>
         <SimpleForm >
            <TextInput disabled source="name"/>
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="isAdmin" />
            <ReferenceManyField label="organizations" reference="organizations" target="post_id">
                <Datagrid>
                    <TextField source="id" />
                </Datagrid>
            </ReferenceManyField>
            <TextInput source="organizations" />
        </SimpleForm>
    </Edit>
);
};
export const UserCreate = (props) => {
    const [mutate] = useMutation();
    const save = useCallback(
        async (values) => {
            try {
                await mutate({
                    type: 'create',
                    resource: 'users',
                    payload: { data: values },
                }, { returnPromise: true });
            } catch (error) {
                if (error.body.errors) {
                    return error.body.errors;
                }
            }
        },
        [mutate],
    );

    return  ( 
    <Create title="User creation" {...props}>
        <SimpleForm save={save}>
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="isAdmin" />
            <ReferenceManyField label="organizations" reference="organizations" target="post_id">
                <Datagrid>
                    <TextField source="id" />
                </Datagrid>
            </ReferenceManyField>
            <TextInput source="organizations" />
        </SimpleForm>
    </Create>
    
);


};