import React from 'react';
import { useTranslate, required, ReferenceInput, SelectInput } from 'react-admin';
import { useFormState } from 'react-final-form';
import { useStyles } from '../utils/styles';

export const ProjectInput = () => {
    const { values } = useFormState();
    const translate = useTranslate();
    const classes = useStyles();

    return (

        <ReferenceInput
            label={translate("resources.projects.name", { smart_count: 1 })}
            className={classes.formDataConsumerInput}
            source="projectId"
            reference="projects"
            filter={{ organizationId: values.organizationId }}
            disabled={!values.organizationId}
        >
            <SelectInput
                optionText="name"
                validate={required()} />
        </ReferenceInput>
    );
}