import React, { FC } from 'react';
import {
    Edit,
    EditProps,
    SimpleForm,
    TextInput,
    required,
    email,
    TopToolbar,
    Button,
    ShowButton,
    Create,
    SelectInput,
    ReferenceInput,
    useNotify,
    useRedirect,
    useRefresh,
} from 'react-admin';
import { Typography, Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';

export const ProjectCreate: FC<EditProps> = props => {
   

    const styles: Styles<Theme, any> = {
        right: { display: 'inline-block', direction: 'rtl',margin: 32},
        center: { display: 'inline-block',  direction: 'rtl',margin: 32},
        left: { display: 'inline-block', direction: 'rtl',margin: 32 },
    };
    
    const useStyles = makeStyles(styles);
    const classes = useStyles(props);
    const requiredValidate = [required()];
    const Separator = () => <Box pt="1em" />;
    const SectionTitle = ({ label }: { label: string }) => {
    return (
        <Typography variant="h6" gutterBottom>
            {label}
        </Typography>
    );
   };
   const notify = useNotify();
   const refresh = useRefresh();
   const redirect = useRedirect();

   const onSuccess = () => {
       
       notify(`המוסד נוסף בהצלחה!`)
       redirect('/projects');
       refresh();
   };
    return (
        <Create title="הוספת פרויקט" onSuccess={onSuccess}   {...props}>
            <SimpleForm>
            <ReferenceInput label="ארגון" source="organizationId" reference="organizations">
                <SelectInput optionText="name" />
          </ReferenceInput>
            <TextInput
                    source="name"
                    label="שם פרויקט"
                     validate={requiredValidate}
                />
            </SimpleForm>
        </Create>
    );
};

