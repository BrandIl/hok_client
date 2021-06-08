import React from 'react';
import { ReferenceInput, required, SelectInput, useTranslate } from 'react-admin';
import { useFormState } from 'react-final-form';
import { useStyles } from '../utils/styles';
import { Customer } from '../utils/types';

export const CustomerInput = () => {
    const { values } = useFormState();
    const translate = useTranslate();
    const classes = useStyles();

    return (
        <ReferenceInput
            label={translate("resources.customers.name", { smart_count: 1 })}
            className={classes.formDataConsumerInput}
            source="customerId"
            reference="customers"
            filter={{ organizationId: values.organizationId }}
            disabled={!values.organizationId}
        >

            <SelectInput
                optionText={(choice?: Customer) =>
                    choice?.id // the empty choice is { id: '' }
                        ? `${choice.firstName} ${choice.lastName}`
                        : ''
                }
                validate={required()} />
        </ReferenceInput>
    );
}