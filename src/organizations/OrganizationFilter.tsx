import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import {
    Filter, FilterProps, SearchInput
} from 'react-admin';


const useFilterStyles = makeStyles({
    status: { width: 150 },
});

const OrganizationFilter: FC<Omit<FilterProps, 'children'>> = props => {
    const classes = useFilterStyles();
    return (
        <Filter {...props}>
            <SearchInput
                variant="standard"
                source="name"
                resettable
                alwaysOn
            />



        </Filter>
    );
};

export default OrganizationFilter;
