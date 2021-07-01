import React from 'react';
import { ReferenceInput, SelectInput, useTranslate } from 'react-admin';
import { useFormState } from 'react-final-form';
import { useStyles } from '../utils/styles';
import { Customer } from '../utils/types';

export const CustomerFiltertInput = () => {
    const { values } = useFormState();
    const translate = useTranslate();
    const classes = useStyles();

    return (

        <ReferenceInput
            key="1"
            label={translate("resources.customers.name", { smart_count: 1 })}
            className={classes.formDataConsumerInput}
            source="customerId"
            reference="customers"
            filter={{ organizationId: values.organizationId }}
            disabled={!values.organizationId}
            variant="standard"
        >
            <SelectInput
                optionText={(choice?: Customer) =>
                    choice?.id // the empty choice is { id: '' }
                        ? `${choice.ordinalNumber} ${choice.lastName} ${choice.firstName}`
                        : ''
                }
                resettable
            />
        </ReferenceInput>
    );
}