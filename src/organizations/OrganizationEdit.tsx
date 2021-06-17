import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { FC } from 'react';
import {
    EditContextProvider, EditProps,
    FormTab, required, TabbedForm, TextInput,
    useEditController, useTranslate
} from 'react-admin';
import SectionTitle from '../utils/SectionTitle';
import { Organization } from '../utils/types';
import { validateDigits, validateEmail, validateNames, validatePrice } from '../utils/validations';


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



export const OrganizationEdit: FC<Props> = ({ onCancel, ...props }) => {
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
                <TabbedForm
                    className={classes.form}
                    basePath={controllerProps.basePath}
                    record={controllerProps.record}
                    save={controllerProps.save}
                    version={controllerProps.version}
                    redirect="list"
                    resource="organizations"
                //  toolbar={<ReviewEditToolbar />}
                >
                    <FormTab label={translate('resources.organizations.titles.organization_details')}>

                        <SectionTitle label={translate('resources.organizations.titles.organization_name')} />
                        <TextInput
                            autoFocus
                            source="name"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateNames(2, 30)}

                        />
                        <SectionTitle label={translate('resources.organizations.titles.address')} />

                        <TextInput
                            source="communication.address.city.name"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateNames(2, 30)}

                        />
                        <TextInput
                            source="communication.address.city.zip"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(5, 8)}
                        />

                        <TextInput
                            source="communication.address.street.name"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateNames(2, 30)}
                        />
                        <TextInput
                            source="communication.address.street.number"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateNames(1, 6)}
                        />
                        <SectionTitle label={translate('resources.organizations.titles.details')} />

                        <TextInput
                            source="communication.concats.name"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateNames(2, 30)}
                        />
                        <TextInput
                            type="email"
                            source="communication.concats.email"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateEmail}
                        />

                        <TextInput
                            source="communication.concats.celular"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(9, 10)}
                        />
                        <TextInput
                            source="communication.concats.remarks"
                            formClassName={classes.inlineField}
                            variant="standard"
                        />
                    </FormTab>
                    <FormTab label={translate('resources.organizations.titles.masav_details')}>
                        <SectionTitle label={translate('resources.organizations.titles.credits')} />

                        <TextInput
                            source="masavData.credit.codeNosse"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(8, 8)}
                        />
                        <TextInput
                            source="masavData.credit.senderCode"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(5, 5)}
                        />
                        <SectionTitle label={translate('resources.organizations.titles.charges')} />


                        <TextInput
                            source="masavData.charge.codeNosse"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(8, 8)}
                        />
                        <TextInput
                            source="masavData.charge.senderCode"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(5, 5)}
                        />

                        <SectionTitle label={translate('resources.organizations.titles.bank_account')} />

                        <TextInput
                            source="paymentAgreement.paymentMethod.bankAccount.bankId"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(2, 2)}
                        />
                        <TextInput
                            source="paymentAgreement.paymentMethod.bankAccount.branchId"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(3, 3)}
                        />
                        <TextInput
                            source="paymentAgreement.paymentMethod.bankAccount.accountNumber"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(6, 6)}
                        />
                        {/* <SectionTitle label={translate('resources.organizations.titles.cerdit_card')} />

                        <TextInput
                            source="paymentAgreement.paymentMethod.creditCard.creditNumber"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(8, 16)}
                        />
                        <TextInput
                            source="paymentAgreement.paymentMethod.creditCard.expiringDate"
                            formClassName={classes.inlineField}
                            variant="standard"
                            type="month"
                            validate={required()}
                        />
                        <TextInput
                            source="paymentAgreement.paymentMethod.creditCard.cvv2"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validateDigits(3, 3)}
                        /> */}
                    </FormTab>
                    <FormTab label={translate('resources.organizations.titles.payment_method')}>
                        <SectionTitle label={translate('resources.organizations.titles.payment')} />
                        <TextInput
                            source="paymentAgreement.minPrice"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validatePrice}
                        />
                        <TextInput
                            source="paymentAgreement.feePerUnit"
                            formClassName={classes.inlineField}
                            variant="standard"
                            validate={validatePrice}
                        />
                    </FormTab>
                </TabbedForm>
            </EditContextProvider>
        </div >
    );
};


