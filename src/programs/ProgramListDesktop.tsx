import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import {
    BooleanField,
    Datagrid, DatagridProps, FunctionField, Identifier, TextField
} from 'react-admin';
import CustomerReferenceField from '../customers/CustomerReferenceField';
import OrganizationReferenceField from '../organizations/OrganizationReferenceField';
import ProjectReferenceField from '../projects/ProjectReferenceField';
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
const Aside = (data: any, ids: any) => {
    console.log(`${ids}`)
    return (
        <div style={{ width: 200, margin: '1em' }}>
            <Typography>Post details</Typography>
            <Typography variant="body1">
                {/* Total value: {ids.map(id => data[id]).reduce((sum, balance) => sum + balance.total_value)} */}
            </Typography>
        </div>
    )
};
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
            <TextField source="ordinalNumber" />

            <OrganizationReferenceField />
            <CustomerReferenceField />
            <ProjectReferenceField />
            <TextField source="sum" />

            <FunctionField
                label="resources.programs.fields.startDate"
                render={(record: any) => {
                    return `${record.startDate.substring(5, 7)}/${record.startDate.substring(2, 4)}`
                }}
            />
            <FunctionField
                label="resources.programs.fields.endDate"
                render={(record: any) => {
                    return `${record.endDate.substring(5, 7)}/${record.endDate.substring(2, 4)}`
                }}
            />

            <TextField source="numOfPayments" />
            <TextField source="launchDay" />
            <TextField source="paymentMethod.bankAccount.bankId" />
            <TextField source="paymentMethod.bankAccount.branchId" />
            <TextField source="paymentMethod.bankAccount.accountNumber" />
            <BooleanField source="isActive" />

        </Datagrid>
    );
};

export default ProgramLListDesktop;