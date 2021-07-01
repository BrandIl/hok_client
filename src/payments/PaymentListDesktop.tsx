import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import {
    Datagrid, DatagridProps, FunctionField, Identifier, NumberField, ReferenceField, TextField, translate
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
const Aside = (data: any) => {
    var sum: number = 0;
    for (var i in data.data.data) {
        sum += Number.parseFloat(data.data.data[i]?.sum);
    }

    return (
        <div>

            <Typography style={{
                direction: 'ltr',
                marginLeft: 50,
                marginTop: 20,
                marginBottom: 20
            }} >סה"כ לגביה: {sum}</Typography>
        </div >
    )
};


export interface PaymentListDesktopProps extends DatagridProps {
    selectedRow?: Identifier;
    total?: any;
}

const PaymentLListDesktop: FC<PaymentListDesktopProps> = ({
    selectedRow,
    total,
    ...props
}) => {
    const classes = useListStyles();
    return (
        <div>
            <Datagrid
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
                <ReferenceField
                    source="programId"
                    reference="programs"

                >
                    <TextField source="ordinalNumber" />
                </ReferenceField>

                <OrganizationReferenceField />
                <ProjectReferenceField />
                <CustomerReferenceField />
                <TextField source="sum" />
                <TextField source="paymentMethod.bankAccount.accountNumber" />
                <TextField source="paymentMethod.bankAccount.branchId" />
                <TextField source="paymentMethod.bankAccount.bankId" />

                <ReferenceField
                    source="programId"
                    reference="programs"
                    link={false}
                    label="resources.programs.fields.startDate"
                >
                    <FunctionField
                        render={(record: any) => {
                            return `${record.startDate.substring(5, 7)}/${record.startDate.substring(2, 4)}`
                        }}
                    />
                </ReferenceField>
                <ReferenceField
                    source="programId"
                    reference="programs"
                    link={false}
                    label="resources.programs.fields.endDate"
                >
                    <FunctionField
                        render={(record: any) => {
                            return `${record.endDate.substring(5, 7)}/${record.endDate.substring(2, 4)}`
                        }}
                    />
                </ReferenceField>
                <ReferenceField
                    source="programId"
                    reference="programs"
                    link={false}
                    label="resources.programs.fields.launchDay"
                >
                    <NumberField source="launchDay" />
                </ReferenceField>
                <ReferenceField
                    source="customerId"
                    reference="customers"
                    link={false}
                    label="resources.customers.fields.communication.address.city.name"

                >
                    <TextField source="communication.address.city.name" />
                </ReferenceField>
                <ReferenceField
                    source="customerId"
                    reference="customers"
                    link={false}
                    label="resources.customers.fields.communication.address.street.name"
                >
                    <FunctionField
                        label="Total Value"
                        render={(record: any) =>
                            `${record.communication.address.street.name} 
                         ${record.communication.address.street.number}`}
                    />

                </ReferenceField>
                <ReferenceField
                    source="customerId"
                    reference="customers"
                    link={false}
                    label="resources.customers.fields.communication.celular"

                >
                    <TextField
                        source="communication.celular"
                    />

                </ReferenceField>
            </Datagrid>
            <Aside data={props} />
        </div>
    );
};

export default PaymentLListDesktop;