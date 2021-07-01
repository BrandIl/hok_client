import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { FC } from 'react';
import {
    EditContextProvider, EditProps,
    SimpleForm, TextInput,
    useEditController, useTranslate
} from 'react-admin';
import { OrganizationInput } from '../organizations/OrganizationInput';
import OrganizationReferenceField from '../organizations/OrganizationReferenceField';
import SectionTitle from '../utils/SectionTitle';
import { Organization } from '../utils/types';
import { validateNames } from '../utils/validations';


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
    inlineField: {
        display: 'inline-block',
        marginInlineEnd: 20,
    },
}));

interface Props extends EditProps {
    onCancel: () => void;
}


export const ProjectEdit: FC<Props> = ({ onCancel, ...props }) => {
    const classes = useStyles(props);
    const controllerProps = useEditController<Organization>(props);
    const translate = useTranslate();

    if (!controllerProps.record) {
        return null;
    }
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h6">
                    {translate('resources.projects.details')}
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
                    resource="projects"
                >


                    <OrganizationInput />

                    <TextInput
                        source="name"
                        formClassName={classes.inlineField}
                        validate={validateNames(2, 10)}
                        variant="standard"
                    />
                </SimpleForm>
            </EditContextProvider>
        </div >
    );
};


