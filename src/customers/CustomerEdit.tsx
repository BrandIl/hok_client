import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { FC } from 'react';
import {
    AutocompleteInput,
    EditContextProvider, EditProps,
    ReferenceInput,
    SimpleForm, TextInput,
    useEditController, useTranslate
} from 'react-admin';
import { OrganizationInput } from '../organizations/OrganizationInput';
import OrganizationReferenceFiled from '../organizations/OrganizationReferenceField';
import SectionTitle from '../utils/SectionTitle';
import { Customer } from '../utils/types';
import { validateNames, validateDigits, validateEmail } from '../utils/validations';


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 40,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1em',
    },
    form: {
        [theme.breakpoints.up('xs')]: {
            width: 600,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            marginTop: -30,
        },
    },
    formInput: {
        display: 'inline-block',
        marginInlineEnd: 20,
    },
}));

interface Props extends EditProps {
    onCancel: () => void;
}



export const CustomerEdit: FC<Props> = ({ onCancel, ...props }) => {
    const classes = useStyles(props);
    const controllerProps = useEditController<Customer>(props);
    const translate = useTranslate();

    if (!controllerProps.record) {
        return null;
    }
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h6">
                    {translate('resources.customers.details')}
                </Typography>
                <IconButton onClick={onCancel}>
                    <CloseIcon />
                </IconButton>
            </div>
            <EditContextProvider value={controllerProps}>
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
            </EditContextProvider>
        </div >
    );
};


