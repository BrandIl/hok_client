import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import {
    Datagrid, DatagridProps, Identifier, TextField
} from 'react-admin';
import OrganizationReferenceField from '../organizations/OrganizationReferenceField';
import rowStyle from './rowStyle';


const useListStyles = makeStyles({
    headerRow: {
        borderLeftColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
        marginLeft: 200
    },
    headerCell: {
        padding: '6px 8px 6px 8px',
    },
    rowCell: {
        padding: '6px 8px 6px 8px',
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
            style={{ tableLayout: 'fixed' }}
            rowClick="edit"
            // @ts-ignore
            rowStyle={rowStyle(selectedRow)}
            classes={{
                headerRow: classes.headerRow,
                headerCell: classes.headerCell,
                rowCell: classes.rowCell,
            }}
            optimized
            {...props}
        >
            <TextField source="ordinalNumber" />
            <OrganizationReferenceField />
            <TextField source="name" />

        </Datagrid >
    );
};

export default ProjectListDesktop;