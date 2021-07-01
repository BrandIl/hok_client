import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import {
    AutocompleteInput, BooleanInput, Filter, FilterProps,
    FormDataConsumer,
    ReferenceInput, SearchInput, SelectInput
} from 'react-admin';
import { CustomerFiltertInput } from '../customers/CustomerFilterInput';
import { ProjectFiltertInput } from '../projects/ProjectFilterInput';
import { Organization } from '../utils/types';


const useFilterStyles = makeStyles({
    status: { width: 150 },
});

const ProgramFilter: FC<Omit<FilterProps, 'children'>> = props => {
    const classes = useFilterStyles();
    return (
        <Filter {...props}>


            <ReferenceInput
                alwaysOn
                source="organizationId"
                reference="organizations"
                variant="standard"
            >
                <AutocompleteInput
                    optionText="name"

                />

            </ReferenceInput >


            {/* 
            <FormDataConsumer alwaysOn  >
                {
                    ({ formData, ...restOfTheProps }) => formData.organizationId &&
                        <CustomerFiltertInput />
                }
            </FormDataConsumer>

            <FormDataConsumer alwaysOn  >
                {
                    ({ formData, ...restOfTheProps }) => formData.organizationId &&
                        <ProjectFiltertInput />
                }
            </FormDataConsumer> */}
            <SelectInput
                source="isActive"
                variant="standard"
                choices={[
                    { id: true, name: "resources.programs.filters.active" },
                    { id: false, name: "resources.programs.filters.cancel" },
                    { name: "" },
                ]} />
        </Filter>
    );
};

export default ProgramFilter;
