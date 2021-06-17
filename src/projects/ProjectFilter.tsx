import * as React from 'react';
import { FC } from 'react';
import {
    Filter,
    SearchInput,
    FilterProps,
    ReferenceInput,
    AutocompleteInput,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Organization } from '../utils/types';


const useFilterStyles = makeStyles({
    status: { width: 150 },
});

const ProgramFilter: FC<Omit<FilterProps, 'children'>> = props => {
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


            <ReferenceInput source="organizationId" reference="organizations">
                <AutocompleteInput
                    optionText={(choice?: Organization) =>
                        choice?.id // the empty choice is { id: '' }
                            ? `${choice.name}`
                            : ''
                    }
                />
            </ReferenceInput>
        </Filter>
    );
};

export default ProgramFilter;
