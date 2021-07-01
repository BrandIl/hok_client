import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import { FC } from 'react';
import {
    AutocompleteInput, Filter, FilterProps, FormDataConsumer, ReferenceInput, SearchInput, SelectInput
} from 'react-admin';
import { CustomerFiltertInput } from '../customers/CustomerFilterInput';
import { ProgramFiltertInput } from '../programs/ProgramFiltertInput';
import { ProjectFiltertInput } from '../projects/ProjectFilterInput';
import { Organization } from '../utils/types';




const useFilterStyles = makeStyles({
    status: { width: 150 },
});


export const Paymentilter: FC<Omit<FilterProps, 'children'>> = props => {
    const classes = useFilterStyles();
    // debugger;
    return (
        <Filter {...props}
        // key={props['currentFilter']['field']}
        >

            <ReferenceInput
                alwaysOn
                source="organizationId"
                reference="organizations"
                variant="standard"
            >
                <AutocompleteInput
                    optionText={(choice?: Organization) =>
                        choice?.id // the empty choice is { id: '' }
                            ? `${choice.name}`
                            : ''
                    }

                />
            </ReferenceInput >
            <CustomerFiltertInput />
            {/* <FormDataConsumer key="uniqueId1" >
                {
                    ({ formData, ...restOfTheProps }) => formData.organizationId &&
                        <CustomerFiltertInput /> && <ProjectFiltertInput /> && <ProgramFiltertInput />
                }
            </FormDataConsumer>

            <FormDataConsumer key="uniqu1">
                {
                    ({ formData, ...restOfTheProps }) => formData.organizationId &&
                        <CustomerFiltertInput /> && <ProjectFiltertInput /> && <ProgramFiltertInput />
                }
            </FormDataConsumer> */}


            <SelectInput
                source="status"
                variant="standard"
                choices={[
                    { id: true, name: "resources.programs.filters.active" },
                    { id: false, name: "resources.programs.filters.cancel" },
                    { name: "" },
                ]} />

        </Filter >
    );
};



