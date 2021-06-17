import React, { FC } from 'react';
import {
    Create, CreateProps,
    SimpleForm,
    TextInput,
    useTranslate
} from 'react-admin';
import { CustomerInput } from '../customers/CustomerInput';
import { OrganizationInput } from '../organizations/OrganizationInput';
import { ProjectInput } from '../projects/ProjectInput';
import SectionTitle from '../utils/SectionTitle';
import { useStyles } from '../utils/styles';
import { expiringDate, validateDigits, validatePrice } from '../utils/validations';
import { PaymentCreateActions } from './PaymentCreateActions';



export const PaymentCreate: FC<CreateProps> = props => {
    const classes = useStyles(props);
    const translate = useTranslate();

    return (
        <Create
            actions={<PaymentCreateActions />}
            {...props}
        >
            <SimpleForm>
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
                    formClassName={classes.formInput}
                    validate={validatePrice}
                />
                <TextInput
                    source="startDate"
                    formClassName={classes.formInput}
                    type="month"
                    defaultValue={`${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`}
                />
                <TextInput
                    source="endDate"
                    formClassName={classes.formInput}
                    type="month"
                    defaultValue={`${new Date().getFullYear() + 1}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`}
                />
                <SectionTitle
                    label=""
                />
                <TextInput
                    source="numOfPayments"
                    formClassName={classes.formInput}
                    validate={validateDigits(1, 3)}
                />

                <TextInput
                    source="launchDay"
                    formClassName={classes.formInput}
                    type="year"
                    validate={validateDigits(1, 2)}
                />


                <SectionTitle
                    label={translate("resources.payments.fieldGroups.bank_account")}
                />

                <TextInput
                    source="paymentMethod.bankAccount.bankId"
                    formClassName={classes.formInput}
                    validate={validateDigits(2, 2)}
                />
                <TextInput
                    source="paymentMethod.bankAccount.branchId"
                    formClassName={classes.formInput}
                    validate={validateDigits(3, 3)}
                />
                <TextInput
                    source="paymentMethod.bankAccount.accountNumber"
                    formClassName={classes.formInput}
                    validate={validateDigits(6, 6)}
                />

                {/* <SectionTitle
                    label={translate("resources.payments.fieldGroups.credit_card")}
                />
                <TextInput
                    source="paymentMethod.creditCard.creditNumber"
                    formClassName={classes.formInput}
                    validate={validateDigits(8, 16)}
                />
                <TextInput
                    source="paymentMethod.creditCard.expiringDate"
                    formClassName={classes.formInput}
                    type="month"
                    defaultValue={`${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`}
                    validate={expiringDate}
                />
                <TextInput
                    source="paymentMethod.creditCard.cvv2"
                    formClassName={classes.formInput}
                    validate={validateDigits(3, 3)}
                /> */}

            </SimpleForm>
        </Create >
    );
};

