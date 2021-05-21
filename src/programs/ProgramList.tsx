import { List, Datagrid, TextField, EditButton, ListProps, useQuery, Link, Identifier, NumberField, ReferenceField, CloneButton, RecordContext } from "react-admin"
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';
import { FC } from "react";
import React from "react";


export const ProgramList:FC<ListProps> = ({...props}) =>  {

    const styles: Styles<Theme, any> = {
        right: { display: 'inline-block', direction: 'rtl',margin: 32},
        center: { display: 'inline-block',  direction: 'rtl',margin: 32},
        left: { display: 'inline-block', direction: 'rtl',margin: 32 },
    };
    
    const useStyles = makeStyles(styles);
    const classes = useStyles(props);

    return(
    <List {...props}>
        <Datagrid  rowClick="edit" >    
            <TextField label="מוסד" source="organizationId.name"/>
            <TextField label="שם פרטי" source="customerId.lastName"/>
            <TextField label="שם משפחה" source="customerId.firstName"/>
            <TextField label="פרויקט" source="projectId.name"/>
            <TextField label="סכום לגביה"  source="sum" />
            <TextField label="תאריך התחלה"  source="startDate" />
            <TextField label="מספר תשלומים"  source="numOfPayments" />
            <TextField label="יום גביה"  source="launchDay" />
            <TextField label="בנק"  source="paymentMethod.bankAccount.bankId" />
            <TextField label="סניף"  source="paymentMethod.bankAccount.branchId" />
            <TextField label="מספר חשבון"  source="paymentMethod.bankAccount.accountNumber" />
            <TextField label="מספר כרטיס"  source="paymentMethod.CreditCard.creditNumber" />
            <TextField label="תוקף"  source="paymentMethod.CreditCard.expiringDate" />
            <NumberField label="CVV"  source="paymentMethod.CreditCard.cvv2" />
            <EditButton  />
        </Datagrid>
    </List>
    );
};


