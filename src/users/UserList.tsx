import * as React from 'react';
import { FC } from 'react';
import {
    List,
    ListProps,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    NumberField,
    Filter,
    FilterProps,
    DateInput,
    BooleanField,
    ChipField,
    EditButton,
    EmailField,
    ReferenceArrayField,
    ShowButton,
    SingleFieldList,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';


const ListFilters = (props: Omit<FilterProps, 'children'>) => (
    <Filter {...props}>
        <DateInput source="date_gte" alwaysOn />
        <DateInput source="date_lte" alwaysOn />
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

export const UserList: FC<ListProps> = props => {
    const classes = useStyles();
    return (
        <List
            {...props}
            filters={<ListFilters />}
            perPage={25}
            sort={{ field: 'date', order: 'desc' }}
        >
              <Datagrid rowClick="show">
            <TextField label=  "שם משתמש" source="name" />
            <EmailField label="כתובת מייל" source="email" />
            <BooleanField label="מנהל?"  source="isAdmin" />
            <ReferenceArrayField label="ארגונים" reference="organizations" source="organizations">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>

       
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
    );
};
