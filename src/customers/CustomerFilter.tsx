import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import {
    AutocompleteInput, Filter, FilterProps,
    ReferenceInput, SearchInput, useTranslate
} from 'react-admin';
import { Organization } from '../utils/types';


const useFilterStyles = makeStyles({
    status: { width: 150 },
});

const CustomerFilter: FC<Omit<FilterProps, 'children'>> = props => {
    const classes = useFilterStyles();
    const translate = useTranslate();
    return (
        <Filter {...props}>
            <SearchInput
                variant="standard"
                source="lastName"
                resettable
                alwaysOn
            />

            <SearchInput
                placeholder={translate("resources.customers.fields.ordinalNumber")}
                variant="standard"
                source="ordinalNumber"
                resettable
                alwaysOn
            />


            <ReferenceInput
                alwaysOn
                variant="standard"
                source="organizationId"
                reference="organizations">
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

export default CustomerFilter;
