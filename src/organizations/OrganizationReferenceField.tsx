import * as React from 'react';
import { FC } from 'react';
import { ReferenceField, ReferenceFieldProps, TextField } from 'react-admin';

interface Props {
    source?: string;
}

const OrganizationReferenceField: FC<
    Props & Omit<Omit<ReferenceFieldProps, 'source'>, 'reference' | 'children'>
> = props => (
    <ReferenceField
        label="Organization"
        source="organizationId"
        reference="organizations"
        {...props}
    >
        <TextField source="name" />
    </ReferenceField>
);

OrganizationReferenceField.defaultProps = {

    source: 'organizationId',
    addLabel: true,
};

export default OrganizationReferenceField;