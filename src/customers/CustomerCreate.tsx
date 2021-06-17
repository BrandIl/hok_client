import Hidden from '@material-ui/core/Hidden';
import React, { FC } from 'react';
import {
    AutocompleteInput,
    Create,
    CreateProps,
    Identifier,
    ReferenceInput,
    SimpleForm,
    TextInput,
    useNotify,
    useRedirect,
    useRefresh,
    useTranslate
} from 'react-admin';
import SectionTitle from '../utils/SectionTitle';
import { useStyles } from '../utils/styles';
import { validateDigits, validateEmail, validateNames } from '../utils/validations';




export const CustomerCreate: FC<CreateProps> = props => {

    const classes = useStyles(props);
    const translate = useTranslate();



    return (
        <Create
            {...props}
        >
            <SimpleForm>
                <SectionTitle
                    label={translate("resources.customers.fieldGroups.personal_details")}
                />
                <TextInput
                    source="firstName"
                    formClassName={classes.formInput}
                    validate={validateNames(2, 10)}
                />
                <TextInput
                    source="lastName"
                    formClassName={classes.formInput}
                    validate={validateNames(2, 10)}
                />
                <SectionTitle
                    label=""
                />
                <TextInput
                    source="identity"
                    formClassName={classes.formInput}
                    validate={validateDigits(9, 9)}

                />
                <SectionTitle
                    label={translate("resources.customers.fieldGroups.address")}
                />
                <TextInput
                    source="communication.address.city.name"
                    formClassName={classes.formInput}
                    validate={validateNames(2, 20)}
                />
                <TextInput
                    source="communication.address.city.zip"
                    formClassName={classes.formInput}
                    validate={validateDigits(5, 8)}
                />
                <SectionTitle
                    label=""
                />
                <TextInput
                    source="communication.address.street.name"
                    formClassName={classes.formInput}
                    validate={validateNames(2, 20)}
                />
                <TextInput
                    source="communication.address.street.number"
                    formClassName={classes.formInput}
                    validate={validateNames(1, 20)}

                />
                <SectionTitle
                    label={translate("resources.customers.fieldGroups.communication")}
                />

                <TextInput
                    type="email"
                    source="communication.email"
                    formClassName={classes.formInput}
                    validate={validateEmail}
                />

                <TextInput
                    source="communication.celular"
                    formClassName={classes.formInput}
                    validate={validateDigits(9, 10)}
                />
                <TextInput
                    source="communication.remarks"
                    formClassName={classes.formInput}
                />
                <SectionTitle
                    label={translate("resources.organizations.name", { smart_count: 1 })}
                />

                <ReferenceInput
                    source="organizationId"
                    reference="organizations"
                >
                    <AutocompleteInput
                        optionText="name"
                    />
                </ReferenceInput>




            </SimpleForm>
        </Create>
    );
};

