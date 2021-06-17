import * as React from 'react';
import { FC } from 'react';
import {
    Identifier,
    Datagrid,
    TextField,
    DatagridProps,
    ReferenceField,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import ProjectReferenceField from '../projects/ProjectReferenceField';
import CustomerReferenceField from '../customers/CustomerReferenceField';
import OrganizationReferenceField from '../organizations/OrganizationReferenceField';

const useListStyles = makeStyles({
    headerRow: {
        borderLeftColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
    },
    headerCell: {
        padding: '6px 8px 6px 8px',
    },
    rowCell: {
        padding: '6px 8px 6px 8px',
    },
    comment: {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});

export interface ProjectListDesktopProps extends DatagridProps {
    selectedRow?: Identifier;
}

const ProjectListDesktop: FC<ProjectListDesktopProps> = ({
    selectedRow,
    ...props
}) => {
    const classes = useListStyles();
    return (
        <Datagrid
            rowClick="edit"
            // @ts-ignore
            classes={{
                headerRow: classes.headerRow,
                headerCell: classes.headerCell,
                rowCell: classes.rowCell,
            }}
            optimized
            {...props}
        >
            <OrganizationReferenceField />
            <TextField source="name" />
        </Datagrid >
    );
};

export default ProjectListDesktop;