import { List, Datagrid, TextField, EditButton, ListProps, ReferenceField } from "react-admin"
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';
import React, { FC } from "react";


export const CustomerList:FC<ListProps> = ({...props}) =>  {
    const styles: Styles<Theme, any> = {
        right: { display: 'inline-block', direction: 'rtl',margin: 32},
        center: { display: 'inline-block',  direction: 'rtl',margin: 32},
        left: { display: 'inline-block', direction: 'rtl',margin: 32 },
    };
    
    const useStyles = makeStyles(styles);
    const classes = useStyles(props);
    const customersRowClick = (id:any, basePath:any, record:any) =>  {
        return `/programs?filter={"customerId":"${id}"}`;
       }
    return(
    <List {...props}>
        <Datagrid rowClick={customersRowClick}>
            <TextField label="שם פרטי"  source="firstName" />
            <TextField label="שם משפחה"  source="lastName" />
            <TextField label="תעודת זהות"  source="identity" />
            <TextField source="organizationId.name" />
        </Datagrid>
    </List>
    );
};


