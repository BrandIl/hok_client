import * as React from 'react';
import { FC } from 'react';
import {
    Filter,
    SearchInput,
    FilterProps,
    AutocompleteInput,
    ReferenceInput,
    useTranslate,
    required,
    SelectInput,
    translate,
    FormDataConsumer,
} from 'react-admin';
import { makeStyles, Chip } from '@material-ui/core';
import { Organization } from '../utils/types';
import { useFormState } from 'react-final-form';
import { ProjectInput } from '../projects/ProjectInput';
import { useStyles } from '../utils/styles';
import { OrganizationInput } from '../organizations/OrganizationInput';



const ProjectInputs = (props: any) => {
    const { values } = useFormState();
    const translate = useTranslate();
    const classes = useStyles();

    return (

        <ReferenceInput
            label="project"

            // label={translate("resources.projects.name", { smart_count: 1 })}
            source="projectId"
            reference="projects"
            filter={{ organizationId: values.organizationId }}
            disabled={!values.organizationId}
            alwaysOn
            variant="standard"
        >
            <SelectInput
                optionText="name"
                resettable
                alwaysOn
            />

        </ReferenceInput>

    );
}
const useFilterStyles = makeStyles({
    status: { width: 150 },
});


export const Paymentilter: FC<Omit<FilterProps, 'children'>> = props => {
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
                label="organization"
            >
                <AutocompleteInput
                    optionText={(choice?: Organization) =>
                        choice?.id // the empty choice is { id: '' }
                            ? `${choice.name}`
                            : ''
                    }
                    filterToQuery={(searchText: any) => ({ name: /aaa/ })}

                />
            </ReferenceInput >


            <FormDataConsumer alwaysOn  >
                {
                    ({ formData, ...restOfTheProps }) => formData.organizationId &&
                        // <ReferenceInput
                        //     source="projectId"
                        //     reference="projects"
                        //     filter={{ organizationId: formData.organizationId }}
                        //     variant="standard"
                        // >
                        //     <SelectInput
                        //         optionText="name"
                        //         resettable
                        //         alwaysOn
                        //     />

                        // </ReferenceInput>
                        <ProjectInputs />
                }
            </FormDataConsumer>


            {/* <ProjectInputs source="projectId" /> */}
        </Filter >
    );
};



