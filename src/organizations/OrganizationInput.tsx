import React from 'react';
import { useTranslate, required, ReferenceInput, SelectInput, AutocompleteInput } from 'react-admin';
import { useFormState } from 'react-final-form';
import { useStyles } from '../utils/styles';

export const OrganizationInput = () => {
    const translate = useTranslate();
    const classes = useStyles();

    return (

        <ReferenceInput
            source="organizationId"
            reference="organizations"
            label={translate("resources.organizations.name", { smart_count: 1 })}
            className={classes.formDataConsumerInput}
            variant="standard"
            filterToQuery={searchText => ({ 'name': searchText })}
        >
            <AutocompleteInput optionText="name" validate={[required()]} />
        </ReferenceInput>


    );
}