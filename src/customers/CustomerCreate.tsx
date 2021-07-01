import React, { FC } from 'react';
import {
    AutocompleteInput,
    Create,
    CreateProps, ReferenceInput,
    SimpleForm,
    TextInput, useTranslate,
} from 'react-admin';
import SectionTitle from '../utils/SectionTitle';
import { useStyles } from '../utils/styles';
import { validateDigits, validateEmail, validateNames } from '../utils/validations';
import { CustomerCreateActions } from './CustomerCreateActions';




export const CustomerCreate: FC<CreateProps> = props => {
    const classes = useStyles(props);
    const translate = useTranslate();

    return (
        <Create
            actions={<CustomerCreateActions />}
            {...props}
        >
            <SimpleForm>
                <SectionTitle
                    label={translate("resources.customers.fieldGroups.personal_details")}
                />
                <TextInput
                    source="firstName"
                    formClassName={classes.formInput}
                    variant="standard"
                    validate={validateNames(2, 10)}
                />
                <TextInput
                    source="lastName"
                    formClassName={classes.formInput}
                    variant="standard"
                    validate={validateNames(2, 10)}
                />
                <SectionTitle
                    label=""
                />
                <TextInput
                    source="identity"
                    formClassName={classes.formInput}
                    variant="standard"
                    validate={validateDigits(9, 9)}
                />
                <SectionTitle
                    label={translate("resources.customers.fieldGroups.address")}
                />
                <TextInput
                    source="communication.address.city.name"
                    formClassName={classes.formInput}
                    variant="standard"
                    validate={validateNames(2, 20)}
                />
                <TextInput
                    source="communication.address.city.zip"
                    formClassName={classes.formInput}
                    variant="standard"
                    validate={validateDigits(5, 8)}
                />
                <SectionTitle
                    label=""
                />
                <TextInput
                    source="communication.address.street.name"
                    formClassName={classes.formInput}
                    variant="standard"
                    validate={validateNames(2, 20)}
                />
                <TextInput
                    source="communication.address.street.number"
                    formClassName={classes.formInput}
                    variant="standard"
                    validate={validateNames(1, 20)}

                />
                <SectionTitle
                    label={translate("resources.customers.fieldGroups.communication")}
                />

                <TextInput
                    type="email"
                    source="communication.email"
                    formClassName={classes.formInput}
                    variant="standard"
                    validate={validateEmail}
                />

                <TextInput
                    source="communication.celular"
                    formClassName={classes.formInput}
                    variant="standard"
                    validate={validateDigits(9, 10)}
                />
                <TextInput
                    source="communication.remarks"
                    formClassName={classes.formInput}
                    variant="standard"
                />
                <SectionTitle
                    label={translate("resources.organizations.name", { smart_count: 1 })}
                />

                <ReferenceInput
                    source="organizationId"
                    reference="organizations"
                    variant="standard"

                >
                    <AutocompleteInput
                        optionText="name"
                    />
                </ReferenceInput>




            </SimpleForm>
        </Create>
    );
};

