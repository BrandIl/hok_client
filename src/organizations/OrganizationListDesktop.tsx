import * as React from 'react';
import { FC } from 'react';
import {
    Identifier,
    Datagrid,
    TextField,
    DatagridProps,
    FunctionField,
    useTranslate
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
    const translate = useTranslate();

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
            {...props}
        >
            <TextField source="name" />
            <TextField source="masavData.charge.codeNosse" cellClassName={classes.comment} />
            <TextField source="communication.address.city.name" cellClassName={classes.comment} />
            <FunctionField
                label={translate("resources.organizations.fields.communication.address.street.name")}
                render={(record: any) => {
                    return `${record.communication.address.street.name} `
                        + `${record.communication.address.street.number}`
                }}
            />
            <TextField source="communication.concats.name" cellClassName={classes.comment} />
            <TextField source="communication.concats.email" cellClassName={classes.comment} />
            <TextField source="communication.concats.celular" cellClassName={classes.comment} />

        </Datagrid>
    );
};

export default OrganizationListDesktop;