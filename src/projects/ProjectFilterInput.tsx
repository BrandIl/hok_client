import React from 'react';
import { AutocompleteInput, ReferenceInput, useTranslate } from 'react-admin';
import { useFormState } from 'react-final-form';
import { useStyles } from '../utils/styles';

export const ProjectFiltertInput = () => {
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
            variant="standard"
            filterToQuery={searchText => (searchText ? { name: searchText } : {})}
        >
            <AutocompleteInput
                optionText="name"
                resettable
            />
        </ReferenceInput>
    );
}