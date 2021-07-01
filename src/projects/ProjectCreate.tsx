import React, { FC } from 'react';
import {
    Create, CreateProps,
    SimpleForm,
    TextInput,
    useTranslate
} from 'react-admin';
import { OrganizationInput } from '../organizations/OrganizationInput';
import { useStyles } from '../utils/styles';
import { validateNames } from '../utils/validations';
import { ProjectCreateActions } from './ProjectCreateActions';

export const ProjectCreate: FC<CreateProps> = props => {
    const classes = useStyles(props);
    const translate = useTranslate();

    return (
        <Create
            actions={<ProjectCreateActions />}
            {...props}
        >
            <SimpleForm>
                <OrganizationInput />

                <TextInput
                    source="name"
                    validate={validateNames(2, 15)}
                    formClassName={classes.formInput}
                    variant="standard"
                />
            </SimpleForm>
        </Create>
    );
};

