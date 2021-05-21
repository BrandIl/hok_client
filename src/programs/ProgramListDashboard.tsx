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
import { Organization, Program } from '../types';
import { FC } from 'react';

const ProgramsListDashboard = (organizationId:any) => {
    const translate = useTranslate();
    const classes = useStyles();

    const { loaded, data: programs } = useQueryWithStore({
        type: 'getList',
        resource: 'programs',
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
            to={`/programs/create?filter={"organizationId":"${organizationId.organizationId}"}`}
            icon={CustomerIcon}
            title={translate('הוספת תוכנית')}
         >
     
            <List  
                  >
                {programs
                    ? programs.map((record: Program) => (
                          <ListItem 
                              button
                              to={`/programs/${record.id}`}
                              component={Link}
                              key={record.id}
                          >
                              <ListItemText  
                                 classes={{ primary: classes.listItemText }}
                                  primary={`${record.customerName} id: ${ organizationId.organizationId }` } 
                              />
                          </ListItem>
                      ))
                    : null}
            </List>
            <Box flexGrow="1">&nbsp;</Box>
            <Button
                className={classes.link}
                component={Link}
                to={`/programs?filter={"organizationId":"${organizationId.organizationId}"}`}
                size="small"
                color="primary"
            >
                <Box p={1} className={classes.linkContent}>
                    {translate('כל התכניות')}
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

export default ProgramsListDashboard;
