import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { FC } from 'react';
import {
    EditContextProvider, EditProps,
    FormTab, required, SimpleForm, TabbedForm, TextInput,
    useEditController, useTranslate
} from 'react-admin';
import { CustomerInput } from '../customers/CustomerInput';
import { OrganizationInput } from '../organizations/OrganizationInput';
import { ProjectInput } from '../projects/ProjectInput';
import ProjectReferenceField from '../projects/ProjectReferenceField';
import SectionTitle from '../utils/SectionTitle';
import { Organization } from '../utils/types';
import { expiringDate, validateDigits, validateEmail, validateNames, validatePrice } from '../utils/validations';


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
    inlineField: {
        display: 'inline-block',
        marginInlineEnd: 20,
    },
}));

interface Props extends EditProps {
    onCancel: () => void;
}


export const PaymentEdit: FC<Props> = ({ onCancel, ...props }) => {
    const classes = useStyles(props);
    const controllerProps = useEditController<Organization>(props);
    const translate = useTranslate();

    if (!controllerProps.record) {
        return null;
    }
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h6">
                    {translate('resources.organizations.details')}
                </Typography>
                <IconButton onClick={onCancel}>
                    <CloseIcon />
                </IconButton>
            </div>
            <EditContextProvider value={controllerProps}>
                <SimpleForm
                    className={classes.form}
                    basePath={controllerProps.basePath}
                    record={controllerProps.record}
                    save={controllerProps.save}
                    version={controllerProps.version}
                    redirect="list"
                    resource="payments"
                >
                    <ProjectReferenceField />
                    <SectionTitle
                        label={translate("resources.payments.fieldGroups.customer_details")}
                    />
                    <>
                        <OrganizationInput />
                        <ProjectInput />
                        <CustomerInput />
                    </>

                    <SectionTitle
                        label={translate("resources.payments.fieldGroups.collection_details")}
                    />
                    <TextInput
                        source="sum"
                        formClassName={classes.inlineField}
                        validate={validatePrice}
                    />
                    <TextInput
                        source="startDate"
                        formClassName={classes.inlineField}
                        type="month"
                        defaultValue={`${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`}
                    />
                    <TextInput
                        source="endDate"
                        formClassName={classes.inlineField}
                        type="month"
                        defaultValue={`${new Date().getFullYear() + 1}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`}
                    />
                    <SectionTitle
                        label=""
                    />
                    <TextInput
                        source="numOfPayments"
                        formClassName={classes.inlineField}
                        validate={validateDigits(1, 3)}
                    />

                    <TextInput
                        source="launchDay"
                        formClassName={classes.inlineField}
                        type="year"
                        validate={validateDigits(1, 2)}
                    />


                    <SectionTitle
                        label={translate("resources.payments.fieldGroups.bank_account")}
                    />

                    <TextInput
                        source="paymentMethod.bankAccount.bankId"
                        formClassName={classes.inlineField}
                        validate={validateDigits(2, 2)}
                    />
                    <TextInput
                        source="paymentMethod.bankAccount.branchId"
                        formClassName={classes.inlineField}
                        validate={validateDigits(3, 3)}
                    />
                    <TextInput
                        source="paymentMethod.bankAccount.accountNumber"
                        formClassName={classes.inlineField}
                        validate={validateDigits(6, 6)}
                    />

                    {/* <SectionTitle
                        label={translate("resources.payments.fieldGroups.credit_card")}
                    />
                    <TextInput
                        source="paymentMethod.creditCard.creditNumber"
                        formClassName={classes.inlineField}
                        validate={validateDigits(8, 16)}
                    />
                    <TextInput
                        source="paymentMethod.creditCard.expiringDate"
                        formClassName={classes.inlineField}
                        type="month"
                        defaultValue={`${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`}
                        validate={expiringDate}
                    />
                    <TextInput
                        source="paymentMethod.creditCard.cvv2"
                        formClassName={classes.inlineField}
                        validate={validateDigits(3, 3)}
                    /> */}

                </SimpleForm>
            </EditContextProvider>
        </div >
    );
};


