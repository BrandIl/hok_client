import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import {
    Datagrid, DatagridProps, useTranslate, FunctionField, Identifier, ReferenceField, TextField
} from 'react-admin';
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
            {...props}>
            {/* <OrganizationReferenceField /> */}
            <TextField source="ordinalNumber" />

            <ReferenceField
                source="organizationId"
                reference="organizations"
            >
                <TextField source="name" />
            </ReferenceField>
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="identity" />
            <TextField source="communication.address.city.name" />
            <TextField source="communication.address.city.name" />
            <FunctionField
                label={translate("resources.customers.fields.communication.address.street.name")}
                render={(record: any) => {
                    return `${record.communication.address.street.name}   `
                        + `    ${record.communication.address.street.number}`
                }}
            />
            <TextField source="communication.email" />
            <TextField source="communication.celular" />
        </Datagrid>
    );
};

export default OrganizationListDesktop;