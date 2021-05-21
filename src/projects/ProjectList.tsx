import { List, Datagrid, TextField, EditButton, ListProps, useQuery, Link, Identifier, ReferenceField, ReferenceManyField, SingleFieldList } from "react-admin"
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';
import { FC } from "react";
import React from "react";


export const ProjectList:FC<ListProps> = ({...props}) =>  {

    const styles: Styles<Theme, any> = {
        right: { display: 'inline-block', direction: 'rtl',margin: 32},
        center: { display: 'inline-block',  direction: 'rtl',margin: 32},
        left: { display: 'inline-block', direction: 'rtl',margin: 32 },
    };
    
    const useStyles = makeStyles(styles);
    const classes = useStyles(props);

    const projectsRowClick = (id:any, basePath:any, record:any) =>  {
        return `/programs?filter={"projectId":"${id}"}`;
       }
    return(
    <List {...props}>
        <Datagrid  rowClick={projectsRowClick} >    
            <TextField label="שם פרויקט"  source="name" />
            <TextField  label="מוסד" source="organizationId.name"/>
            <EditButton  />
        </Datagrid>
    </List>
    );
};


