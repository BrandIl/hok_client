import { FC } from 'react';
import {
    Identifier,
    Datagrid,
    DateField,
    TextField,
    DatagridProps,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';


import rowStyle from './rowStyle';

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
            rowClick="show"
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
            <TextField label="שם מוסד"  source="name" />
            <TextField label="עיר" source="communication.address.city.name" />
            <TextField label="מיקוד" source="communication.address.city.zip" />
            <TextField label="רחוב" source="communication.address.street.name" />
            <TextField label="מספר" source="communication.address.street.number" />
        </Datagrid>
    );
};

export default OrganizationListDesktop;