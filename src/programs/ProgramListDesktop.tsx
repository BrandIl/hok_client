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

export interface ProgramListDesktopProps extends DatagridProps {
    selectedRow?: Identifier;
}

const ProgramLListDesktop: FC<ProgramListDesktopProps> = ({
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
            {...props}
        >
            <OrganizationReferenceField />
            <CustomerReferenceField />
            <ProjectReferenceField />
            <TextField source="sum" />
            <TextField source="startDate" />
            <TextField source="numOfPayments" />
            <TextField source="launchDay" />
            <TextField source="paymentMethod.bankAccount.bankId" />
            <TextField source="paymentMethod.bankAccount.branchId" />
            <TextField source="paymentMethod.bankAccount.accountNumber" />
            <TextField source="paymentMethod.creditCard.creditNumber" />
            <TextField source="paymentMethod.creditCard.expiringDate" />
            <TextField source="paymentMethod.creditCard.cvv2" />
        </Datagrid>
    );
};

export default ProgramLListDesktop;