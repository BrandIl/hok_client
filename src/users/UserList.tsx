import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import {
    BooleanField,
    ChipField, Datagrid,
    EditButton,
    EmailField, Filter,
    FilterProps, List,
    ListProps,
    ReferenceArrayField,
    ShowButton,
    SingleFieldList, TextField
} from 'react-admin';


const ListFilters = (props: Omit<FilterProps, 'children'>) => (
    <Filter {...props}>

    </Filter>
);

const useStyles = makeStyles(theme => ({
    hiddenOnSmallScreens: {
        display: 'table-cell',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
}));

export const UserList: FC<ListProps> = ({ permissions, ...props }) => {
    const classes = useStyles();
    return (
        <List
            {...props}
            filters={<ListFilters />}
            perPage={25}
            sort={{ field: 'date', order: 'desc' }}
        >
            <Datagrid rowClick="show">
                <TextField label="שם משתמש" source="name" />
                {console.log("permissions", permissions)}
                {permissions === 'admin' && <EmailField label="כתובת מייל" source="email" />}
                <BooleanField label="מנהל?" source="isAdmin" />
                <ReferenceArrayField label="ארגונים" reference="organizations" source="organizations">
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceArrayField>
            </Datagrid>
        </List>
    );
};
