import React, { FC } from 'react';
import {
    Create,
    CreateProps,
    FormTab, TabbedForm, TextInput,

    useTranslate
} from 'react-admin';
import SectionTitle from '../utils/SectionTitle';
import { useStyles } from '../utils/styles';
import { validateDigits, validateEmail, validateNames, validatePrice } from '../utils/validations';
import { OrganizationCreateActions } from './OrganizationCreateActions';



export const OrganizationCreate: FC<CreateProps> = props => {
    const translate = useTranslate();
    const classes = useStyles(props);

    return (
        <Create
            actions={<OrganizationCreateActions />}
            {...props}>
            <TabbedForm >
                <FormTab label={translate('resources.organizations.titles.organization_details')}>

                    <SectionTitle label={translate('resources.organizations.titles.organization_name')} />
                    <TextInput
                        autoFocus
                        source="name"
                        formClassName={classes.formInput}
                        validate={validateNames(2, 30)}
                        variant="standard"
                    />
                    <SectionTitle label={translate('resources.organizations.titles.address')} />

                    <TextInput
                        source="communication.address.city.name"
                        formClassName={classes.formInput}
                        validate={validateNames(2, 30)}
                        variant="standard"

                    />
                    <TextInput
                        source="communication.address.city.zip"
                        formClassName={classes.formInput}
                        validate={validateDigits(5, 8)}
                        variant="standard"
                    />

                    <TextInput
                        source="communication.address.street.name"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validateNames(2, 30)}
                    />
                    <TextInput
                        source="communication.address.street.number"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validateNames(1, 6)}
                    />
                    <SectionTitle label={translate('resources.organizations.titles.details')} />

                    <TextInput
                        source="communication.concats.name"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validateNames(2, 30)}
                    />
                    <TextInput
                        type="email"
                        source="communication.concats.email"
                        formClassName={classes.formInput}
                        variant="standard"
                        validation={{ email: true }}
                        validate={validateEmail}
                    />

                    <TextInput
                        source="communication.concats.celular"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validateDigits(9, 10)}
                    />
                    <TextInput
                        source="communication.concats.remarks"
                        formClassName={classes.formInput}
                        variant="standard"
                    />
                </FormTab>
                <FormTab label={translate('resources.organizations.titles.masav_details')}>
                    <SectionTitle label={translate('resources.organizations.titles.credits')} />

                    <TextInput
                        source="masavData.credit.codeNosse"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validateDigits(8, 8)}
                    />
                    <TextInput
                        source="masavData.credit.senderCode"
                        formClassName={classes.formInput}
                        variant="standard"
                        defaultValue="00197"
                        validate={validateDigits(5, 5)}
                    />
                    <SectionTitle label={translate('resources.organizations.titles.charges')} />


                    <TextInput
                        source="masavData.charge.codeNosse"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validateDigits(8, 8)}
                    />
                    <TextInput
                        source="masavData.charge.senderCode"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validateDigits(5, 5)}
                    />

                    <SectionTitle label={translate('resources.organizations.titles.bank_account')} />

                    <TextInput
                        source="paymentAgreement.paymentMethod.bankAccount.bankId"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validateDigits(2, 2)}
                    />
                    <TextInput
                        source="paymentAgreement.paymentMethod.bankAccount.branchId"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validateDigits(3, 3)}
                    />
                    <TextInput
                        source="paymentAgreement.paymentMethod.bankAccount.accountNumber"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validateDigits(6, 6)}
                    />

                </FormTab>
                <FormTab label={translate('resources.organizations.titles.payment_method')}>
                    <SectionTitle label={translate('resources.organizations.titles.payment')} />
                    <TextInput
                        source="paymentAgreement.minPrice"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validatePrice}
                        defaultValue={20}
                    />
                    <TextInput
                        source="paymentAgreement.feePerUnit"
                        formClassName={classes.formInput}
                        variant="standard"
                        validate={validatePrice}
                        defaultValue={5}
                    />
                </FormTab>
            </TabbedForm>
        </Create>
    );
};



