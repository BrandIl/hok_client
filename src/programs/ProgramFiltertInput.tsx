import React from 'react';
import { AutocompleteInput, ReferenceInput, SelectInput, useTranslate } from 'react-admin';
import { useFormState } from 'react-final-form';
import { useStyles } from '../utils/styles';

export const ProgramFiltertInput = () => {
    const { values } = useFormState();
    const translate = useTranslate();
    const classes = useStyles();

    return (

        <ReferenceInput
            label={translate("resources.programs.name", { smart_count: 1 })}
            className={classes.formDataConsumerInput}
            source="programId"
            reference="programs"
            filter={{ organizationId: values.organizationId }}
            disabled={!values.organizationId}
            variant="standard"
        >
            <SelectInput
                optionText="ordinalNumber"
                resettable
            />
        </ReferenceInput>
    );
}