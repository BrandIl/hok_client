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
    SelectInput,
    ReferenceInput,
} from 'react-admin';
import { Typography, Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';

export const CustomerEdit: FC<EditProps> = props => {
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
    return (
        <Edit title="עדכון פרטי לקוח"  {...props}>
            <SimpleForm>
            <TextInput label="שם פרטי"  source="firstName" />
            <TextInput label="שם משפחה"  source="lastName" />
            <TextInput label="תעודת זהות"  source="identity" />
            <ReferenceInput label="מוסד" source="organizationId" reference="organizations">
                <SelectInput  optionText="name" formClassName={classes.left}  validate={requiredValidate}/>
              </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
};