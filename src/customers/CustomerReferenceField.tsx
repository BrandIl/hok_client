import * as React from 'react';
import { FC } from 'react';
import { ReferenceField, ReferenceFieldProps, TextField } from 'react-admin';

interface Props {
    source?: string;
}

const CustomerReferenceField: FC<
    Props & Omit<Omit<ReferenceFieldProps, 'source'>, 'reference' | 'children'>
> = props => (
    <ReferenceField
        label="Customer"
        source="customerId"
        reference="customers"
        {...props}
    >

        <TextField source="lastName" />
    </ReferenceField>
);

CustomerReferenceField.defaultProps = {

    source: 'CustomerId',
    addLabel: true,
};

export default CustomerReferenceField;