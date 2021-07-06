import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import {
    AutocompleteInput, Filter, FilterProps,
    ReferenceInput, SearchInput
} from 'react-admin';


const useFilterStyles = makeStyles({
    status: { width: 150 },
});

const ProjectFilter: FC<Omit<FilterProps, 'children'>> = props => {
    const classes = useFilterStyles();
    return (
        <Filter {...props}>
            <SearchInput
                variant="standard"
                source="name"
                resettable
                alwaysOn
            />
            <ReferenceInput
                source="organizationId"
                reference="organizations"
                variant="standard"
                filterToQuery={searchText => ({ name: searchText })}
            >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>

        </Filter>
    );
};

export default ProjectFilter;
