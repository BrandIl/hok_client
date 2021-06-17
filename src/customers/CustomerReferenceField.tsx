import * as React from 'react';
import { FC } from 'react';
import { ReferenceField, ReferenceFieldProps } from 'react-admin';
import FullNameField from './FullNameField';

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
        <FullNameField />

    </ReferenceField>

);

CustomerReferenceField.defaultProps = {

    source: 'customerId',
    addLabel: true,
};

export default CustomerReferenceField;