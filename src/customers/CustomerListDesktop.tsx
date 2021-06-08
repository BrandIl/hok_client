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

import rowStyle from './rowStyle';
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

export interface OrganizationListDesktopProps extends DatagridProps {
    selectedRow?: Identifier;
}

const OrganizationListDesktop: FC<OrganizationListDesktopProps> = ({
    selectedRow,
    ...props
}) => {
    const classes = useListStyles();
    return (
        <Datagrid
            rowClick="edit"
            // @ts-ignore
            rowStyle={rowStyle(selectedRow)}
            classes={{
                headerRow: classes.headerRow,
                headerCell: classes.headerCell,
                rowCell: classes.rowCell,
            }}
            optimized
            {...props}>
            {/* <OrganizationReferenceField /> */}
            <ReferenceField
                source="organizationId"
                reference="organizations"
            >
                <TextField source="name" />
            </ReferenceField>
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="identity" />
        </Datagrid>
    );
};

export default OrganizationListDesktop;