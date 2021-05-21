import * as React from 'react';
import {
    Avatar,
    Box,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomerIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';
import { useTranslate, useQueryWithStore, ListProps, ShowProps, Identifier } from 'react-admin';

import CardWithIcon from '../dashboard/CardWithIcon';
import { Organization } from '../types';
import { FC } from 'react';

const CustomersListDashboard = (organizationId:any) => {
    const translate = useTranslate();
    const classes = useStyles();

    const { loaded, data: customers } = useQueryWithStore({
        type: 'getList',
        resource: 'customers',
        payload: {
            filter: {
               organizationId:organizationId.organizationId
            },
            sort: {},
            pagination: { page: 1, perPage: 100 },
        },
    });

    if (!loaded) return null;

    return (
        <div className={classes.list} >
        <CardWithIcon
            to={`/customers?filter={"organizationId":"${organizationId.organizationId}"}`}
            icon={CustomerIcon}
            title={translate('לקוחות')}
         >
     
            <List  
                  >
                {customers
                    ? customers.map((record: Organization) => (
                          <ListItem 
                              button
                              to={`/customers/${record.id}`}
                              component={Link}
                              key={record.id}
                          >
                              <ListItemText  
                                 classes={{ primary: classes.listItemText }}
                                primary={`${record.lastName} ${record.firstName} ${record.identity}` } 
                              />
                          </ListItem>
                      ))
                    : null}
            </List>
            <Box flexGrow="1">&nbsp;</Box>
            <Button
                className={classes.link}
                component={Link}
                to={`/customers?filter={"organizationId":"${organizationId.organizationId}"}`}
                size="small"
                color="primary"
            >
                <Box p={1} className={classes.linkContent}>
                    {translate('כל הלקוחות')}
                </Box>
            </Button>
        </CardWithIcon>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    list:{
     // margin:'2em'
    // fontSize:'2em'
    },
    link: {
        borderRadius: 0,
    },
    linkContent: {
        color: theme.palette.primary.main,
        fontSize:'2em'
    },
    listItemText:{
        fontSize:'2em',//Insert your required size
       
        justifyContent:'flex-end'
      }
}));

export default CustomersListDashboard;
