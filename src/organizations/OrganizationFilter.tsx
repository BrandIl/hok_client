import * as React from 'react';
import { FC } from 'react';
import {
    Filter,
    SearchInput,
    FilterProps,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';


const useFilterStyles = makeStyles({
    status: { width: 150 },
});

const OrganizationFilter: FC<Omit<FilterProps, 'children'>> = props => {
    const classes = useFilterStyles();
    return (
        <Filter {...props}>
            <SearchInput
                variant="standard"
                filterToQuery={(searchText: any) => ({ name: /aaa/ })}
                source="name"
                resettable
                alwaysOn
            />

        </Filter>
    );
};

export default OrganizationFilter;
