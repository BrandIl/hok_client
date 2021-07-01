import React from 'react';
import { ReferenceInput, SelectInput, useTranslate } from 'react-admin';
import { useFormState } from 'react-final-form';
import { useStyles } from '../utils/styles';
import { Customer, Program } from '../utils/types';

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
                optionText={(choice?: Program) =>
                    choice?.id // the empty choice is { id: '' }
                        ? `${choice.ordinalNumber} `
                        : ''
                }
                resettable
            />
        </ReferenceInput>
    );
}