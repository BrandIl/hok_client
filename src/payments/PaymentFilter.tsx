import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import { FC } from 'react';
import {
    AutocompleteInput, DateInput, DateTimeInput, Filter, FilterProps, FormDataConsumer, ReferenceInput, SelectInput
} from 'react-admin';
import { TextField, Typography } from '@material-ui/core';

import { CustomerFiltertInput } from '../customers/CustomerFilterInput';
import { ProgramFiltertInput } from '../programs/ProgramFiltertInput';
import { ProjectFiltertInput } from '../projects/ProjectFilterInput';
import { Organization } from '../utils/types';
import { useState } from 'react';




const useFilterStyles = makeStyles({
    status: { width: 150 },
});


export const Paymentilter: FC<Omit<FilterProps, 'children'>> = props => {
    const classes = useFilterStyles();
    const [agreementDate, setAgreementDate] = useState("");

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
            <DateInput
                source="collectionDate"
                variant="standard"

            />


            <FormDataConsumer alwaysOn >
                {
                    ({ formData, ...restOfTheProps }) => formData.organizationId &&
                        <>
                            <ProjectFiltertInput />
                            <CustomerFiltertInput />
                            <ProgramFiltertInput />

                        </>


                }
            </FormDataConsumer>

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



