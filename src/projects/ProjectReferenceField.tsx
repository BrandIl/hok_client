import * as React from 'react';
import { FC } from 'react';
import { ReferenceField, ReferenceFieldProps, TextField } from 'react-admin';

interface Props {
    source?: string;
}


const ProjectReferenceField: FC<
    Props & Omit<Omit<ReferenceFieldProps, 'source'>, 'reference' | 'children'>
> = props => (
    <ReferenceField
        label="Project"
        source="projectId"
        reference="projects"
        {...props}
    >

        <TextField source="name" />
    </ReferenceField>
);

ProjectReferenceField.defaultProps = {

    source: 'projectId',
    addLabel: true,
};

export default ProjectReferenceField;